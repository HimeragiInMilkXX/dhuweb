import type { FunctionComponent } from "react"
import { Progress } from "../ui/progress"

const ProgressBar: FunctionComponent<{ progress: number }> = ( { progress }) => {

    return (

        <div className="gap-1 flex items-center">

            <Progress value={progress < 100 ? progress : 100} className="border border-[#2A2A2A] [&>div]:bg-white [&>div]:transition-none!"/>
            <Progress value={progress < 200 ? progress - 100 : 100} className="border border-[#2A2A2A] [&>div]:bg-white [&>div]:transition-none!"/>
            <Progress value={progress < 300 ? progress - 200 : 100} className="border border-[#2A2A2A] [&>div]:bg-white [&>div]:transition-none!"/>
            <Progress value={progress < 400 ? progress - 300 : 100} className="border border-[#2A2A2A] [&>div]:bg-white [&>div]:transition-none!"/>

        </div>

    )

}

export default ProgressBar