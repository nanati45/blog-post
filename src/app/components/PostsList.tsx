import { useGetPostsQuery } from "@/features/postsSlice";
import React from "react";
import Post from "./Post";

const PostsList = () => {
  const { data, isError, isSuccess } = useGetPostsQuery();
  console.log("data is ", data, isSuccess);
  //   if (!data) {
  // return <h1>No posts found</h1>;
  //   }
  return (
    <div className="w-3/4">
      {data?.map((da, index) => (
        <Post key={da._id} da={da} />
      ))}
    </div>
  );
};

export default PostsList;
