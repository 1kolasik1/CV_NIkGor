export default function Projects() {
  return (
    <div className="ml-0 sm:ml-[1vh] mt-0 sm:mt-[3vh]">
      <div className="ml-[1vh] sm:ml-0">
        <p className="text-white text-2xl">Todo List:</p>
        <p className="text-gray-500 text-xl mb-[5vh]">
          A basic todo list in which you can delete, add or mark todos
        </p>
        <a
          href="https://todos-kappa-six.vercel.app/"
          className="px-[6px] py-[6px] bg-[#7395AE] min-w-max rounded-lg text-white underline"
        >
          View this app on Vercel
        </a>
        <img
          src="/todo.gif"
          alt="gif"
          className="w-[80%] sm:w-[70%] my-[5vh]"
        ></img>
        <div className="flex items-center">
          <p className="text-gray-500 text-xl">Made with:</p>
          <p className="ml-[3vh] px-[5px] py-[5px] bg-slate-600 min-w-max rounded-lg text-white">
            React
          </p>
          <p className="px-[6px] py-[6px] bg-slate-600 min-w-max rounded-lg text-white ml-[1vh]">
            TailWind
          </p>
        </div>
      </div>
      <div className="ml-[1vh] sm:ml-0">
        <div className="mt-[3vh]">
          <p className="text-white text-2xl">API & SPA:</p>
          <p className="text-gray-500 text-xl mb-[5vh]">
            I created a multi-page application using the external API and the
            react-router-dom library.
          </p>
          <a
            href="#"
            className="px-[6px] py-[6px] bg-[#7395AE] min-w-max rounded-lg text-white underline"
          >
            View this app on Vercel
          </a>
          <img
            src="/redux.gif"
            alt="gif"
            className="w-[80%] sm:w-[70%] my-[5vh]"
          ></img>
          <div className="flex">
            <p className="text-gray-500 text-xl">Made with:</p>
            <p className="px-[5px] py-[5px] bg-slate-600 min-w-max rounded-lg text-white">
              React
            </p>
          </div>
        </div>
      </div>
      <div className="ml-[1vh] sm:ml-0">
        <div className="mt-[3vh]">
          <p className="text-white text-2xl">Notes:</p>
          <p className="text-gray-500 text-xl mb-[5vh]">
            I created a list of notes for users. Each user's notes will be
            displayed exactly for that user. To do this, you need to register
            and log in
          </p>
          <a
            href="#"
            className="px-[6px] py-[6px] bg-[#7395AE] min-w-max rounded-lg text-white underline"
          >
            View this app on Vercel
          </a>
          <img
            src="/notes.gif"
            alt="gif"
            className="w-[80%] sm:w-[70%] my-[5vh]"
          ></img>
          <div className="flex">
            <p className="text-gray-500 text-xl">Made with:</p>
            <p className="px-[5px] py-[5px] bg-slate-600 min-w-max rounded-lg text-white">
              React
            </p>
            <p className="px-[6px] py-[6px] bg-slate-600 min-w-max rounded-lg text-white ml-[1vh]">
              TailWind
            </p>
          </div>
        </div>
      </div>
      <div className="ml-[1vh] sm:ml-0">
        <div className="mt-[3vh]">
          <p className="text-white text-2xl">Redux & API:</p>
          <p className="text-gray-500 text-xl mb-[5vh]">
            I created a multi-page application using the external API , Redux ,
            TailWind and the react-router-dom library.
          </p>
          <a
            href="#"
            className="px-[6px] py-[6px] bg-[#7395AE] min-w-max rounded-lg text-white underline"
          >
            View this app on Vercel
          </a>
          <img
            src="/redux.gif"
            alt="gif"
            className="w-[80%] sm:w-[70%] my-[5vh]"
          ></img>
          <div className="flex">
            <p className="text-gray-500 text-xl">Made with:</p>
            <p className="px-[6px] py-[6px] bg-slate-600 min-w-max rounded-lg text-white">
              React
            </p>
            <p className="px-[6px] py-[6px] bg-slate-600 min-w-max rounded-lg text-white ml-[1vh]">
              Redux
            </p>
            <p className="px-[6px] py-[6px] bg-slate-600 min-w-max rounded-lg text-white ml-[1vh]">
              TailWind
            </p>
          </div>
        </div>
      </div>
      <div className="ml-[1vh] sm:ml-0">
        <div className="mt-[3vh]">
          <p className="text-white text-2xl">Online store:</p>
          <p className="text-gray-500 text-xl mb-[5vh]">
            This is the most common online store, created with the help of React
          </p>
          <a
            href="#"
            className="px-[6px] py-[6px] bg-[#7395AE] min-w-max rounded-lg text-white underline"
          >
            View this app on Vercel
          </a>
          <img
            src="/lamoda.gif"
            alt="gif"
            className="w-[80%] sm:w-[70%] my-[5vh]"
          ></img>
          <div className="flex">
            <p className="text-gray-500 text-xl">Made with:</p>
            <p className="px-[5px] py-[5px] bg-slate-600 min-w-max rounded-lg text-white mb-[5vh]">
              React
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
