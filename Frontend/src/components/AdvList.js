import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import AdvService from "../Services/Adv.service";

const AdvList = () => {
  const [Advs, setAdvs] = useState([]);

  const init = () => {
    AdvService.getAll()
      .then((response) => {
        console.log("Printing Advs", response.data);
        setAdvs(response.data);
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
    AdvService.remove(id)
      .then((response) => {
        console.log("Adv has been Deleted", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container" id="plist">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>List of Advs</h3>
      <hr />
      <div>
        <Link to="/addprod" className="btn  mb-2" id="aprod">
          Add Adv
        </Link>
        <table className="table table-bordered table-striped" id="tabp">
          <thead className="thead-dark">
            <tr>
              <th> Adv Id</th>
              <th> Adv name</th>
              <th> Price</th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {Advs.map((Adv) => (
              <tr key={Adv.id}>
                <td>{Adv.id}</td>
                <td>{Adv.pname}</td>
                <td>{Adv.price}</td>

                <td>
                  <Link
                    className="btn "
                    id="uprod"
                    to={`/Advs/edit/${Adv.id}`}
                  >
                    Edit Adv
                  </Link>

                  <button
                    id="dprod"
                    onClick={() => {
                      handleDelete(Adv.id);
                    }}
                  >
                    Delete Adv
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

export default AdvList;