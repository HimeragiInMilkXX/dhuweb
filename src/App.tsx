import "./App.css"
import Best from "./components/sections/Best"
import Copyright from "./components/sections/Copyright"
import Curriculum from "./components/sections/Curriculum"
import CurriculumPhone from "./components/sections/CurriculumPhone"
import Data from "./components/sections/Data"
import Hero from "./components/sections/Hero"
import Summary from "./components/sections/Summary"
import Teacher from "./components/sections/Teacher"
import Title from "./components/sections/Title"
import Voice from "./components/sections/Voice"
import Work from "./components/sections/Work"
import useWidth from "./hooks/useWidth"
import { isTablet } from "react-device-detect";

function App() {

  const width = useWidth();

  return (
    <main className="w-full flex flex-col">
      
      <Hero/>
      <div className="px-10 sm:px-18.25 h-screen flex items-center"><Data/></div>
      <div className="px-10 sm:px-18.25 flex items-center max-md:mt-24 mb-101"><Work/></div>
      <div className="w-full flex flex-col gap-43.5 mb-60.25">
        <div className="px-10 sm:px-18.25"><Title/></div>
        <Voice/>
        <div className="px-10 sm:px-18.25 relative">
          <p className="font-medium text-2xl max-w-[320px]:text-3xl flex items-center gap-4 absolute left-0"> <span className="inline-block h-0.5 w-35 bg-white"></span> カリキュラム </p>
          { (width >= 768 && !isTablet) ? <Curriculum/> : <CurriculumPhone/> }
        </div>
        <div className="px-10 sm:px-18.25 relative">
          <p className="font-medium text-2xl max-w-[320px]:text-3xl flex items-center gap-4 absolute right-0"> 教員紹介 <span className="inline-block h-0.5 w-35 bg-white"></span> </p>
          <Teacher/>
        </div>
      </div>
      <div className="h-screen flex items-center mb-65.75"><Best/></div>
      <div className="px-10 sm:px-18.25 h-screen flex flex-col items-center justify-center bg-[url('/hero.jpg')] bg-black/60 bg-blend-darken bg-center bg-no-repeat bg-cover" style={{ backgroundAttachment: 'fixed'}}>
        <Summary/>
        <Copyright/>
      </div>

    </main>
  )
}

export default App
