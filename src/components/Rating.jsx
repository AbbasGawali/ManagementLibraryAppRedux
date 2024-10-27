import React from "react";

const Rating = ({ rating }) => {
  const stars = [];
  console.log(stars);
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push("★");
    } else {
      stars.push("☆");
    }
  }
  //   .from({ length: 5 }, (item, index) =>
  //     index < rating ? "★" : "☆"
  //   );
  return (
    <div>
      {stars.map((item, index) => (
        <span className="text-red-500 text-2xl font-bold" key={index}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default Rating;
