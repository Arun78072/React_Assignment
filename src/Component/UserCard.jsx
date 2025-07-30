import React, { useEffect, useState } from "react";
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
  const [editBox, setEditBox] = useState(false);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  return (
    <>
      <tr className="card_content">
        <td>{userData.name}</td>
        <td>{userData.mail}</td>
        <td>{userData.phone}</td>
        <td>
          <button onClick={() => setEditBox(true)}>
            <AiTwotoneEdit />
          </button>
          <button onClick={() => handleDelete(data.id)}>
            <AiFillDelete />
          </button>
        </td>
      </tr>

      {/* Modal for editing */}
      <UserEditDialogBox
        isOpen={editBox}
        userDetail={userData}
        handleClose={() => setEditBox(false)}
        handleSubmit={(data) => {
          setUserData(data);
          setEditBox(false);
        }}
      />
    </>
  );
}
