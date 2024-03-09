import Users from "./users";
import Posts from "./posts";
function App() {
  return (
    <>
      <div>
        <h2 className="text-4xl font-extrabold capitalize p-20 text-center bg-pink-300 text-white">
          Lets explore the <span className="text-purple-600">useEffect</span>
        </h2>
        <div className="border-2 border-red-600">
          <div className="container mx-auto">
            <Users></Users>
          </div>
        </div>

        <div className="container mx-auto border-2 border-blue-600">
          <h2 className="text-4xl font-extrabold capitalize p-20 text-center text-white">
            Let's Explore The <span className="text-purple-600">Posts</span>
          </h2>
          <Posts></Posts>
        </div>
      </div>
    </>
  );
}

export default App;
