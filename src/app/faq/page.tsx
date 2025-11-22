
import { PageHeader } from "@/components/shared/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is PAL Foundation?",
    answer: "PAL Foundation is a non-profit organization dedicated to the welfare of animals. We rescue, rehabilitate, and rehome animals in need, as well as advocate for their rights through various programs and legal action."
  },
  {
    question: "How can I adopt a pet?",
    answer: "Our adoption section is coming soon! Once launched, you'll be able to visit our 'Adopt' page to see the animals currently looking for a home. The page will detail our adoption process, which includes an application and counseling to ensure a perfect match for both you and the pet."
  },
  {
    question: "What should I do if I find an injured animal?",
    answer: "If you find an animal in distress within our serviceable areas, please call our ambulance service at +91 9979844451 immediately. If you are outside our areas, you can fill out the request form on our 'Ambulance' page, and we will do our best to assist or guide you."
  },
  {
    question: "How can I volunteer?",
    answer: "We're always looking for passionate volunteers! You can fill out the membership application on our 'Volunteer' page. We have various roles available, from on-field rescue to administrative support and community awareness."
  },
  {
    question: "How are my donations used?",
    answer: "Your donations are vital to our operations. They fund medical treatments, food, shelter, rescue operations, and our various awareness and sterilization programs. We ensure transparency in how all contributions are used to directly benefit the animals."
  },
  {
    question: "Can my company partner with PAL Foundation?",
    answer: "Absolutely! We welcome corporate partnerships and sponsorships. Please visit our 'Sponsor & Partner' page and fill out the inquiry form to discuss how we can work together to create a greater impact."
  }
]

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our work, adoption, and how you can get involved."
      />
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-headline text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
