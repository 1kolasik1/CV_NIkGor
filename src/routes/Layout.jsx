import { NavLink, Link, Outlet } from "react-router-dom";
export default function Layout() {
  const setActive = ({ isActive }) =>
    isActive
      ? "block font-bold text-white ease-out underline sm:hidden"
      : "block text-gray-500 ease-out underline decoration-gray-400 sm:hidden";
  return (
    <div className="min-h-screen bg-gray-700">
      <header className="flex justify-between bg-[#7395AE] py-[3vh] px-[1vh] text-3xl sm:px-[10vh] sm:text-4xl">
        <Link
          to={"/"}
          className="hidden sm:block sm:font-bold sm:text-white sm:ease-out"
        >
          NikGor
        </Link>
        <NavLink to="/" end={true} className={setActive}>
          NikGor
        </NavLink>
        <NavLink to="/projects" className={setActive}>
          MyProjects
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
