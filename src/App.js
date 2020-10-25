import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Navbar from "./components/Navbar";
import DeliverySide from "./components/DeliverySide";
import ImageSide from "./components/ImageSide";

/*class Test extends Component {
  constructor() {
    super();
    this.state = {
      name: "mehdi",
    };
  }
  render() {
    return <div>Test Class Based Component {this.state.name}</div>;
  }
}
*/
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <DeliverySide />
        <ImageSide />
      </div>
    </div>
  );
}

export default App;
