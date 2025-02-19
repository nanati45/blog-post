"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import PostsList from "@/app/components/PostsList";
const page = () => {
  return (
    <div className="p-8 mx-12 items-center gap-10">
      <div className="flex justify-items-center justify-between  mx-24 mb-12">
        <p className="font-extrabold text-3xl">Blog</p>
        <div className="flex gap-6">
          <button className=" rounded-3xl w-64 text-left  text-[#AFAFAF] border  px-6 ">
            Search...
          </button>
          <button className=" rounded-3xl text-white font-semibold  bg-[#264fad] f px-4 ">
            + New Blog
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  mb-4 gap-4">
        <Provider store={store}>
          <PostsList />
        </Provider>
      </div>
    </div>
  );
};

export default page;
