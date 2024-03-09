/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import UserDataCard from "./userCard";
import Posts from "./posts";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users, "if know you know");
  return (
    <>
      <h3 className="text-3xl font-bold uppercase text-blue-700 italic px-20 py-10 text-center">
        lets welcome our users
      </h3>
      {/* card container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
        {/* card one---- */}
        {users.map((data) => (
          <UserDataCard data={data}></UserDataCard>
        ))}
      </div>
    </>
  );
}
