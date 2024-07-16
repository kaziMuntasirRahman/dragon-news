import DetailsNews from "./details news/DetailsNews";
import EditorsInsights from "./details news/EditorsInsights";

const NewsDetails = () => {
  return (
    <div>
      <h2 className="text-neutral-700 text-xl font-semibold text-left mb-5">
        Dragon News
      </h2>
      <DetailsNews />
      <EditorsInsights />
    </div>
  );
};

export default NewsDetails;