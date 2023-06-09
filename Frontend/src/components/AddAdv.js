import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdvService from "../Services/Adv.service";

const AddAdv = () => {
  const [adTitle, setadTitle] = useState("");
  const [catogery, setCatogery] = useState("");
  const [price, setPrice] = useState("");
  const [descreption, setDescreption] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveAdv = (o) => {
    o.preventDefaul
    const Adv = {id, adTitle, catogery, price, descreption, status };

    if (id) {
      //update
      AdvService.update(Adv)
        .then((response) => {
          alert("Adv Data Updated successfully!");
          console.log("Adv data updated successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      AdvService.create(Adv)
        .then((response) => {
          alert("Adv Saved");
          console.log("Adv has been added successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      AdvService.get(id)
        .then((Adv) => {
          setadTitle(Adv.data.adTitle);
          setCatogery(Adv.data.catogery)
          setPrice(Adv.data.price);
          setDescreption(Adv.data.descreption)
          setStatus(Adv.data.status)
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <h3 className="ab">
        <b>
          <u>Add/Update Adv</u>
        </b>
      </h3>
      <form className="form1">
        <br></br>
        <br></br>
        <br></br>
        <div className="form-group">
          {/* <p className="prsub">Adv Name:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="adTitle"
            value={adTitle}
            onChange={(o) => setadTitle(o.target.value)}
            placeholder="Enter Adv Name"
          />
        </div>

        <br></br>
        <div className="form-group">
          {/* <p className="prsub">Adv Price:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="catogery"
            value={catogery}
            onChange={(o) => setCatogery(o.target.value)}
            placeholder="Enter catogery"
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <button onClick={(o) => saveAdv(o)} id="svep">
            Save
          </button>
          <Link to="/prodlist">
            <button className="bckc">Back To list</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddAdv;