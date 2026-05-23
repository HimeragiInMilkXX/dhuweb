import AutoPlay from "embla-carousel-autoplay";
import DescriptionCard from "../data/DescriptionCard";
import ProgressBar from "../data/ProgressBar";
import { Carousel, CarouselContent } from "../ui/carousel";
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap'
import type { CarouselApi } from "../ui/carousel";
import StackedChart from "../charts/StackedChart";
import BarChart from "../charts/BarChart";
import { LineChart } from "../charts/LineChart";
import { PieChart } from "../charts/PieChart";
import { data } from "../../export";

const temp = { value: 0 };
const Data = () => {

    const [ progress, setProgress ] = useState<number>(0);
    const [ current, setCurrent ] = useState<number>(0);
    const [ api, setApi ] = useState<CarouselApi | null>(null);

    const tween = useRef<gsap.core.Tween | null>(null);


    const delay = 5;

    useEffect( () => {

        if( !api ) return;

        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })

        api.on("autoplay:play", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })

    }, [api])

    useEffect( () => {

        temp.value = (current-1) * 100

        tween.current = gsap.to( temp, {

            value: (current) * 100,
            duration: delay,
            ease: 'none',
            onUpdate: () => setProgress( temp.value )

        } )

        return () => {
            tween.current?.kill()
            tween.current = null
        }

    }, [current])

    return (

        <section className="mx-auto w-full flex md:flex-row flex-col gap-8 lg:gap-14 xl:gap-26 items-center">
        
            <div className="md:basis-0 md:grow flex flex-col gap-6 max-h-[70vh] overflow-hidden">

                <p className="text-xl"> ウェブ業界４つの魅力 </p>

                <Carousel className="w-full" opts={{ loop: true }} plugins={[ AutoPlay({ delay: delay * 1000, stopOnInteraction: false }) ]} setApi={setApi}>
                    <CarouselContent>

                        {

                            Object.entries(data).map( ([title, description], index ) => {

                                return <DescriptionCard title={title} content={description} key={index}/>

                            })

                        }

                    </CarouselContent>
                </Carousel>

                <ProgressBar progress={progress}/>

            </div>

            <div className="md:basis-0 md:grow min-h-[70vh] max-md:w-full flex items-center justify-center box-border">

                {

                    current === 1 ? <BarChart/> :
                    current === 2 ? <LineChart/> :
                    current === 3 ? <PieChart/> :
                    <StackedChart/>

                }

            </div>

        </section>

    );

}

export default Data;