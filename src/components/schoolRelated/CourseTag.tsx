import type { FunctionComponent } from "react";
import type { CourseType } from "../../atoms";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { curriculum } from "../../export";

const CourseTag: FunctionComponent<{ course: CourseType }> = ({ course }) => {

    return (

        <Dialog>
            <DialogTrigger className="bg-gray-600 py-2 px-5 font-light active:bg-gray-700 transition-all cursor-pointer" style={{ borderRadius: '4px' }}> {course} </DialogTrigger>
            <DialogContent className="ring-0 max-w-[80vw]! bg-black/50 p-6">
                <DialogHeader>
                <DialogTitle className="text-5xl leading-tight">{course}</DialogTitle>
                <DialogDescription className="text-2xl">
                    {curriculum[course].prof}
                </DialogDescription>
                <p className="text-xl leading-relaxed">{curriculum[course].description}</p>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )

}

export default CourseTag;