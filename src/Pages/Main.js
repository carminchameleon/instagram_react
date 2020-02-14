import React from "react";
import "./Main.css";
import Nav from "../Component/Nav";
import Feed from "../Component/Feed";
import Mainright from "../Component/Mainright";
class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <main className="main">
          <section className="mainContainer">
            <Feed />
            <Mainright />
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
