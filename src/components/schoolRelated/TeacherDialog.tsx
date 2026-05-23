import type { FunctionComponent } from "react";
import { CarouselItem } from "../ui/carousel";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "../ui/dialog";

const TeacherDialog: FunctionComponent<{ teacher: { name: string, pos: string, desc: string, hashtags: string[], more: string }, current: number, index: number }> = ({ teacher, current, index }) => {

    return (

        <CarouselItem className={`basis-1/3 p-0 relative pointer-events-none ${current === index && 'pointer-events-auto! z-2'}`} >
            
            <Dialog>
                <DialogTrigger><img src={`/teacher/${teacher.name}.jpg`} alt="" className={`transition-all origin-center cursor-pointer ${current === index ? 'md:scale-120' : 'opacity-30'}`}/></DialogTrigger>
                <DialogContent className="ring-0 max-w-[80vw]! bg-black/50 p-6">
                    <DialogHeader>

                        <DialogTitle className="text-3xl md:text-5xl"> {teacher.name} {teacher.pos} </DialogTitle>
                        <DialogDescription className="text-xl md:text-2xl"> {teacher.desc} </DialogDescription>

                    </DialogHeader>
                    <p className="md:text-xl leading-relaxed">{teacher.more}</p>
                    <p className="leading-tight flex-wrap gap-x-2 flex max-md:text-xs">
                        { teacher.hashtags.map( ( value, index ) => { return <span key={index} className="whitespace-nowrap">#{value}</span> } )}
                    </p>
                </DialogContent>
            </Dialog>

        </CarouselItem>

    )

}

export default TeacherDialog