'use client'
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star,Wifi,Bed,Tv } from "lucide-react";

export default function Features(){
  const highlights = [
      {
        text: 5,
        icon: <Star className="w-5"/>
      },
      {
        text: '100mbps',
        icon: <Wifi className="w-5" />
      },
      {
        text: '4 Beds',
        icon: <Bed className="w-5" />
      },
      {
        text: 'Home Cinema 100"',
        icon: <Tv className="w-5" />
      }
  ]
  const featureData = [
    {
      slideNo: 1,
      title: "Ohana Hale Tagaytay",
      image: "https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/sw3qplpc09fngrugielm",
      descript: "Our Hawaiian-inspired condo unit is located just in front of Ayala Malls Serin Tagaytay (2 minutes walk) and Fora Mall, the most convenient and accessible condominium in Tagaytay!",
    },
    {
      slideNo: 2,
      title: "Serin East Condo Tagaytay, Overlooking Taal Volcano",
      image: "https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/mll8ncnp6bofrnpny9cl",
      descript: "Our family home can comfortably accommodate up to maximum 6 pax (including infant). With Tagaytay just a mere 55 km away from Manila and with the convenience of SMC Skyway and CALAX, it definitely is the first choice for a quick getaway any day of the week.",

    },
  ];
  return(
    <section id="stay" className="relative h-screen flex items-center">
    <div className="container relative">
      <div className="gap-x-11 relative px-5">
        <h2 className="text-4xl font-bold mb-6 ">Immerse yourself in our featured suites</h2>
        <p className="mb-12">Experience a stay like no other as you immerse yourself in our featured rooms, carefully crafted to provide the perfect blend of comfort and luxury.</p>
      </div>       
        <div className="">
          <Carousel opts={{align:"start"}} className="w-full">
            <CarouselContent>
              {featureData.map((data)=>(
                <CarouselItem key={data.slideNo} className="md:basis-3/4">
                  <div className="relative overflow-hidden w-full min-h-[450px]">
                    <Image src={data.image} alt={data.title} fill style={{objectFit:"cover"}} className="transition-all delay-150 w-full  object-cover rounded-lg shadow-lg top-0 left-0 hover:scale-110" />
                    <div className="absolute bottom-5 left-5 max-w-lg rounded-sm bg-secondary/85 p-8 bg-gray-900 text-secondary-foreground bg-opacity-50">
                      <h3 className="text-2xl font-bold">{data.title}</h3>
                      <p className="mt-2 text-sm">{data.descript}</p>
                      <div className="flex items-center mt-7 text-sm">
                        {highlights.map((f)=>(
                          <span key={f.text} className="flex gap-1 mr-7 text-nowrap">{f.icon} {f.text}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                 
                </CarouselItem>
              ))} 
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
    </div>
  </section>
  );
}