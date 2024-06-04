import Accordian from "./components/accordian/index"
import RandomColor from "./components/random-colour/index";
import Star_Rating from "./components/star_rating/index";

function App() {
  return (
    <div className="App">
      {/* <Accordian/>
      <RandomColor/> */}
      <Star_Rating no_of_star={10}/>
    </div>
  );
}

export default App;
