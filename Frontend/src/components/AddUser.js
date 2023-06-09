import React from "react";
import { useState, useEffect } from "react";
import { Link,  useParams } from "react-router-dom";
import UserService from "../Services/User.service";

const AddUser = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [address, setaddress] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phone, setPhone] = useState("");
  
  const { id } = useParams();

  const saveUser = (e) => {
    e.preventDefault();

    const User = {name,password,first_name,last_name,address, emailId,phone,id};

    if (id) {
      //update
      UserService
        .update(User)
        .then((response) => {
          alert("Details updated Successfully");
          console.log("user data updated successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      UserService
        .create(User)
        .then((response) => {
          alert("Details Saved");
          console.log("user added successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      UserService
        .get(id)
        .then((User) => {
          setname(User.data.name);
          setpassword(User.data.password);
          setFirst_name(User.data.first_name);
          setLast_name(User.data.last_name);
          setEmailId(User.data.emailId)
          setaddress(User.data.address);
          setPhone(User.data.phone);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <br></br>
      
      <h3 className="ab">
        <b>
          <u>Add/Update User</u>
        </b>
      </h3>
      <form className="form1">
        <br></br>
       
        
        <div className="form-group">
          {/* <p className="prsub">User Name:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <br></br>
        
        <div className="form-group">
          {/* <p className="prsub">User Name:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your Password"
          />
        </div>
        <br></br>
        
        <div className="form-group">
          {/* <p className="prsub">User Name:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="First_name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            placeholder="Enter your  Firstname"
          />
        </div>
        <br></br>
        
        <div className="form-group">
          {/* <p className="prsub">User Name:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="Last_name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            placeholder="Enter your lastname"
          />
        </div>
        <br></br>
        <div className="form-group">
          {/* <p className="prsub">User Address:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>
        <br></br>
        <div className="form-group">
          {/* <p className="prsub">User Name:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="emailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <br></br>
        <br></br>
        <div className="form-group">
          {/* <p className="prsub">User Name:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone"
          />
        </div>
        <br></br>
        <div>
          <button onClick={(e) => saveUser(e)} id="svep">
            Save
          </button>
          <Link to="/user">
            <button className="bckc">Back To list</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddUser;