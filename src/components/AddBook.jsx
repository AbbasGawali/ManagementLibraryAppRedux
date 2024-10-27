import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../utils/bookSlice";
const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
    genre: "",
    price: 0,
    pages: 0,
    publishedDate: "",
    rating: 0,
  });

  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      formData.title == "" ||
      formData.author == "" ||
      formData.genre == "" ||
      formData.description == "" ||
      formData.coverImage == "" ||
      formData.pages == "" ||
      formData.price == "" ||
      formData.rating == "" ||
      formData.publishedDate == ""
    ) {
      alert("all fields required");
    } else {
      let data = { ...formData, id: Date.now() };
      dispatch(addItem(data));
      console.log(formData);
      console.log("formData added ");
      console.log("formData is full with id", data);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="px-8 py-4">
      <Link
        to={`/browseBooks`}
        className="border flex gap-2 items-center w-[12rem] my-2 rounded-full shadow-md px-4 py-[3px] cursor-pointer"
      >
        <IoArrowBackSharp />
        Back to browse
      </Link>

      <h2 className="font-bold text-xl py-4">
        {" "}
        Add <span className="text-red-500">Book</span>
      </h2>

      <form
        onSubmit={handleFormSubmit}
        className=" border  border-slate-200 shadow-lg w-2/3 p-6 outline-none mx-auto flex flex-col gap-4"
      >
        <h2 className="font-bold text-xl">Book Details</h2>
        <input
          name="title"
          onChange={handleChange}
          className="border focus:outline-none px-4 py-1 shadow-md"
          type="text"
          placeholder="Book Title"
        />
        <input
          name="author"
          onChange={handleChange}
          className="border focus:outline-none px-4 py-1 shadow-md"
          type="text"
          placeholder="Book Author"
        />
        <input
          name="genre"
          onChange={handleChange}
          className="border focus:outline-none px-4 py-1 shadow-md"
          type="text"
          placeholder="Book Genre"
        />
        <textarea
          name="description"
          onChange={handleChange}
          rows={4}
          className="border focus:outline-none px-4 py-1 shadow-md"
          type="text"
          placeholder="Book Description"
        />

        <input
          name="coverImage"
          onChange={handleChange}
          className="border focus:outline-none px-4 py-1 shadow-md"
          type="url"
          placeholder="Book Cover Image URL"
        />

        <div className="flex justify-between">
          <input
            name="pages"
            onChange={handleChange}
            className="border w-[7rem] mr-2 focus:outline-none px-4 py-1 shadow-md"
            type="number"
            placeholder="Pages"
          />
          <input
            name="price"
            onChange={handleChange}
            className="border mx-2 focus:outline-none px-4 py-1 shadow-md"
            type="number"
            placeholder="Book Price"
          />
          <input
            name="rating"
            onChange={handleChange}
            max={5}
            className="border mx-2 focus:outline-none px-4 py-1 shadow-md"
            type="number"
            placeholder="Book Rating"
          />
          <div className="flex gap-4 items-center">
            <label htmlFor="publishedDate">Published Date : </label>
            <input
              name="publishedDate"
              onChange={handleChange}
              className="border focus:outline-none px-4 py-1 shadow-md"
              id="publishedDate"
              type="date"
              placeholder="Published Date"
            />
          </div>
        </div>
        <div className="flex   justify-between"></div>
        <button className="py-2 font-bold text-red-500 border-2 border-red-500 hover:bg-red-500  hover:text-white transition-all">
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default AddBook;