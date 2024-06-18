"use client"
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { siteinfo } from "@/siteinfo";


export default function Testimony(){
  
  const testimonialData = [
    {
      slideNo: 1,
      name: "Jenelyn",
      profile: "/images/testimonials/jenelyn.webp",
      text: `We loved our stay in Ohana Hale unit.. it’s our home away from home.. very nice and clean unit. The unit has also a very cozy and relaxing vibe. I just hope they offer coffee pods. But overall, they have a lot to offer:
        \nFree coffee
        \nFree sugar
        \nFree creamer
        \nFree popcorn
        \nA Big screen for movie lovers
        \nThey even have popcorn maker. The best thing was the projector screen. Had fun staying at their place. Thanks for accomodating us! We’ll surely be back!`,
      job: "5 yrs in Airbnb",
      link: siteinfo.airbnb
    },
    {
      slideNo: 2,
      name: "Ellice",
      profile: "/images/testimonials/ellice.webp",
      text: "We absolutely loved our stay at this Airbnb! The home cinema was a fantastic bonus and made our movie night extra special. The host was also very accommodating and the property was clean and comfortable. We can't wait to come back! Thank you very much! ☺️",
      job: "10 yrs in Airbnb",
      link: siteinfo.airbnb
    },
    {
      slideNo: 3,
      name: "Prescia Vanessa",
      profile: "/images/testimonials/prescia_vanessa.webp",
      text: "I love Mikii and Leslie’s place. It’s clean, well-maintained, has a fast wi-fi, and all the appliances are in great working condition. I especially love the cinematic experience of the projector while watching netflix. I also like that there’s a coffee maker and complimentary coffee. It’s also very near the mall, just a short walking distance. Overall, I highly recommend their place.",
      job: "7 yrs in Airbnb",
      link: siteinfo.airbnb
    },
  ];
  
  return(
    <section id="review" className="pb-20 pt-44 md:pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px] bg-secondary/50">
      <div className="container ">
        <h3 className="text-4xl font-bold mb-6">Every stay has a story</h3>
        <div className="relative flex justify-center ">
          <div className="relative w-full" >
            <Carousel
              opts={{ align: "start", }}
              className=""
            >
              <CarouselPrevious />
              <CarouselNext />
              <CarouselContent>
                {testimonialData.map((index) => (
                  <CarouselItem key={index.slideNo} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-secondary p-11 min-h-72 rounded-lg" >
                      <div className="">
                        <main className="">
                          <p className="text-md mb-11 font-normal italic text-body-color dark:text-dark-6" >
                            {index.text}
                          </p>
                        </main>
                        <footer className="flex gap-x-4">
                          <div className="relative rounded-full overflow-hidden w-20 h-20">
                            <Image
                                src={index.profile}
                                alt="profile image"
                                fill
                                className="bg-cover object-cover"
                            />
                          </div>
                          <div className="content-center">
                            <h4 className="text-md font-semibold text-dark dark:text-white"
                            >
                              {index.name}
                            </h4>
                            <p className="text-xs text-body-color dark:text-dark-6">
                              <a href={index.link}> {index.job}</a>
                            </p>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            </div>
          </div>
      </div>
    </section>
  );
}