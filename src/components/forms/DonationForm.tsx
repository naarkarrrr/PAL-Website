'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DonationSchema } from '@/lib/types';
import { useState } from 'react';
import { Loader2, QrCode } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { MotionDiv } from '../shared/MotionDiv';

type DonationFormValues = z.infer<typeof DonationSchema>;

const predefinedAmounts = [100, 250, 500, 1000];

export function DonationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customAmount, setCustomAmount] = useState('');

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(DonationSchema),
  });

  function handleAmountSelect(amount: number) {
    setCustomAmount(amount.toString());
    form.setValue('amount', amount);
    form.clearErrors('amount');
  }

  function handleCustomAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setCustomAmount(value);
    form.setValue('amount', Number(value));
  }

  async function onSubmit(data: DonationFormValues) {
    setIsSubmitting(true);
    
    // In a real app, you would get these from your server
    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_your_key';
    const orderAmount = data.amount * 100; // Amount in paise

    const options = {
        key: razorpayKey,
        amount: orderAmount,
        currency: "INR",
        name: "Kindred Paws",
        description: "Donation for Animal Welfare",
        image: "/logo.png", // URL to your logo
        handler: function (response: any) {
            toast({
                title: "Donation Successful!",
                description: `Thank you for your generous donation of ₹${data.amount}.`,
            });
            // Here you would verify the payment signature on your server
            // and save the transaction details.
            console.log(response);
            form.reset();
            setCustomAmount('');
        },
        prefill: {
            // You can prefill user data if they are logged in
            name: "",
            email: "",
            contact: ""
        },
        notes: {
            address: "Kindred Paws Donation"
        },
        theme: {
            color: "#D87093" // Muted Rose
        }
    };
    
    // @ts-ignore - Razorpay is loaded from script
    if (window.Razorpay) {
        // @ts-ignore
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response: any){
            toast({
                variant: 'destructive',
                title: 'Payment Failed',
                description: response.error.description || 'Please try again.',
            });
            console.error(response.error);
        });
        rzp.open();
    } else {
        toast({
            variant: 'destructive',
            title: 'Payment Gateway Not Loaded',
            description: 'Please check your connection and try again.',
        });
    }

    setIsSubmitting(false);
  }

  return (
    <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
                <Label>Select an amount (in INR)</Label>
                <RadioGroup
                    onValueChange={(value) => handleAmountSelect(Number(value))}
                    className="grid grid-cols-2 gap-4"
                >
                    {predefinedAmounts.map(amount => (
                        <Label key={amount} htmlFor={`amount-${amount}`} className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-primary has-[input:checked]:bg-primary has-[input:checked]:text-primary-foreground">
                            <RadioGroupItem value={amount.toString()} id={`amount-${amount}`} />
                            <span>₹{amount}</span>
                        </Label>
                    ))}
                </RadioGroup>
            </div>
          
            <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Or enter a custom amount</FormLabel>
                    <FormControl>
                    <Input 
                        type="number" 
                        placeholder="e.g., 750" 
                        {...field}
                        onChange={handleCustomAmountChange}
                        value={customAmount}
                        min="1"
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

          <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
             {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
             Donate ₹{form.getValues('amount') || '...'}
          </Button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>
          
          <div className="text-center">
             <p className="text-sm text-muted-foreground mb-4">Pay with UPI or QR Code</p>
             <div className="flex justify-center">
                <QrCode className="h-24 w-24 text-muted-foreground" />
             </div>
             <p className="text-sm font-mono mt-2 text-muted-foreground">kindredpaws@upi</p>
          </div>

        </form>
      </Form>
    </MotionDiv>
  );
}
