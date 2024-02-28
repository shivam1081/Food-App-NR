// This is the example of class based component.
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //   count: 0,
      userInfo: {
        name: "Dummy",
      },
    };
  }
  // Called when the component is mounted
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shivam1081");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

    componentDidUpdate() { }
    componentWillUnmount() {
        
    }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="user-card">
        {/* Never update state variables directly like this.state.count=something. It will not update. */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @shivamdubey1801</h4>
      </div>
    );
  }
}
export default UserClass;
