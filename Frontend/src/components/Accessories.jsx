import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdvService from "../Services/Adv.service";

const AdvList = () => {
  const [Adv, setAdvs] = useState([]);

  const init = () => {
    Adv.Service.getAll()
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
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <h3 className="ab"><b><u>List of Advs:</u></b></h3>
      <hr />
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
            <th id="webpro"> Adv Id</th>
            <th id="webpro"> Adv Title</th>
              <th id="webpro"> Adv name</th>
              <th id="webpro"> Price</th>
              <th id="webpro"> Description</th>
              <th id="webpro"> Status</th>
              {/* <th id="webpro">Actions </th> */}
            </tr>
          </thead>
          <tbody>
            {Adv.map((Adv) => (
              <tr key={Adv.id}>
                <td>{Adv.id}</td>
                <td>{Adv.title}</td>
                <td>{Adv.name}</td>
                <td>{Adv.price}</td>
                <td>{Adv.description}</td>
                <td>{Adv.Status}</td>

                
              </tr>
            ))}
          </tbody>
        </table>
        <div>
                  <Link
                     
                    to="/buy"
                  >
                    <button className="btn1">
                      Buy
                    </button>
                    
                  </Link>
                  </div>
      </div>
    </div>
  );
};

export default AdvList;
