import { NavLink, Link, Outlet } from "react-router-dom";
export default function Layout() {
  const setActive = ({ isActive }) =>
    isActive
      ? "block font-bold text-white ease-out underline sm:hidden"
      : "block text-gray-700 ease-out decoration-gray-400 sm:hidden";
  return (
    <div className="min-h-screen bg-gray-700">
      <header className="flex justify-between bg-[#5c7b91] py-[3vh] px-[1vh] text-3xl sm:px-[5vh] sm:text-3xl">
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
