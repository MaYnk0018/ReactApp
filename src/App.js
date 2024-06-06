import menus from "./components/treeview/data";
import Accordian from "./components/accordian/index"
import QRgenerator from "./components/qrCode";
import RandomColor from "./components/random-colour/index";
import Star_Rating from "./components/star_rating/index";
import TreeView from "./components/treeview";

function App() {
  return (
    <div className="App">
      {/* <Accordian/>
      <RandomColor/> */}
      {/* <Star_Rating no_of_star={10}/> */}
      {/* <QRgenerator/> */}
      
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
