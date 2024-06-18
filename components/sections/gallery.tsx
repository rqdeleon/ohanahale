'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils";
import { Sparkles, BedDouble, Laptop2, Theater } from "lucide-react";

const tabContent = [
  {
    tabValue: "cinema",
    images:[
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/sw3qplpc09fngrugielm',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/qw8yxwdyihliadrmqkzt',
        divStyle: 'col-span-1 md:col-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/nzpkeysyv7ooe5kmeapt',
        divStyle: '',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/d0lpebswrxmtzkjbrnlu',
        divStyle: '',
      },
    ]
  },
  {
    tabValue: "amenities",
    images:[
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/lkmuhiu4hhsh3rg2wx3s',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/drrkayn9bbo5iblwj0sv',
        divStyle: '',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/ha9bkqcahnx5vmhegl4f',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718682961/ohana_hale/uvpejxmelrveda02iahx.jpg',
        divStyle: '',
      },
    ]
  },
  {
    tabValue: "luxery",
    images:[
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/o0xk1sbj0xg7tsqzntm2',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/mll8ncnp6bofrnpny9cl',
        divStyle: '',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/nc6fpgonbuwo3lns56nv',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/rtc9lq8waifudmpksr0i',
        divStyle: '',
      },
    ]
  },
  {
    tabValue: "lodging",
    images:[
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/u4rdughymihhlgyx9p3t',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/rbbpf36aa34in19al8lf',
        divStyle: '',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/ohana_hale/jrgfrxlvlz4eomlfo85b',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718607860/casaestal/cjtttjmafplco59ajltb.jpg',
        divStyle: '',
      },
    ]
  },
]



export default function Gallery(){
  return(
    <section id="ameneties" className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Amenities</h2>
        <p className="text-gray-600">Explore our luxurious amenities</p>
      </div>

      <div className="container mx-auto px-4 ">
        <Tabs defaultValue="cinema" className="w-full text-center">
          <TabsList className="grid w-full grid-cols-2 min-h-[150px] mb-11 md:grid-cols-4  md:mb-3 md:min-h-24">
            <TabsTrigger value="cinema" className="flex gap-2 h-16"> <Theater />100&ldquo; Home Cinema</TabsTrigger>
            <TabsTrigger value="amenities" className="flex gap-2 h-16"><Sparkles />Amenities & Gym</TabsTrigger>
            <TabsTrigger value="luxery" className="flex gap-2 h-16"><BedDouble />Stay in style</TabsTrigger>
            <TabsTrigger value="lodging" className="flex gap-2 h-16"><Laptop2 />Workspaces & Lodging</TabsTrigger>
          </TabsList>

          {
            tabContent.map((tab)=>(
              <TabsContent key={tab.tabValue} value={tab.tabValue} >
                <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 gap-4 max-h-[450px]">
                  {tab.images.map((img)=>(
                    <div key={img.source} className={cn('relative overflow-hidden',img.divStyle)}>
                      <img loading="lazy" src={img.source} alt="Image 1" className="object-cover w-full h-full rounded-lg shadow-md" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))
          }

        </Tabs>
      </div>
    </section>
  );

}