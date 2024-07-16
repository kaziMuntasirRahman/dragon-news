import PropTypes from 'prop-types';
import { CiShare2 } from "react-icons/ci";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa6";

const NewsCart = ({news}) => {
  const {title, author, details, rating, total_view, image_url} = news;
  return (
    <div className="w-[560px] ml-auto rounded-[5px] border border-neutral-200">

      <section className="bg-zinc-100 rounded-tl-[5px] rounded-tr-[5px] px-5 py-4 flex justify-between w-full ml-auto">
        <div className="flex gap-4">
          <img className="w-10 h-10 rounded-full" src={author.img} />
          <div className="flex flex-col items-start">
            <h2 className="text-neutral-700 font-semibold ">{author.name}</h2>
            <p className="text-neutral-500 text-sm">{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-[10px] text-[#706F6F]">
          <FaRegBookmark className="text-2xl" />
          <CiShare2 className="text-2xl" />
        </div>
      </section>

      <section className="flex flex-col p-5 gap-5">
        <div className="flex flex-col gap-5">
          <h1
            className="text-left text-neutral-700 text-xl font-bold leading-[35px]">
            {title}
          </h1>
          <img src={image_url} alt="" />
          <p className="text-neutral-500 leading-relaxed text-left">{details}... <br />
            <button className="text-orange-400 font-semibold leading-relaxed">
              Read More
            </button>
          </p>
        </div>
        <div className="border border-neutral-200 " />
        <div className="flex justify-between">
          <div className="flex gap-[5px]">
            {[...Array(5)].map((_, index) =>
              <FaStar className="text-2xl text-orange-400" key={index} />)
            }
            <p className="ml-[5px] text-neutral-500 font-medium leading-relaxed">{rating.number}</p>
          </div>
          <div className="flex items-center gap-[10px] text-neutral-500 font-medium leading-relaxed">
            <FaEye />
            <p className=" ">{total_view}</p>
          </div>
        </div>
      </section>

    </div>
  );
};

NewsCart.propTypes = {
  news: PropTypes.node
}


export default NewsCart;