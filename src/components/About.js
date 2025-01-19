import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Foodie Fetch App</h2>

        {/* Class Based Component - only difference is when we create the component */}
        <UserClass name={"First"} />
        <UserClass name={"Second"} />

      </div>
    );
  }
}

export default About;
