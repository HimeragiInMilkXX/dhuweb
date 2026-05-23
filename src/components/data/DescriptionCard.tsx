import type { FunctionComponent } from "react";
import { CarouselItem } from "../ui/carousel";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "../ui/dialog";

const DescriptionCard: FunctionComponent<{ title: string, content: string }> = ({ title, content }) => {

    return (

        <CarouselItem className="">
            <div className="flex flex-col gap-4 p-0 m-0">
                <h3 className=" text-2xl xs:text-4xl lg:text-5xl leading-tight font-bold"> {title} </h3>
                <Dialog>
                    <DialogTrigger className="text-left md:block hidden cursor-pointer"> <p className="text-xl lg:text-2xl leading-relaxed line-clamp-9! text-ellipsis"> {content} </p> </DialogTrigger>
                    <DialogContent className="bg-black/50 p-6 ring-0! border-none text-xl lg:text-2xl leading-relaxed max-w-[80vw]!">
                        <DialogTitle/>
                        {content}
                    </DialogContent>
                </Dialog>
            </div>
        </CarouselItem>

    )

}

export default DescriptionCard