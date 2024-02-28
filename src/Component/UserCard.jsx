import React, { useEffect, useState } from "react";
import { SlGlobe } from "react-icons/sl";
import {
  AiFillDelete,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlinePhone,
  AiTwotoneEdit,
} from "react-icons/ai";
import UserEditDialogBox from "./UserEditDialogBox";
export default function UserCard({ data, handleDelete }) {
  const [userData, setUserData] = useState({});
  const [isLike, setIsLike] = useState(false);
  const [editBox, setEditBox] = useState(false);
  useEffect(() => {
    setUserData(data);
  }, [data]);
  return (
    <div className="card_box">
      <div className="image_box">
        <img src={data.image} />
      </div>
      <div className="card_content">
        <h2>{userData.name}</h2>
        <p>
          <AiOutlineMail />
          {userData.mail}
        </p>
        <p>
          <AiOutlinePhone />
          {userData.phone}
        </p>
        <p>
          <SlGlobe />
          {userData.link}
        </p>
      </div>
      <div className="action_buttons">
        <button
          className="heart"
          onClick={() => {
            setIsLike(!isLike);
          }}
        >
          {isLike ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
        <button onClick={()=>{setEditBox(true)}}>
          <AiTwotoneEdit />
        </button>
        <button
          onClick={() => {
            handleDelete(data.id);
          }}
        >
          <AiFillDelete />
        </button>
      </div>

      <UserEditDialogBox
        isOpen={editBox}
        userDetail={userData}
        handleClose={() => {
          setEditBox(false);
        }}
        handleSubmit={(data) => {setUserData(data);setEditBox(false)}}
      />
    </div>
  );
}
