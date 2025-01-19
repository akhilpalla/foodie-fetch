import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "Default",
      },
    };
    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child componentDidMount");

    const data = await fetch("https://api.github.com/users/akhilpalla");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + " Child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + " Child componentWillUnmount");
  }

  render() {
    console.log(this.props.name + " Child Render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>count = {this.state.count}</h1>
        <button
          onClick={() => {
            //never update state variables directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <img src={avatar_url} />
        <h2>name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9999999999</h4>
      </div>
    );
  }
}

export default UserClass;

//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
