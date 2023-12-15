import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>This is the about us page for Namaste React</h1>
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
