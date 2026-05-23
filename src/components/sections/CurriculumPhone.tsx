import CoursesContainer from "../schoolRelated/CoursesContainer"
import CourseTag from "../schoolRelated/CourseTag"

const CurriculumPhone = () => {

    return (

        <section className="mt-24 mx-auto relative flex flex-col gap-12">

            <CoursesContainer title="基礎を学ぶ">
                <CourseTag course="基礎ツール演習"/>
                <CourseTag course="Webデザイン演習"/>
                <CourseTag course="Webサイトマークアップ演習"/>
                <CourseTag course="Webサイトスタイリング演習"/>
            </CoursesContainer>

            <CoursesContainer title="応用を学ぶ">
                <CourseTag course="Webサイトプロトタイプ演習"/>
                <CourseTag course="Webサイト表現演習"/>
                <CourseTag course="Webサイト制作実践演習"/>
            </CoursesContainer>

            <CoursesContainer title="知識を活かす">
                <CourseTag course="Webサイト表現演習応用A"/>
                <CourseTag course="Webサイト表現演習応用B"/>
                <CourseTag course="Webサイト制作プロジェクト演習"/>
            </CoursesContainer>

        </section>

    )

}

export default CurriculumPhone