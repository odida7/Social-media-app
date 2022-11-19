import React from "react";
//import { useContext } from "react";
import "./comment.css";
//import { AuthContext } from "../../context/authContext";
import bu from '../../pics/bu.png';
import N from '../../pics/N.png';

const Comments = () => {
 // const { currentUser } = useContext(AuthContext);
  //Temporary
  const comment = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture: bu,
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture: N,
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={bu} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comment.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
