import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../Services/User.service";

const UserList = () => {
  const [Users, setUsers] = useState([]);

  const init = () => {
    UserService
      .getAll()
      .then((response) => {
        console.log("Printing Users data", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log("Printing id", id);
    UserService
      .remove(id)
      .then((response) => {
        console.log("User deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>List of Users</h3>
      <hr />
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th> User Id</th>
              <th> Name</th>
              <th> Address</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((User) => (
              <tr key={User.id}>
                <td>{User.id}</td>
                <td>{User.cname}</td>
                <td>{User.caddress}</td>
                <td>
                  <button
                    className="btn btn-danger ml-2"
                    id="dprod"
                    onClick={() => {
                      handleDelete(User.id);
                    }}
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;