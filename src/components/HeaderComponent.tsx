import React from "react";
import "../App.css";

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="row" id="headerDiv">
        <div className="col-lg-12" id="headerCol">
          <h2 id="headerH2">ToDo List</h2>
        </div>
      </div>
    );
  }
}
