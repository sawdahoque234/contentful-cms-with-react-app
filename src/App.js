import Blogs from "./components/Blogs";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1 className="text-success py-3 text-center">
        Explore your Programming Knowledge!!
      </h1>
      <Home />
      <Blogs />
    </div>
  );
}

export default App;
