import type { FunctionComponent } from "react";

const RelatedBlock: FunctionComponent<{ url: string, title: string }> = ({ url, title }) => {

    return (

        <a href="/" className="border border-[#2A2A2A] rounded-2xl box-border p-3 flex items-center hover:bg-[#2a2a2a4b] transition-all cursor-pointer">

            <img src={url} alt="" className="w-1/2 sm:block hidden"/>
            <h5 className="sm:w-1/2 box-border px-6"> {title} </h5>

        </a>

    )

}

export default RelatedBlock;