import GuideArrow from "../GuideArrow";

const Hero = () => {

    return (

        <section className="h-screen relative">
        
            <div className="h-[92vh] bg-[url('/hero.jpg')] bg-black/40 bg-blend-darken bg-center bg-no-repeat bg-cover w-full flex px-10 sm:px-18.25 items-center" style={{ backgroundAttachment: 'fixed'}}>

                <div className="flex flex-col m-auto max-sm:items-center">
                    <p className="text-xl"> 組み合わせて学べる専門教育 </p>
                    <h2 className="text-6xl font-bold mt-6 mb-4 max-sm:text-center leading-tight"> Webデザイン<span className="max-sm:hidden">・</span><br className="sm:hidden"/>Web開発 </h2>
                    <p className="font-medium text-4xl leading-snug max-sm:text-center"> Web業界をリードするための<br className="max-sm:hidden"/>知識と技術を手に入れる</p>
                </div>

            </div>

            <img src="/logo.png" alt="" className="w-26 aspect-square object-contain absolute top-4 left-4"/>

            <GuideArrow className="absolute bottom-8 left-1/2 -translate-x-1/2"/>

        </section>

    );

}

export default Hero;