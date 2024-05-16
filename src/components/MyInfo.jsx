export default function MyInfo() {
  return (
    <div className="flex flex-col justify-center items-center ml-[1vh] lg:flex-row sm:justify-start gap-4 py-[3vh] sm:border-b-2 sm:border-gray-400">
      <img
        src="/myphoto.jpg"
        alt="img"
        className=" w-[30vh] h-[30vh] sm:w-[25vh] sm:h-[25vh] ml-0 rounded-full"
      />
      <p className=" sm:ml-[2vh] max-w-[95%] sm:max-w-[90%]  text-white text-2xl">
        Hi, my name is Nikolai Gorbatsevich. I am a beginner{" "}
        <span className="font-bold text-[#7395AE]">FrontEnd developer</span> and
        this is my resume.I am responsive, kind, communicative and hardworking.
        I am interested in studying FrontEnd, and i'm looking for Junior
        position. You can see some of my work in person{" "}
        <span className="inline sm:hidden">
          by clicking on button "MyProjects"
        </span>
        <span className="hidden sm:inline">below.</span>
      </p>
    </div>
  );
}
