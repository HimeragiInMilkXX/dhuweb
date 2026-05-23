import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../ui/carousel";
import { Dot } from 'lucide-react';
import { best } from "../../export";

const Best = () => {

    const [api, setApi] = useState<CarouselApi>()
    const [ current, setCurrent ] = useState<number>(0)
    const [ count, setCount ] = useState(0)

    useEffect( () => {

        if( !api ) return;

        setCount( api.scrollSnapList().length );
        setCurrent( api.selectedScrollSnap() + 1 );

        api.on( "select", () => setCurrent( api.selectedScrollSnap() + 1 ) )

        api.scrollTo(2, true)

    }, [ api ] )

    return (

        <section className="flex flex-col items-center">
        
            <h2 className="font-bold text-5xl sm:text-7xl text-center leading-tight mb-4"> 過去優秀作品 </h2>

            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                setApi={setApi}
                className=""
                >
                <CarouselContent className="h-80 sm:h-130">
                    { best.map( ( _, index ) => { return <CarouselItem className={`basis-full md:basis-1/2 p-0 mx-5 relative opacity-80 hover:[&>img]:scale-102 overflow-hidden`} key={index} ><img src={`/best/${index+1}.jpg`} key={index} alt="" className="h-full object-cover w-full transition-all" style={{ borderRadius: '4px'}}/></CarouselItem> })}
                </CarouselContent>

            </Carousel>

            <div className="flex items-center relative z-10">

                {

                    [...Array(count)].map((_, i) => <Dot key={i+1} strokeWidth={5} className="w-4 aspect-square" color={ current === i+1 ? '#D9D9D9' : '#D9D9D933' }/>)

                }

            </div>

            { best[current-1] && <p className="text-xl leading-tight mt-3 px-6 text-center"> {best[current-1].student}ー{best[current-1].name} </p>}

        </section>

    );

}

export default Best;