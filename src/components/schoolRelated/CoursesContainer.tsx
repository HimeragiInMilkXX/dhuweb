import type { FunctionComponent } from "react";

const CoursesContainer: FunctionComponent<{ title: string, children: React.ReactNode }> = ({ title, children }) => {

    return (

        <section className="relative rounded-lg p-6 [background:linear-gradient(to_right,#ffffff_12px,transparent_12px)_top/20px_2px_repeat-x,linear-gradient(to_bottom,#ffffff_12px,transparent_12px)_right/2px_20px_repeat-y,linear-gradient(to_right,#ffffff_12px,transparent_12px)_bottom/20px_2px_repeat-x,linear-gradient(to_bottom,#ffffff_12px,transparent_12px)_left/2px_20px_repeat-y]">
        
            <h5 className="bg-black font-medium text-xl max-w-[320px]:text-3xl absolute right-8 -top-3 max-w-[320px]:-top-4 px-3"> {title} </h5>

            <div className="p-1.5 flex flex-wrap gap-3">

                {children}

            </div>

        </section>

    )

}

export default CoursesContainer;