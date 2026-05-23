import { useEffect, useState } from "react";
import { Carousel, CarouselContent, type CarouselApi } from "../ui/carousel";
import { Dot } from 'lucide-react';
import TeacherDialog from "../schoolRelated/TeacherDialog";
import useWidth from "../../hooks/useWidth";
import { teacher } from "../../export";

const Teacher = () => {

    const [api, setApi] = useState<CarouselApi>()
    const [ current, setCurrent ] = useState<number>(0)
    const [ count, setCount ] = useState(0)
    const width = useWidth();

    useEffect( () => {

        if( !api || !teacher ) return;

        setCount( api.scrollSnapList().length );
        setCurrent( api.selectedScrollSnap() + 1 );

        api.on( "select", () => setCurrent( api.selectedScrollSnap() + 1 ) )

        api.scrollTo(2, true)

    }, [ api ] )

    return (

        <section className="mt-28 mx-auto relative overflow-y-visible flex flex-col items-center">

            { width < 768 ? <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                orientation='vertical'
                className="md:[&>div]:overflow-visible! md:overflow-x-clip relative max-md:overflow-hidden"
                setApi={setApi}
                >
                <CarouselContent className="h-150">
                    {

                        teacher.map( ( value, index ) => { return <TeacherDialog current={current} index={index+1} teacher={value} key={index}/> })

                    }
                </CarouselContent>

            </Carousel> :

            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                setApi={setApi}
                className="md:[&>div]:overflow-visible! md:overflow-x-clip relative max-md:overflow-hidden"
                >
                <CarouselContent className="">
                    {

                        teacher.map( ( value, index ) => { return <TeacherDialog current={current} index={index+1} teacher={value} key={index}/> })

                    }
                </CarouselContent>

                {teacher[current-1] && <> <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col max-w-4/13 box-border gap-3 lg:gap-6 p-10 max-[1185px]:hidden">
                
                    <h3 className="font-bold text-3xl lg:text-5xl flex flex-wrap gap-3 items-end"> {teacher[current-1].name} <span className="text-[16px] lg:text-2xl relative max-lg:bottom-1">{teacher[current-1].pos}</span> </h3>
                    <p className="lg:text-2xl leading-tight"> {teacher[current-1].desc} </p>
                    <p className="leading-tight flex-wrap gap-x-2 xl:flex hidden">
                        { teacher[current-1].hashtags.map( ( value, index ) => { return <span key={index} className="whitespace-nowrap">#{value}</span> } )}
                    </p>

                </div>

                <p className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col max-w-4/13 box-border gap-6 p-10 leading-relaxed max-[1185px]:hidden">
                    {teacher[current-1].more}
                </p> </>}

            </Carousel>}

            <div className="hidden md:flex items-center relative z-10 mt-2">

                {

                    [...Array(count)].map((_, i) => <Dot key={i+1} strokeWidth={5} className="w-4 aspect-square" color={ current === i+1 ? '#D9D9D9' : '#D9D9D933' }/>)

                }

            </div>


        </section>

    );

}

export default Teacher;