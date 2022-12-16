import Projects from "./Projects";
import MyLinks from "../components/MyLinks";
import MyInfo from "../components/MyInfo";
import MySkills from "../components/MySkills";
import Education from "../components/Education";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="flex">
      <div className="flex gap-6">
        <div className="hidden md:block border-r-2 border-gray-400 mr-[2vh] my-[3vh]">
          <MyLinks />
          <MySkills />
          <Education />
        </div>
        <div className="mb-[3vh] max-w-[100%] sm:max-w-[70%]">
          <div className="ml-[1vh] mr-[1vh] sm:mr-0  mt-[4vh] flex flex-col border-b-2 border-gray-400">
            <div>
              <p className="text-white text-5xl mb-[1vh] font-extrabold">
                Nickolay Gorbatsevich
              </p>
              <p className="text-gray-400 text-2xl mb-[1vh] font-semibold">
                FrontEnd developer
              </p>
            </div>
          </div>
          <div>
            <MyInfo />
          </div>
          <div className="flex justify-center sm:hidden">
            <Link
              to={"/projects"}
              className="py-[1vh] px-[2vh] text-white bg-[#7395AE] font-bold text-xl rounded-full mt-[3vh]"
            >
              MyProjects
            </Link>
          </div>
          <div className="hidden md:block">
            <p className="ml-[1vh] mt-[4vh] text-white text-4xl mb-[1vh] font-bold">
              My projects:
            </p>
            <Projects></Projects>
          </div>
          <div className="block sm:hidden md:border-r-2 border-gray-400 mr-[2vh] my-[3vh]">
            <MyLinks />
            <MySkills />
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}
