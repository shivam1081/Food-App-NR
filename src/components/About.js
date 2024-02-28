import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>This is the about us page for Namaste React</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <User name={"Name: Shivam function"} /> */}
        <UserClass name={"First Component"} location={"Location: Sagar"} />
        {/* <UserClass
          name={"Second Component"}
          location={"Location: US"}
        /> */}
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>This is the about us page for Namaste React</h1>
//       {/* <User name={"Name: Shivam function"} /> */}
//       <UserClass name={"Name: Shivam Class Component"} location={ "Location: Sagar"} />
//     </div>
//   );
// };
export default About;
