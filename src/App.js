import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";
import Particles from "react-particles-js";
import "./App.css";
import { Component } from "react";
import { classifyImage } from "./services/service";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import Result from "./components/result/Result";

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      name: "",
    };
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.imageUrl !== this.state.imageUrl) {
      let result = await classifyImage(this.state.imageUrl);
      this.setState({
        name: result,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Particles params={particleOptions} className="particles" />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <Result celeb={this.state.name} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
