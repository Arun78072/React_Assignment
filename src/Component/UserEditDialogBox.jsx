import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
export default function UserEditDialogBox({
  isOpen,
  userDetail,
  handleClose,
  handleSubmit,
}) {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
    validateForm(key,value)
  };

  const validateForm = (key,value) => {
    let errorMessage = '';
    if (key === 'name') {
        if(value.length < 1){
            errorMessage = "Name is required";
        }
    }else if(key === 'mail'){
        if(value.length < 1){
            errorMessage = "Email is required";
        }else if(!/^\S+@\S+\.\S+$/.test(value)){
            errorMessage = "Invalid email format";
        }
    }else if(key === 'phone'){
        if(value.length < 1){
            errorMessage = "Phone is required";
        }
       
    }else if(key === 'link'){
        if(value.length < 1){
            errorMessage = "Website Link is required";
        }
    }
    setErrors({...errors , [key]:errorMessage});
  };

  const handleFormSubmit = ()=>{
    if(Object.values(errors).every(value => value === '')){
        handleSubmit(userData)
    }
  }
  useEffect(() => {
    setUserData(userDetail);
  }, [userDetail]);

  return (
    <div className={isOpen ? "dialog_box active" : "dialog_box"}>
      <div
        className="form_background"
        onClick={() => {
          handleClose();
        }}
      ></div>
      <div className="form_content">
        <div className="title_bar">
          <h4>Basic Modal</h4>
          <button
            onClick={() => {
              handleClose();
            }}
          >
            <IoClose />
          </button>
        </div>
        <div className="edit_form">
          <div>
            <label>
              <span>*</span> Name :{" "}
            </label>
            <div className="input_box">
              <input
                type="text"
                value={userData?.name || ''}
                onChange={(e) => {
                  handleChange("name", e.target.value);
                }}
              />
              <p className="error">{errors.name}</p>
            </div>
          </div>
          <div>
            <label>
              <span>*</span> Email :{" "}
            </label>
            <div className="input_box">
              <input
                type="text"
                value={userData?.mail || ''}
                onChange={(e) => {
                  handleChange("mail", e.target.value);
                }}
              />
              <p className="error">{errors.mail}</p>
            </div>
          </div>
          <div>
            <label>
              <span>*</span> Phone :{" "}
            </label>
            <div className="input_box">
              <input
                type="text"
                value={userData.phone || ''}
                onChange={(e) => {
                  handleChange("phone", e.target.value);
                }}
              />
              <p className="error">{errors.phone}</p>
            </div>
          </div>
          <div>
            <label>
              <span>*</span> Website :{" "}
            </label>
            <div className="input_box">
              <input
                type="text"
                value={userData.link || ''}
                onChange={(e) => {
                  handleChange("link", e.target.value);
                }}
              />
              <p className="error">{errors.link}</p>
            </div>
          </div>
        </div>
        <div className="bottom_bar">
          <button onClick={()=>handleClose()}>Cancle</button>
          <button onClick={()=>{handleFormSubmit()}}
            style={{
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
              color: "#fff",
            }}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
