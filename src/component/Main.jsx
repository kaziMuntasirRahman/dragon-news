import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <footer className="text-center">
        <p>&copy; 2024 YourSiteName. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Main;