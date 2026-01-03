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
    <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
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
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="pb-8"
          >
            {reviews.map((r) => (
              <SwiperSlide key={r._id}>
                <ReviewCard
                  photo={r.photo}
                  name={r.name}
                  feedback={r.feedback}
                  rating={r.rating}
                  date={r.date}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default ReviewSection;