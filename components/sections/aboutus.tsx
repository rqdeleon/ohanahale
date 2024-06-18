'use client'
import { siteinfo } from "@/siteinfo";
import { HeartHandshake, Medal, Star, BedDouble, MapPin, Sparkle } from "lucide-react";

export default function Services(){
  return(
    <section id="aboutus" className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Where hospitality meets your dreams</h2>
          <p className="mt-4 text-lg">{siteinfo.sitename}, Ohana means "family" and Hale means "home" in Hawaiian culture. Our unit is designed to provide you with a warm and relaxing atmosphere that will make you feel right at home.We take pride in providing our guests with the ultimate experience of comfort! In addition, we offer a unique feature of a 100" Home Cinema experience that will let you enjoy your favorite movies with your loved ones like never before!</p>
          <button className="transition ease-in-out delay-150 mt-6 bg-primary hover:bg-primary/80 px-6 py-3 rounded-md duration-300 text-secondary">Know More</button>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div className="mt-8 lg:w-1/2 p-8 mb-6 md:mb-0 transition ease-in-out delay-200 hover:-translate-y-2 duration-300 bg-cover bg-center rounded-lg overflow-hidden md:p-28"
            style={{backgroundImage:'url(https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718677156/ohana_hale/kuonajrdsotnluuvbalh.jpg)'}}
        >
            <div className="overflow-hidden text-xs bg-slate-100/40 text-slate-900 relative text-wrap p-8 md:mx-auto md:p-16 md:text-lg 
            before:border-t-2 before:absolute before:top-4 before:left-4 before:block before:border-l-2 before:border-slate-500 before:h-16 before:w-16 after:border-b-2 after:absolute after:bottom-4 after:right-4 after:block after:border-r-2 after:border-slate-500 after:h-16 after:w-16">

              <MapPin className="mx-auto mb-2"/>
              <h4 className="text-center font-semibold">Serin East Condo Tagaytay, Across Ayala Malls Serin</h4>
              <ul className="pt-2 text-sm font-semibold">
                <li>🤩 Ayala Malls Serin by walk </li>
                <li>🤩 Summit Ridge Promenade 4 mins drive </li>
                <li>🤩 Picnic Groove 16 mins drive </li>
                <li>🤩 Peoples Park In The Sky 27 mins drive</li>
              </ul>
            </div>
        </div>

          <div className="mt-8 lg:w-1/2 mb-6 p-8 lg:mb-0 transition ease-in-out delay-200 hover:-translate-y-2 duration-300 bg-cover bg-center rounded-lg overflow-hidden md:p-28"
            style={{backgroundImage:'url(https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718677153/ohana_hale/hyqkvampefejtzq12hpf.jpg)'}}
          >
            <div className="overflow-hidden text-xs bg-slate-100/40 text-slate-900 relative text-wrap p-8 md:mx-auto md:p-16 md:text-lg 
            before:border-t-2 before:absolute before:top-4 before:left-4 before:block before:border-l-2 before:border-slate-500 before:h-16 before:w-16 after:border-b-2 after:absolute after:bottom-4 after:right-4 after:block after:border-r-2 after:border-slate-500 after:h-16 after:w-16">
              <Sparkle className="mx-auto mb-2"/>
              <h4 className="font-semibold text-lg text-center mb-2">Hawaiian-inspired condo, Overlooking Taal Volcano</h4>
              <ul className="text-sm font-semibold">
                <li>🎥 Netflix/Prime in 100&quot; Home Cinema</li>
                <li>🖼️ Hawaiian-themed Mural Walls</li>
                <li>🤩 Fast Internet speed 100mbps</li>
                <li>🫰 Queen bed, Sofabed & single bed by window </li>
              </ul>
            </div>
          </div>
      </div>

      <div className="flex flex-col md:mt-10 md:flex-row justify-center gap-2 mt-8 ">
        <div className="transition ease-in-out delay-200 hover:-translate-y-2 flex gap-x-2 md:w-1/4 rounded-md p-5 mr-2 bg-teal-200/80 justify-center items-center duration-300">
          <div className="relative rounded-full bg-white p-5 text-secondary overflow-hiddens">
            <HeartHandshake className="absolute top-2 left-2.5 w-5 text-slate-900"/>
          </div>
          <div className="px-2">
            <p className="text-4xl font-bold text-black">245</p>
            <span className="text-sm">served clients and counting</span>
          </div>
        </div>
        <div className="transition ease-in-out delay-200 hover:-translate-y-2 flex gap-x-2 md:w-1/4 rounded-md p-5 mr-2 bg-orange-200/80 justify-center items-center duration-300">
          <div className="relative rounded-full bg-white p-5 text-secondary overflow-hiddens">
            <Medal className="absolute top-2 left-2.5 w-5 text-slate-900"/>
          </div>
          <div className="px-2">
            <p className="text-4xl font-bold text-black">Superhost</p>
            <span className="text-sm">airbnb</span>
          </div>
        </div>
        <div className="transition ease-in-out delay-200 hover:-translate-y-2 flex gap-x-2 md:w-1/4 rounded-md p-5 mr-2 bg-amber-200/80 justify-center items-center duration-300">
        <div className="relative rounded-full bg-white p-5 text-secondary overflow-hiddens">
            <Star className="absolute top-2 left-2.5 w-5 text-slate-900"/>
          </div>
          <div className="px-2">
            <p className="text-4xl font-bold text-black">5 Star</p>
            <span className="text-sm">reviews</span>
          </div>
        </div>
        <div className="transition ease-in-out delay-200 hover:-translate-y-2 flex gap-x-2 md:w-1/4 rounded-md p-5 mr-2 bg-sky-200/80 justify-center items-center duration-300">
          <div className="relative rounded-full bg-white p-5 text-secondary overflow-hiddens">
            <BedDouble className="absolute top-2 left-2.5 w-5 text-slate-900"/>
          </div>
          <div className="px-2">
            <p className="text-4xl font-bold text-black">365+</p>
            <span className="text-sm">nights booked</span>
          </div>
        </div>
      </div>
    </section>
  );
}