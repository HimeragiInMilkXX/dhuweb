import RelatedBlock from "../RelatedBlock";

const base = import.meta.env.BASE_URL

const Summary = () => {

    return (

        <section className="mx-auto flex flex-col gap-4 max-w-150 grow justify-center relative bottom-6 items">
        
            <h2 className="font-bold text-5xl md:text-7xl sm:text-6xl text-center leading-tight"> いかがでしょうか </h2>

            <p className="text-xl max-w-[320px]:text-2xl leading-relaxed text-center"> 君も先輩たちみたいに、スキルを身に着け、素晴らしい作品と能力で社会と自分の成長に貢献できます！ご興味があれば、ぜひ<a target="_blank" className="text-[#87adff] cursor-pointer underline" href="https://www.dhw.ac.jp/faculty/web/">本学のサイト</a>にお足をお運びしていただければ幸いです。 </p>

            <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-6">

                <RelatedBlock url={`${base}related/1.jpg`} title="3DCG・VFX"/>
                <RelatedBlock url={`${base}related/2.jpg`} title="グラフィックデザイン"/>
                <RelatedBlock url={`${base}related/3.jpg`} title="広告・PR起業"/>
                <RelatedBlock url={`${base}related/4.jpg`} title="映像・映画"/>

            </div>

        </section>

    );

}

export default Summary;