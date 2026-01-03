import { FaStar } from "react-icons/fa";

const ReviewCard = ({ photo, name, feedback, rating, date }) => {
  return (
    <div className="w-80 md:w-96 h-64 bg-base-200/60 border border-base-300 rounded-2xl p-6 mx-3 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center">
      <div className="flex flex-col items-center h-full w-full">
        <img
          src={
            photo || "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          }
          alt={name}
          className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-primary/40"
        />

        <div className="flex gap-1 text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={14}
              className={i < rating ? "text-yellow-400" : "text-base-300"}
            />
          ))}
        </div>

        <div className="w-full max-h-20 overflow-y-auto custom-scrollbar px-1">
          <p className="text-sm text-base-content/80 leading-relaxed text-center whitespace-pre-wrap">
            “{feedback}”
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-2">
        <h4 className="font-bold text-base-content text-sm md:text-base">
          {name}
        </h4>
        <p className="text-xs text-base-content/60">
          {date ? new Date(date).toLocaleString() : ""}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;