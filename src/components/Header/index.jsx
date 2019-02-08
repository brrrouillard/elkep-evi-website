import React, { Component } from "react";
import "./_Header.css";

export class Header extends Component {
  constructor(){
    super();
    this.state = {
      en: {
        item1: "Home",
        item2: "Restaurant",
        item3: "Gallery",
        item4: "Activities",
        item5: "Location",
        item6: "Reservation"
      }
    }
  }
  render() {
    return (
      <div className="navbar">
        <a href="/">{this.state[this.props.language].item1}</a>
        <a href="/">{this.state[this.props.language].item2}</a>
        <a href="/">{this.state[this.props.language].item3}</a>
        <a href="/">{this.state[this.props.language].item4}</a>
        <a href="/">{this.state[this.props.language].item5}</a>
        <a href="/">{this.state[this.props.language].item6}</a>

      </div>
    );
  }
}

export default Header;
