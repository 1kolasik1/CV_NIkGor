export default function MySkills() {
  return (
    <div className="ml-[1vh] sm:ml-[10vh] mt-[5vh]">
      <div>
        <div className="flex flex-col">
          <p className="text-white text-3xl mb-[1vh]">Languages:</p>
          <div className="text-gray-500 text-2xl mb-[1vh]">
            Russian: native speaker
          </div>
          <div className="text-gray-500 text-2xl mb-[1vh]">English: B1-B2</div>
        </div>
      </div>
      <div className="mt-[5vh]">
        <p className="text-white text-3xl mb-[1vh]">My skills:</p>
        <div className="flex flex-col">
          <div className="flex items-center text-gray-500 text-2xl mb-[1vh]">
            <p>React</p>
            <img src="/react.png" alt="icon" className="w-[5vh] ml-[1vh]"></img>
          </div>
          <div className="flex items-center text-gray-500 text-2xl mb-[1vh]">
            <p>Redux</p>
            <img src="/redux.png" alt="icon" className="w-[5vh] ml-[1vh]"></img>
          </div>
          <div className="flex items-center text-gray-500 text-2xl mb-[1vh]">
            <p>TailWind</p>
            <img
              src="/tailwind.png"
              alt="icon"
              className="w-[5vh] ml-[1vh]"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
