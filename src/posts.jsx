/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import PostCard from "./postCard";

export default function Posts() {
  //  data fetching >
  const [Posts, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
        {Posts.map(data=><PostCard data={data}></PostCard>)}
      </div>
    </>
  );
}
