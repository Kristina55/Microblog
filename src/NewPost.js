// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import NewPostForm from "./NewPostForm";

// class NewPost extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showForm: false
//     };
//     this.toggleView = this.toggleView.bind(this);
//   }

//   toggleView() {
//     this.setState({ showForm: this.state.showForm });
//   }
//   render() {
//     return (
//       <div>
//         <NewPostForm addNewPost={this.props.addNewPost} />
//         <div>
//           <Link to={"/" + this.props.title} />
//           <h1>{this.props.title}</h1>
//           <p>{this.props.description}</p>
//           <p>{this.props.body}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewPost;
