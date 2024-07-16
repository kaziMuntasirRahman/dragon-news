import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";

const Heading = () => {
  const [headingNews, setHeadingNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/heading.json')
        const data = await response.json();
        console.log(data);
        setHeadingNews(data);
      }
      catch (error) {
        console.log(error.message);
        console.error(error.message);
      }
    }
    fetchData();
  }, []);


  return (
    <div className="flex flex-col gap-4">
      {
        headingNews.map((heading, index) =>
          <div className="w-[267px] flex flex-col gap-5" key={index}>
            <img src={heading.img} className="" />
            <h1 className="text-left text-neutral-700 text-xl font-semibold">{heading.title}</h1>
            <div className="flex items-center gap-[10px]">
              <h2 className="text-neutral-700 font-medium mr-[10px]"> {heading.category}</h2>
              <CiCalendar className="text-neutral-400 font-medium" />
              <h4 className="text-neutral-400 font-medium">
                {heading.date}
              </h4>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Heading;