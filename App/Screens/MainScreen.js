import React, { Component } from "react";
import { Text, View, Button, CameraRoll } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import styles from "../Styles/styles";
import CustomButton from "../Components/CustomButton";
import moment from "moment";
import CamButtonAnimated from "../Components/CamButtonAnimated";
import ImageView from "../Components/ImageView";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      data: [
        {
          link:
            "https://media1.tenor.com/images/452cea6cc5abcfbac66d1b62a18bacf5/tenor.gif?itemid=8474302"
        },
        {
          link:
            "https://media1.tenor.com/images/bdfecff3c30f96717f58ab477f544324/tenor.gif?itemid=8474276"
        }
      ]
    };
    this.onCamPresses = this.onCamPresses.bind(this);
  }
  async componentDidlMount() {
    d = new Date();
    newTime = moment(d).format("MMMM Do YYYY, HH:mm a");
    this.setState({
      time: newTime
    });
  }
  openCamera = () => {
    ImagePicker.openCamera({}).then(image => {
      CameraRoll.saveToCameraRoll(image.path);
      this.setState({ data: [...this.state.data, { link: image.path }] });
    });
  };
  onCamPresses = async () => {
    //Play animation
    //this.animation.play();
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageView}>
          <ImageView dataFromMain={this.state.data} />
        </View>
        <View style={styles.camButton}>
          <CamButtonAnimated
            buttonOnPress={() => {
              this.openCamera();
              this.onCamPresses();
            }}
            onCamPresses={animation => {
              this.animation = animation;
            }}
          />
        </View>
      </View>
    );
  }
}

export default MainScreen;
