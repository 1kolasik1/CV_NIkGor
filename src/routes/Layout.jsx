import { NavLink, Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-700 w-[100%] md:w-[80%] mx-auto">
      <header className="flex ml-[1vh] lg:ml-[0] bg-gray-700 py-[3vh] text-3xl sm:text-4xl mx-auto">
        <Link to={"/"} className="block font-bold text-white ease-out">
          NikGor
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
