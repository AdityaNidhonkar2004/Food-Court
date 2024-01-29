import React from "react";
//Class Based Component
class UserClass extends React.Component {
  //Syntax to pass props in class based componenet
  constructor(props) {
    super(props);
    //All State-variables should be created in constructor in class-based components
    // Initially there were no hooks so we use below syntax
    // this.state = {
    // state variables
    // count: 0,
    // count2: 1,
    this.state = {};
  }

  render() {
    //Destructuring the props
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
    return (
      <div className="user-info">
        <h2>Count:{count}</h2>
        {/* <button
          Using {setState} keyword we can update the state-variables
          setstate-> is an object containing state-variables and what to update
          onClick={() => {
            //Syntax:
            this.setState({
              count: this.state.count + 1,
            });
          }}
        ></button> */}
        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>Cantact:aditya@123</h2>
      </div>
    );
  }
}
export default UserClass;
