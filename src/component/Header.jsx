import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";

const Header = () => {
  const marqueeText = `The United States has pledged nearly $3 billion in additional security assistance for Ukraine to help fight Russia's invasion as well as enable the country to defend itself over the long term.`;
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const [dayName, restOfDate] = formattedDate.split(', ', 2);

  return (
    <div>
      <section className="flex flex-col justify-center items-center mb-5">
        <img src="/src/assets/logo.png" alt="Logo" className="mb-5" />
        <h2 className="text-neutral-500 text-lg leading-[30px] mb-3">Journalism Without Fear or Favour</h2>
        <h2 className="text-lg leading-[30px] mb-7">
          {dayName},<span className="text-neutral-500"> {restOfDate}</span>
        </h2>
        <section className="w-full flex items-center justify-between p-4 bg-zinc-100 gap-5">
          <button className="w-28 h-12 bg-rose-600 rounded-none text-white text-xl font-medium">Latest</button>
          <Marquee
            pauseOnHover={true}
            speed={100}
            delay={2}
            className="text-neutral-700 text-lg font-semibold cursor-pointer mr-20"
            gradient={false}
          >
            {marqueeText}
            {'\u00A0'.repeat(100)}
          </Marquee>
        </section>
      </section>
      <Navbar />
    </div>
  );
};

export default Header;