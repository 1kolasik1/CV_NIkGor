import Projects from "./Projects";
import MyLinks from "../components/MyLinks";
import MyInfo from "../components/MyInfo";
import MySkills from "../components/MySkills";
import Education from "../components/Education";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <div className="flex">
        <div className="mb-[3vh] max-w-[100%] sm:max-w-[40%]">
          <div className="ml-[1vh] mr-[1vh] sm:mr-0 sm:ml-[5vh] mt-[5vh] flex flex-col border-b-2">
            <div>
              <p className="text-white text-3xl mb-[1vh] font-semibold">
                Nickolay Gorbatsevich
              </p>
              <p className="text-gray-500 text-2xl mb-[1vh] font-semibold">
                FrontEnd developer
              </p>
            </div>
          </div>
          <div>
            <MyInfo />
          </div>
          <MyLinks />
          <MySkills />
          <Education />
        </div>
        <div className="hidden md:block sm:mr-[4vh] sm:ml-[5vh]">
          <div className="flex">
            <p className="text-white font-bold text-3xl  bg-[#7395AE] rounded-xl px-[1vh] py-[1vh] ml-0 mb-0 sm:mb-[3vh] sm:ml-[1vh] mt-[5vh] ">
              My Projects
            </p>
          </div>
          <Projects></Projects>
        </div>
      </div>
    </div>
  );
}
