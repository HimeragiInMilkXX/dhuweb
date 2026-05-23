import VoiceCard from "../schoolRelated/VoiceCard";
import { Carousel, CarouselContent } from "../ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll"
import { voice } from "../../export";

const Voice = () => {

    return (

        <section className="flex flex-col items-center gap-8">
        
            <h3 className="font-medium text-3xl">先輩の声</h3>

            <Carousel
                opts={{
                    loop: true,
                    dragFree: true,
                    containScroll: false,
                    watchDrag: false,
                    align: "center",
                }}
                plugins={[
                    AutoScroll({
                    speed: 0.75,
                    stopOnInteraction: false,
                    })
                ]}
                className="w-full">

                <CarouselContent>
                    {

                        voice.map( ( value, index ) => { return <VoiceCard voice={value} key={index} />} )

                    }
                </CarouselContent>

            </Carousel>

        </section>

    );

}

export default Voice;