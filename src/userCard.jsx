/* eslint-disable react/prop-types */
export default function UserDataCard({ data }) {
  const { email, name, phone, username, website, address, company } = data;
  console.log(email);
  console.log(name);

  return (
    <>
      <div className="card  bg-base-100 shadow-xl">
        <div className="avatar flex justify-center p-5">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <h2 className="text-2xl text-blue-700 font-extrabold">{name}</h2>
          <h2 className="text-xl text-purple-500-700">{phone}</h2>
          <h2 className="text-xl text-blue-700">{username}</h2>
          <h2 className="text-xl text-blue-700">{website}</h2>
          <h2 className="text-xl text-blue-700">{address.city}</h2>
          <h2 className="text-xl text-blue-700">{company.name}</h2>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">More</button>
          </div>
        </div>
      </div>
    </>
  );
}
