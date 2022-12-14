import { Link } from "react-router-dom";

export default function MyInfo() {
  return (
    <div className="flex flex-col justify-center sm:flex-row sm:justify-start sm:ml-[5vh] mt-[3vh] sm:mt-[5vh]">
      <img
        src="/itsme.jpg"
        alt="img"
        className="ml-[1vh] w-[40vh] h-[40vh] sm:w-[30vh] sm:h-[30vh] sm:ml-0"
      />
      <p className="ml-[1vh] sm:ml-[2vh] max-w-[95%] sm:max-w-[90%]  text-white text-2xl sm:h-[35vh]">
        Hi, my name is Nikolai Gorbatsevich. I am a beginner{" "}
        <span className="font-bold text-[#7395AE]">FrontEnd developer</span> and
        this is my resume.I am responsive, kind, communicative, hardworking. I
        am interested in studying FrontEnd, and i'm looking for Junior position.
        You can see all of my work in person{" "}
        <span className="inline sm:hidden">
          by clicking on button "MyProjects"
        </span>
        <span className="hidden sm:inline">on the right-hand side</span>
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
