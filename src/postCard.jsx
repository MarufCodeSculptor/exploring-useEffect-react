/* eslint-disable react/prop-types */
export default function PostCard({ data }) {
  const { title, body, userId, id } = data;
  return (
    <>
      <div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.postimg.cc/hGSSRr8m/cat-551554-640-1.jpg"
              alt="Shoes"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{body}</p>
            <span className="text-lg"> {userId}</span>
            <span className="text-lg"> {id}</span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
