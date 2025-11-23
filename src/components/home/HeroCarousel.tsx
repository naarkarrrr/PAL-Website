
'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import Link from "next/link";
import { RotatingText } from "./RotatingText";

const heroSlides = [
  PlaceHolderImages.find((p) => p.id === 'hero'),
  PlaceHolderImages.find((p) => p.id === 'story1'),
  PlaceHolderImages.find((p) => p.id === 'gallery5'),
  PlaceHolderImages.find((p) => p.id === 'why_choose_us'),
].filter(Boolean);

const heroContent = [
    {
        title: "Give a Paw a Chance",
        subtitle: "We are a non-profit organization dedicated to rescuing, rehabilitating, and rehoming animals in need."
    },
    {
        title: "Your New Best Friend Awaits",
        subtitle: "Open your heart and home. Adopt a loyal companion today."
    },
    {
        title: "Volunteer With Us",
        subtitle: "Join our team of passionate animal lovers and make a direct impact."
    },
     {
        title: "Support Our Mission",
        subtitle: "Your generosity fuels our work and gives animals a second chance at life."
    }
]

export function HeroCarousel() {
  return (
    <div className="w-full h-[80vh] relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={slide?.id}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide?.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
                 <div className="z-10 text-white container mx-auto px-4">
                  <div className="flex justify-center items-center">
                    <RotatingText />
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mt-4">
                    {heroContent[i]?.title || 'Saving Lives, One Paw at a Time'}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    {heroContent[i]?.subtitle || 'Join us in our mission to protect and care for animals.'}
                  </p>
                  <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg">
                      <Link href="/adopt">Adopt Now</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                    >
                      <Link href="/donate">Donate</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
