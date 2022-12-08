import { Link } from "react-router-dom";

export default function MyInfo() {
  return (
    <div className="flex flex-col justify-center sm:flex-row sm:justify-start sm:ml-[10vh] mt-[3vh] sm:mt-[5vh]">
      <img
        src="/itsme.jpg"
        alt="img"
        className="ml-[1vh] w-[35vh] h-[35vh] sm:ml-0"
      />
      <p className="ml-[1vh] sm:ml-[2vh] max-w-[90%] sm:max-w-[35%] text-white text-2xl">
        Hi, my name is Nikolai Gorbatsevich. I am a beginner{" "}
        <span className="font-bold text-[#7395AE]">Frontend developer</span> and
        this is my resume. So far I do not know much, but I am constantly
        practicing and learning a lot of new things. You can see all of my work
        in person by clicking on button{" "}
        <span className="font-bold text-[#7395AE]">MyProjects</span>
      </p>
      <div className="flex justify-center sm:hidden">
        <Link
          to={"/projects"}
          className="py-[1vh] px-[2vh] text-white bg-[#7395AE] font-bold  rounded-xl mt-[3vh]"
        >
          My projects
        </Link>
      </div>
    </div>
  );
}
