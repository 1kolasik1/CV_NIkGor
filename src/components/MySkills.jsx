export default function MySkills() {
  return (
    <div className="ml-[1vh] sm:ml-0 mt-[5vh] min-w-[240px]">
      <div>
        <div className="flex flex-col">
          <p className="text-white text-3xl mb-[1vh] font-semibold">
            Languages:
          </p>
          <div className="text-gray-500 text-2xl mb-[1vh]">Russian: native</div>
          <div className="text-gray-500 text-2xl mb-[1vh]">English: B1-B2</div>
        </div>
      </div>
      <div className="mt-[5vh]">
        <p className="text-white text-3xl mb-[1vh] font-semibold">My skills:</p>
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
          <div className="flex items-center text-gray-500 text-2xl mb-[1vh]">
            <p>C++</p>
            <img src="/c++.png" alt="icon" className="w-[5vh] ml-[1vh]"></img>
          </div>
          <div className="flex items-center text-gray-500 text-2xl mb-[1vh]">
            <p>HTML</p>
            <img src="/html.png" alt="icon" className="w-[5vh] ml-[1vh]"></img>
          </div>
          <div className="flex items-center text-gray-500 text-2xl mb-[1vh]">
            <p>CSS</p>
            <img src="/css.png" alt="icon" className="w-[5vh] ml-[1vh]"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
