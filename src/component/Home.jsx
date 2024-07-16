import { useContext } from "react";
import CategoryNavbar from "../layout/left navigation/CategoryNavbar";
import Heading from "../layout/left navigation/Heading";
import AllNews from "../layout/middle section/AllNews";
import CreateNewspaper from "../layout/right navigation part/CreateNewspaper";
import Qzone from "../layout/right navigation part/Qzone";
import SocialAuth from "../layout/right navigation part/SocialAuth";
import SocialLinks from "../layout/right navigation part/SocialLinks";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const {loading} = useContext(AuthContext);
  return (
    <div className="flex gap-6 py-[76px]">


    { (loading) &&
      <div className="absolute left-0 top-0 size-full flex items-center justify-center z-10 bg-slate-200 bg-opacity-25">
        <span
          className="loading loading-spinner scale-[5]"
          />
      </div>
        }

      {/* left navigation */}
      <section className="space-y-7">
        <CategoryNavbar />
        <Heading />
      </section>

      {/* middle section */}
      <section>
        <AllNews />
      </section>

      {/* right navigation */}
      <section className="w-[270px] flex flex-col gap-[30px]">
        <SocialAuth />
        <SocialLinks />
        <Qzone />
        <CreateNewspaper />
      </section>
    </div>
  );
};

export default Home;