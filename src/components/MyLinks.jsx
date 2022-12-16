export default function MyLinks() {
  return (
    <div className="flex flex-col ml-[1vh] sm:ml-0 mt-[2vh]">
      <p className="text-white text-3xl mb-[1vh] font-semibold">Contacts:</p>
      <div className="flex items-center text-2xl underline mr-[2vh]">
        <img src="/github.png" alt="icon" className="w-[5vh]"></img>
        <a
          href="https://github.com/1kolasik1"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-[#7395AE] hover:transition-all hover:duration-300"
        >
          GitHub
        </a>
      </div>
      <div className="flex items-center text-2xl underline mr-[2vh]">
        <img src="/telegram.png" alt="icon" className="w-[5vh] "></img>
        <a
          href="https://t.me/nikgor1"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-[#7395AE] hover:transition-all hover:duration-300"
        >
          Telegram
        </a>
      </div>
      <div className="flex items-center text-2xl underline mr-[2vh]">
        <img src="/inst.png" alt="icon" className="w-[5vh]"></img>
        <a
          href="https://www.instagram.com/_nikgor_/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-[#7395AE] hover:transition-all hover:duration-300"
        >
          Instagram
        </a>
      </div>
      <div className="flex items-center text-2xl underline mr-[2vh]">
        <img src="/mail.png" alt="icon" className="w-[5vh]"></img>
        <a
          href="mailto:gorbatcevichkolya@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-[#7395AE] hover:transition-all hover:duration-300"
        >
          GMail
        </a>
      </div>
    </div>
  );
}
