import Projects from "./Projects";
import MyLinks from "../components/MyLinks";
import MyInfo from "../components/MyInfo";
import MySkills from "../components/MySkills";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <div className="flex">
        <div className="mb-[3vh]">
          <div className="ml-[1vh] sm:ml-[10vh] mt-[5vh] flex flex-col">
            <div>
              <p className="text-white text-3xl mb-[1vh]">
                Nickolay Gorbatsevich
              </p>
              <p className="text-gray-500 text-2xl mb-[1vh]">
                FrontEnd developer
              </p>
            </div>
          </div>
          <div>
            <MyInfo />
          </div>
          <MyLinks />
          <MySkills />
        </div>
        <div className="hidden sm:block sm:mr-[30vh] sm:mt-[5vh]">
          <Link
            to={"/projects"}
            className="text-white text-3xl  bg-[#7395AE] rounded-xl px-[1vh] py-[1vh] ml-0 mb-0 sm:mb-[3vh] sm:ml-[1vh] mt-[5vh] sm:underline"
          >
            My projects:
          </Link>
          <Projects></Projects>
        </div>
      </div>
    </div>
  );
}
