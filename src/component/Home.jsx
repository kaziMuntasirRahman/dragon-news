import CategoryNavbar from "../layout/left navigation/CategoryNavbar";
import Heading from "../layout/left navigation/Heading";
import AllNews from "../layout/middle section/AllNews";
import CreateNewspaper from "../layout/right navigation part/CreateNewspaper";
import Qzone from "../layout/right navigation part/Qzone";
import SocialAuth from "../layout/right navigation part/SocialAuth";
import SocialLinks from "../layout/right navigation part/SocialLinks";

const Home = () => {
  return (
    <div className=" flex gap-6 py-[76px]">
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