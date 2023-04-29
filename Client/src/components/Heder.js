import "./Heder.css";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export default function Heder() {
  const profiledetile = {
    logoUrl: "./images/Rectangle.png",
    imgUrl: "./images/profile.png",
    name: "Shan danushka",
  };

  var x = 0;
  const manu = () => {
    if (x === 0) {
      const nav = document.getElementsByClassName("leftbox");
      nav[0].style.display = "block";
      x = x + 1;
    } else {
      const nav = document.getElementsByClassName("leftbox");
      nav[0].style.display = "none";
      x = x - 1;
    }
  };

  var l = 0;
  const lead = () => {
    if (l === 0) {
      const lead = document.getElementsByClassName("hiddnbox");
      lead[0].style.display = "block";
      l = l + 1;
    } else {
      const lead = document.getElementsByClassName("hiddnbox");
      lead[0].style.display = "none";
      l = l - 1;
    }
  };

  var s = 0;
  const setting = () => {
    if (s === 0) {
      const setting = document.getElementsByClassName("hiddnbox2");
      setting[0].style.display = "block";
      s = s + 1;
    } else {
      const setting = document.getElementsByClassName("hiddnbox2");
      setting[0].style.display = "none";
      s = s - 1;
    }
  };
  const d1w = document.getElementsByClassName("d1");
  const d2w = document.getElementsByClassName("d2");
  const d3w = document.getElementsByClassName("d3");
  const d4w = document.getElementsByClassName("d4");
  const d5w = document.getElementsByClassName("d5");
  const d6w = document.getElementsByClassName("d6");
  const d7w = document.getElementsByClassName("d7");
  const d8w = document.getElementsByClassName("d8");
  const d9w = document.getElementsByClassName("d9");
  const d10w = document.getElementsByClassName("d10");

  const d1 = () => {
    d1w[0].style.background = "#067237";
    d1w[0].style.color = "#ffffff";
    d2w[0].style.background = "#ffffff";
    d2w[0].style.color = "black";
    d3w[0].style.background = "#ffffff";
    d3w[0].style.color = "black";
    d4w[0].style.background = "#ffffff";
    d4w[0].style.color = "black";
    d5w[0].style.background = "#ffffff";
    d5w[0].style.color = "black";
    d6w[0].style.background = "#ffffff";
    d6w[0].style.color = "black";
    d7w[0].style.background = "#ffffff";
    d7w[0].style.color = "black";
    d8w[0].style.background = "#ffffff";
    d8w[0].style.color = "black";
    d9w[0].style.background = "#ffffff";
    d9w[0].style.color = "black";
    d10w[0].style.background = "#ffffff";
    d10w[0].style.color = "black";
  };
  const d2 = () => {
    d1w[0].style.background = "#ffffff";
    d1w[0].style.color = "black";
    d2w[0].style.background = "#067237";
    d2w[0].style.color = "#ffffff";
    d3w[0].style.background = "#ffffff";
    d3w[0].style.color = "black";
    d4w[0].style.background = "#ffffff";
    d4w[0].style.color = "black";
    d5w[0].style.background = "#ffffff";
    d5w[0].style.color = "black";
    d6w[0].style.background = "#ffffff";
    d6w[0].style.color = "black";
    d7w[0].style.background = "#ffffff";
    d7w[0].style.color = "black";
    d8w[0].style.background = "#ffffff";
    d8w[0].style.color = "black";
    d9w[0].style.background = "#ffffff";
    d9w[0].style.color = "black";
    d10w[0].style.background = "#ffffff";
    d10w[0].style.color = "black";
  };
  const d3 = () => {
    d1w[0].style.background = "#ffffff";
    d1w[0].style.color = "black";
    d2w[0].style.background = "#ffffff";
    d2w[0].style.color = "black";
    d3w[0].style.background = "#067237";
    d3w[0].style.color = "#ffffff";
    d4w[0].style.background = "#ffffff";
    d4w[0].style.color = "black";
    d5w[0].style.background = "#ffffff";
    d5w[0].style.color = "black";
    d6w[0].style.background = "#ffffff";
    d6w[0].style.color = "black";
    d7w[0].style.background = "#ffffff";
    d7w[0].style.color = "black";
    d8w[0].style.background = "#ffffff";
    d8w[0].style.color = "black";
    d9w[0].style.background = "#ffffff";
    d9w[0].style.color = "black";
    d10w[0].style.background = "#ffffff";
    d10w[0].style.color = "black";
  };
  const d4 = () => {
    d1w[0].style.background = "#ffffff";
    d1w[0].style.color = "black";
    d2w[0].style.background = "#ffffff";
    d2w[0].style.color = "black";
    d3w[0].style.background = "#ffffff";
    d3w[0].style.color = "black";
    d4w[0].style.background = "#067237";
    d4w[0].style.color = "#ffffff";
    d5w[0].style.background = "#ffffff";
    d5w[0].style.color = "black";
    d6w[0].style.background = "#ffffff";
    d6w[0].style.color = "black";
    d7w[0].style.background = "#ffffff";
    d7w[0].style.color = "black";
    d8w[0].style.background = "#ffffff";
    d8w[0].style.color = "black";
    d9w[0].style.background = "#ffffff";
    d9w[0].style.color = "black";
    d10w[0].style.background = "#ffffff";
    d10w[0].style.color = "black";
  };
  const d5 = () => {
    d1w[0].style.background = "#ffffff";
    d1w[0].style.color = "black";
    d2w[0].style.background = "#ffffff";
    d2w[0].style.color = "black";
    d3w[0].style.background = "#ffffff";
    d3w[0].style.color = "black";
    d4w[0].style.background = "#ffffff";
    d4w[0].style.color = "black";
    d5w[0].style.background = "#067237";
    d5w[0].style.color = "#ffffff";
    d6w[0].style.background = "#ffffff";
    d6w[0].style.color = "black";
    d7w[0].style.background = "#ffffff";
    d7w[0].style.color = "black";
    d8w[0].style.background = "#ffffff";
    d8w[0].style.color = "black";
    d9w[0].style.background = "#ffffff";
    d9w[0].style.color = "black";
    d10w[0].style.background = "#ffffff";
    d10w[0].style.color = "black";
  };
  const d6 = () => {
    d1w[0].style.background = "#ffffff";
    d1w[0].style.color = "black";
    d2w[0].style.background = "#ffffff";
    d2w[0].style.color = "black";
    d3w[0].style.background = "#ffffff";
    d3w[0].style.color = "black";
    d4w[0].style.background = "#ffffff";
    d4w[0].style.color = "black";
    d5w[0].style.background = "#ffffff";
    d5w[0].style.color = "black";
    d6w[0].style.background = "#067237";
    d6w[0].style.color = "#ffffff";
    d7w[0].style.background = "#ffffff";
    d7w[0].style.color = "black";
    d8w[0].style.background = "#ffffff";
    d8w[0].style.color = "black";
    d9w[0].style.background = "#ffffff";
    d9w[0].style.color = "black";
    d10w[0].style.background = "#ffffff";
    d10w[0].style.color = "black";
  };
  const d7 = () => {
    d1w[0].style.background = "#ffffff";
    d1w[0].style.color = "black";
    d2w[0].style.background = "#ffffff";
    d2w[0].style.color = "black";
    d3w[0].style.background = "#ffffff";
    d3w[0].style.color = "black";
    d4w[0].style.background = "#ffffff";
    d4w[0].style.color = "black";
    d5w[0].style.background = "#ffffff";
    d5w[0].style.color = "black";
    d6w[0].style.background = "#ffffff";
    d6w[0].style.color = "black";
    d7w[0].style.background = "#067237";
    d7w[0].style.color = "#ffffff";
    d8w[0].style.background = "#ffffff";
    d8w[0].style.color = "black";
    d9w[0].style.background = "#ffffff";
    d9w[0].style.color = "black";
    d10w[0].style.background = "#ffffff";
    d10w[0].style.color = "black";
  };
  const d8 = () => {
    d1w[0].style.background = "#ffffff";
    d1w[0].style.color = "black";
    d2w[0].style.background = "#ffffff";
    d2w[0].style.color = "black";
    d3w[0].style.background = "#ffffff";
    d3w[0].style.color = "black";
    d4w[0].style.background = "#ffffff";
    d4w[0].style.color = "black";
    d5w[0].style.background = "#ffffff";
    d5w[0].style.color = "black";
    d6w[0].style.background = "#ffffff";
    d6w[0].style.color = "black";
    d7w[0].style.background = "#ffffff";
    d7w[0].style.color = "black";
    d8w[0].style.background = "#067237";
    d8w[0].style.color = "#ffffff";
    d9w[0].style.background = "#ffffff";
    d9w[0].style.color = "black";
    d10w[0].style.background = "#ffffff";
    d10w[0].style.color = "black";
  };
  const d9 = () => {
    d1w[0].style.background = "#ffffff";
    d1w[0].style.color = "black";
    d2w[0].style.background = "#ffffff";
    d2w[0].style.color = "black";
    d3w[0].style.background = "#ffffff";
    d3w[0].style.color = "black";
    d4w[0].style.background = "#ffffff";
    d4w[0].style.color = "black";
    d5w[0].style.background = "#ffffff";
    d5w[0].style.color = "black";
    d6w[0].style.background = "#ffffff";
    d6w[0].style.color = "black";
    d7w[0].style.background = "#ffffff";
    d7w[0].style.color = "black";
    d8w[0].style.background = "#ffffff";
    d8w[0].style.color = "black";
    d9w[0].style.background = "#067237";
    d9w[0].style.color = "#ffffff";
    d10w[0].style.background = "#ffffff";
    d10w[0].style.color = "black";
  };
  const d10 = () => {
    d1w[0].style.background = "#ffffff";
    d1w[0].style.color = "black";
    d2w[0].style.background = "#ffffff";
    d2w[0].style.color = "black";
    d3w[0].style.background = "#ffffff";
    d3w[0].style.color = "black";
    d4w[0].style.background = "#ffffff";
    d4w[0].style.color = "black";
    d5w[0].style.background = "#ffffff";
    d5w[0].style.color = "black";
    d6w[0].style.background = "#ffffff";
    d6w[0].style.color = "black";
    d7w[0].style.background = "#ffffff";
    d7w[0].style.color = "black";
    d8w[0].style.background = "#ffffff";
    d8w[0].style.color = "black";
    d9w[0].style.background = "#ffffff";
    d9w[0].style.color = "black";
    d10w[0].style.background = "#067237";
    d10w[0].style.color = "#ffffff";
  };

  return (
    <div className="row set_mar_navbar">
      <div className="leftbox bg_nav_left poti_fix">
        <div className="row">
          <div className="col-12">
            <div className="row cPoin hednameRow">
              <img className="logo" src={profiledetile.logoUrl} alt="" />
            </div>
          </div>
        </div>

        <div onClick={d1} className="row d1">
          <div className="col-12">
            <div className="mt-3 row cPoin settop centeraligtn ms-2 me-2">
              <div className="col-3">
                <img className="diIMG" src="./images/icon.png" alt="" />
              </div>
              <div className="col-7">
              <Link to="/"><h6>Dashboard</h6></Link>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>

        <div onClick={lead} className="mt-3 row cPoin centeraligtn ms-2 me-2">
          <div className="col-3 end">
            <img className="diIMG" src="./images/d1.png" alt="" />
          </div>
          <div className="col-7">
            <h6>Leads</h6>
          </div>
          <div className="mt-2 col-2">
            <img className="arrorIMG" src="./images/arror.png" alt="" />
          </div>
        </div>
        <div className="row hiddnbox">
          <div className="mt-2 mb-2 marginsetlef">
            <div onClick={d2} className="mt-2 row cPoin d2">
              <div className="col-2">
                <img
                  className="mt-2 leftarrorIMG ms-5"
                  src="./images/leftAroor.png"
                  alt=""
                />
              </div>
              <div className="col-10">
              <Link to="/Leads_avalible"><h6 className="ms-5">Available</h6></Link>
              </div>
            </div>
            <div onClick={d3} className="mt-2 row cPoin d3">
              <div className="col-2">
                <img
                  className="mt-2 leftarrorIMG ms-5"
                  src="./images/leftAroor.png"
                  alt=""
                />
              </div>
              <div className="col-10">
              <Link to="/Leads_success"><h6 className="ms-5">Success</h6></Link>
              </div>
            </div>
            <div onClick={d4} className="mt-2 row cPoin d4">
              <div className="col-2">
                <img
                  className="mt-2 leftarrorIMG ms-5"
                  src="./images/leftAroor.png"
                  alt=""
                />
              </div>
              <div className="col-10">
              <h6 className="ms-5">Rejected</h6>
              </div>
            </div>
          </div>
        </div>

        <div onClick={d5} className="row d5">
          <div className="col-12">
            <div className="mt-3 row cPoin centeraligtn ms-2 me-2">
              <div className="col-3 end">
                <img className="diIMG" src="./images/d2.png" alt="" />
              </div>
              <div className="col-9">
                <h6>Current Stock</h6>
              </div>
            </div>
          </div>
        </div>

        <div onClick={d6} className="row d6">
          <div className="col-12">
            <div className="mt-3 row cPoin centeraligtn ms-2 me-2">
              <div className="col-3 end">
                <img className="diIMG" src="./images/d3.png" alt="" />
              </div>
              <div className="col-7">
                <h6>Reports</h6>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>

        <div
          onClick={setting}
          className="mt-3 row cPoin centeraligtn ms-2 me-2"
        >
          <div className="col-3 end">
            <img className="diIMG" src="./images/d4.png" alt="" />
          </div>
          <div className="col-7">
            <h6>Settings</h6>
          </div>
          <div className="col-2">
            <img className="mt-2 arrorIMG" src="./images/arror.png" alt="" />
          </div>
        </div>
        <div className="row hiddnbox2">
          <div className="mt-2 mb-2 marginsetlef">
            <div onClick={d7} className="mt-2 row cPoin d7">
              <div className="col-2">
                <img
                  className="mt-2 leftarrorIMG ms-5"
                  src="./images/leftAroor.png"
                  alt=""
                />
              </div>
              <div className="col-10">
                <h6 className="ms-5">Profile</h6>
              </div>
            </div>
            <div onClick={d8} className="mt-2 row cPoin d8">
              <div className="col-2">
                <img
                  className="mt-2 leftarrorIMG ms-5"
                  src="./images/leftAroor.png"
                  alt=""
                />
              </div>
              <div className="col-10">
                <h6 className="ms-5">Customer</h6>
              </div>
            </div>
            <div onClick={d9} className="mt-2 row cPoin d9">
              <div className="col-2">
                <img
                  className="mt-2 leftarrorIMG ms-5"
                  src="./images/leftAroor.png"
                  alt=""
                />
              </div>
              <div className="col-10">
                <h6 className="ms-5">Stocks</h6>
              </div>
            </div>
            <div onClick={d10} className="mt-2 row cPoin d10">
              <div className="col-2">
                <img
                  className="mt-2 leftarrorIMG ms-5"
                  src="./images/leftAroor.png"
                  alt=""
                />
              </div>
              <div className="col-10">
                <h6 className="ms-5">Links</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 poti_fix">
        <div className="row bg_hed">
          <div className="col-6 indexp">
            <img
              onClick={manu}
              className="mt-1 img_manu cPoin"
              src="./images/Vector.png"
              alt=""
            />
          </div>
          <div className="col-6 col-md-6 endSET">

            <Dropdown className="me-4">
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="rowler">
                <img
                  className="profileIMG me-1"
                  src={profiledetile.imgUrl}
                  alt=""
                />
                {profiledetile.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
