import type { FunctionComponent } from "react"
import { CarouselItem } from "../ui/carousel"

const VoiceCard: FunctionComponent<{ voice: { name: string, url: string, year: string, content: string } }> = ({ voice }) => {

    return (

        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex border-[#2A2A2A] border h-80 mx-5 p-0 overflow-hidden" style={{ borderRadius: '4px'}}>

            <p className="basis-0 grow"><img src={voice.url} alt="" className="opacity-48 object-cover h-full" /></p>

            <div className="flex flex-col gap-4 justify-center box-border basis-0 grow-[1.5] p-6 relative">

                <h4 className="font-bold text-3xl"> { voice.name } <span className="text-xs"> { voice.year }年卒 </span> </h4>
                <p className="leading-relaxed line-clamp-6"> { voice.content } </p>

                <a href="/" className="items-end text-end absolute right-3 bottom-3 text-xs text-[#2C6FFF] cursor-pointer"> More &gt; </a>

            </div>

        </CarouselItem>
        
    )

}

export default VoiceCard