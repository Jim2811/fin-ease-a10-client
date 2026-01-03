import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Review = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName || form.name.value.trim();
    const email = user?.email || form.email.value.trim();
    const feedback = form.feedback.value.trim();
    const photo = user?.photoURL || form.photo.value.trim();

    if (!rating || !feedback) return;

    const newReview = {
      name,
      email,
      feedback,
      photo: photo || "https://via.placeholder.com/150",
      rating,
      date: new Date(),
    };
    axiosSecure
      .post("/reviews", newReview)
      .then((res) => {
        if (res.data.success) {
          toast.success("Thank you for your review!");
        } else {
          toast.error(res.data.message || "Submission failed.");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          toast.warning("You have already submitted a review.");
        } else {
          toast.error("Something went wrong. Try again later.");
        }
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 custom-gradient">
      <div className="w-full max-w-2xl bg-base-200/60 border border-base-300 backdrop-blur-md rounded-3xl shadow-xl p-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-10">
          Share Your <span className="text-base-content">Experience</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {!user && (
            <>
              <div>
                <label className="block text-sm font-semibold mb-1 text-base-content/80">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Type your name"
                  className="input input-bordered w-full bg-base-100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-base-content/80">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Type your email"
                  className="input input-bordered w-full bg-base-100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-base-content/80">
                  Profile Photo URL
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Enter profile image URL"
                  className="input input-bordered w-full bg-base-100"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-semibold mb-1 text-base-content/80">
              Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2 text-yellow-400 text-2xl justify-center md:justify-start">
              {[1, 2, 3, 4, 5].map((val) => (
                <FaStar
                  key={val}
                  onClick={() => setRating(val)}
                  className={`cursor-pointer transition-transform duration-300 ${
                    rating >= val
                      ? "text-yellow-400 scale-110"
                      : "text-base-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-base-content/80">
              Feedback <span className="text-red-500">*</span>
            </label>
            <textarea
              name="feedback"
              required
              placeholder="Write your feedback here..."
              rows="5"
              className="textarea textarea-bordered w-full bg-base-100 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary text-lg font-semibold w-full mt-4 shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default Review;
