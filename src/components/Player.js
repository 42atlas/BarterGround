import React, { Component } from "react";
import "../style/main.css";
import "nes.css/css/nes.min.css";

// Import your audio file
import song from "../audio/BattleSong.wav";

class Player extends Component {
  // Create state
  state = {
    // Get audio file in a variable
    audio: new Audio(song),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {
      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div>
        {/* Button to call our main function */}
        {/* <button onClick={this.playPause} className="nes-btn is-success"> */}
        MUSIC IS: {this.state.isPlaying ? "OFF" : "ON"}
        {/* </button> */}
      </div>
    );
  }
}

export default Player;
