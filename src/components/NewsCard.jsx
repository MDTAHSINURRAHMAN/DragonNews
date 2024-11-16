import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  const {
    author = {},
    title = "No Title Available",
    thumbnail_url = "https://via.placeholder.com/600x400", // Placeholder for missing image
    details = "Details not available",
    rating = {},
    total_view = 0,
    published_date = "",
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl">
      {/* Author and Share Section */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img || "https://via.placeholder.com/40"} // Fallback for author image
            alt={author.name || "Anonymous"}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{author.name || "Anonymous"}</h3>
            <p className="text-sm text-gray-500">
              {published_date ? published_date.split(" ")[0] : "Unknown Date"}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer hover:text-primary" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold px-4">{title}</h2>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-[400px] object-cover rounded-lg mb-4"
        />
      </figure>

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-600">
          {details.slice(0, 150)}...{" "}
          <span className="text-primary font-medium cursor-pointer">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar />
          <span>{rating.number || "N/A"}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
