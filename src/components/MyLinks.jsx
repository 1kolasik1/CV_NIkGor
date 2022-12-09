export default function MyLinks() {
  return (
    <div className="flex flex-col ml-0 sm:ml-[9vh] mt-[5vh]">
      <p className="text-white text-3xl mb-[1vh] ml-[1vh] sm:ml-[1vh]">
        My Links:
      </p>
      <div className="flex items-center text-2xl underline mr-[2vh]">
        <img src="/github.png" alt="icon" className="w-[5vh]"></img>
        <a href="https://github.com/1kolasik1" className="text-white ">
          GitHub
        </a>
      </div>
      <div className="flex items-center text-2xl underline mr-[2vh]">
        <img src="/telegram.png" alt="icon" className="w-[5vh] "></img>
        <a href="https://t.me/nikgor1" className="text-white">
          Telegram
        </a>
      </div>
      <div className="flex items-center text-2xl underline mr-[2vh]">
        <img src="/inst.png" alt="icon" className="w-[5vh]"></img>
        <a href="https://www.instagram.com/_nikgor_/" className="text-white">
          Instagram
        </a>
      </div>
      <div className="flex items-center text-2xl underline mr-[2vh]">
        <img src="/mail.png" alt="icon" className="w-[5vh]"></img>
        <a href="mailto:gorbatcevichkolya@gmail.com" className="text-white">
          GMail
        </a>
      </div>
    </div>
  );
}
