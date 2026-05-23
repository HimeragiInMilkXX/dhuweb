import { useAtom } from "jotai";
import CurriculumCanvas from "../schoolRelated/CurriculumCanvas";
import { courseAtom } from "../../atoms";
import { Icon } from "@iconify/react";
import { curriculum } from "../../export";

const Curriculum = () => {

    const [ course ] = useAtom( courseAtom );

    return (

        <section className="mt-18 mx-auto relative">
        
            <div className="absolute z-1 left-0 h-full w-4/7 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_19%,rgba(0,0,0,0)_100%)] pointer-events-none"></div>
            <div className="absolute z-1 left-0 h-full w-full bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_100%)] pointer-events-none"></div>
            <div className="absolute z-1 left-0 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_100%)] pointer-events-none"></div>

            <CurriculumCanvas/>

            <div className="absolute z-1 right-0 w-3/7 h-full top-0 flex flex-col gap-5 justify-center box-content pl-36
                bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.72)_20%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_100%)] pointer-events-none">
            
                { course ?
                
                    <>
                        <div className="flex flex-col">
                            <h4 className="font-bold lg:text-5xl text-3xl leading-tight line-clamp-1 truncate">{course}</h4>
                            <p className="lg:text-xl text-sm">{curriculum[course].prof}</p>
                        </div>

                        <p className="lg:text-2xl text-xl leading-tight">{curriculum[course].description}</p>
                    </> :
                    <>
                        <h4 className="font-bold text-3xl lg:text-4xl text-center whitespace-nowrap"> 左から確認しましょう！ </h4>
                        <div className="flex justify-center">
                            <div className="flex flex-col justify-center w-fit gap-3">
                                <div className="flex gap-1.5 items-center">
                                    <Icon icon="ph:mouse-left-click-fill" className="text-5xl shrink-0"/>
                                    <p className="font-bold text-xl"> コース紹介をここに見る！ </p>
                                </div>
                                <div className="flex gap-1.5 items-center">
                                    <Icon icon="ph:mouse-right-click-fill" className="text-5xl shrink-0"/>
                                    <p className="font-bold text-xl"> スペースに移動 </p>
                                </div>
                                <div className="flex gap-1.5 items-center">
                                    <Icon icon="ph:mouse-middle-click-fill" className="text-5xl shrink-0"/>
                                    <p className="font-bold text-xl"> 拡大・縮小 </p>
                                </div>
                            </div>
                        </div>
                    </>
                    
                }

            </div>

        </section>

    );

}

export default Curriculum;