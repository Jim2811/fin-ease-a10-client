import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ReviewCard from "../Cards/ReviewCard";

const ReviewSection = () => {
  const axiosSecure = useAxiosSecure();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosSecure.get("/reviews").then((res) => setReviews(res.data));
  }, [axiosSecure]);

  return (
    <section className="py-20 px-6 custom-gradient">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-extrabold text-base-content mb-2">
          What Our <span className="text-primary">Users Say</span>
        </h2>
        <p className="text-base md:text-lg text-base-content/70">
          Real voices from{" "}
          <span className="text-primary font-bold">FinEase</span> users building
          their financial future.
        </p>
      </div>

      {reviews.length === 0 ? (
        <p className="text-center text-base-content/70">No reviews yet.</p>
      ) : (
        <div className="max-w-6xl mx-auto">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
            }}
            loop={true}
            centeredSlides={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            style={{
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
            className="pb-8"
          >
            {reviews.map((r) => (
              <SwiperSlide
                key={r._id}
                className="flex justify-center items-center !h-auto"
              >
                <div className="w-full h-full flex justify-center items-center">
                  <ReviewCard
                    photo={r.photo}
                    name={r.name}
                    feedback={r.feedback}
                    rating={r.rating}
                    date={r.date}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default ReviewSection;