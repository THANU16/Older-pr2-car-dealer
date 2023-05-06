import "./Heder.css";
import { React, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Heder() {
  const profiledetile = {
    logoUrl: "./images/homelogo.png",
    imgUrl: "./images/profile.png",
    name: "Shan danushka",
  };

  const hover_d1 = document.getElementsByClassName("hover_d1");
  const hover_d2 = document.getElementsByClassName("hover_d2");
  const hover_d3 = document.getElementsByClassName("hover_d3");
  const hover_d4 = document.getElementsByClassName("hover_d4");
  const hover_d5 = document.getElementsByClassName("hover_d5");
  const hover_d6 = document.getElementsByClassName("hover_d6");
  const hover_d7 = document.getElementsByClassName("hover_d7");
  const hover_d8 = document.getElementsByClassName("hover_d8");
  const hover_d9 = document.getElementsByClassName("hover_d9");
  const hover_d10 = document.getElementsByClassName("hover_d10");
  const hover_lead = document.getElementsByClassName("hover_lead");
  const hover_seting = document.getElementsByClassName("hover_seting");

  const text_font1 = document.getElementsByClassName("text_font1");
  const text_font2 = document.getElementsByClassName("text_font2");
  const text_font3 = document.getElementsByClassName("text_font3");
  const text_font4 = document.getElementsByClassName("text_font4");
  const text_font5 = document.getElementsByClassName("text_font5");
  const text_font6 = document.getElementsByClassName("text_font6");
  const text_font7 = document.getElementsByClassName("text_font7");
  const text_font8 = document.getElementsByClassName("text_font8");
  const text_font9 = document.getElementsByClassName("text_font9");
  const text_font10 = document.getElementsByClassName("text_font10");

  const diIMG1_d1 = document.getElementsByClassName("diIMG1_d1");
  const diIMG2_d1 = document.getElementsByClassName("diIMG2_d1");
  const diIMG1_d2 = document.getElementsByClassName("diIMG1_d2");
  const diIMG2_d2 = document.getElementsByClassName("diIMG2_d2");
  const diIMG1_d3 = document.getElementsByClassName("diIMG1_d3");
  const diIMG2_d3 = document.getElementsByClassName("diIMG2_d3");

  const leftarrorIMG1_d1 = document.getElementsByClassName("leftarrorIMG1_d1");
  const leftarrorIMG2_d1 = document.getElementsByClassName("leftarrorIMG2_d1");
  const leftarrorIMG1_d2 = document.getElementsByClassName("leftarrorIMG1_d2");
  const leftarrorIMG2_d2 = document.getElementsByClassName("leftarrorIMG2_d2");
  const leftarrorIMG1_d3 = document.getElementsByClassName("leftarrorIMG1_d3");
  const leftarrorIMG2_d3 = document.getElementsByClassName("leftarrorIMG2_d3");

  const leftarrorIMG1_d4 = document.getElementsByClassName("leftarrorIMG1_d4");
  const leftarrorIMG2_d4 = document.getElementsByClassName("leftarrorIMG2_d4");
  const leftarrorIMG1_d5 = document.getElementsByClassName("leftarrorIMG1_d5");
  const leftarrorIMG2_d5 = document.getElementsByClassName("leftarrorIMG2_d5");
  const leftarrorIMG1_d6 = document.getElementsByClassName("leftarrorIMG1_d6");
  const leftarrorIMG2_d6 = document.getElementsByClassName("leftarrorIMG2_d6");
  const leftarrorIMG1_d7 = document.getElementsByClassName("leftarrorIMG1_d7");
  const leftarrorIMG2_d7 = document.getElementsByClassName("leftarrorIMG2_d7");

  useEffect(() => {
    var pageView = sessionStorage.getItem("pageView");
    var leadViwe = sessionStorage.getItem("leadViwe");
    var SettingViwe = sessionStorage.getItem("SettingViwe");

    if (pageView === "Dashboard") {
      hover_d1[0].style.background = "#FFFFFF";
      hover_d1[0].style.height = "10%";
      text_font1[0].style.color = "#067237";
      text_font1[0].style.font = "bold";
      diIMG1_d1[0].style.display = "block";
      diIMG2_d1[0].style.display = "none";
    } else if (pageView === "Leads_avalible") {
      hover_d2[0].style.background = "#FFFFFF";
      hover_d2[0].style.height = "10%";
      text_font2[0].style.color = "#067237";
      text_font2[0].style.font = "bold";
      leftarrorIMG1_d1[0].style.display = "block";
      leftarrorIMG2_d1[0].style.display = "none";
    } else if (pageView === "Leads_success") {
      hover_d3[0].style.background = "#FFFFFF";
      hover_d3[0].style.height = "10%";
      text_font3[0].style.color = "#067237";
      text_font3[0].style.font = "bold";
      leftarrorIMG1_d2[0].style.display = "block";
      leftarrorIMG2_d2[0].style.display = "none";
    } else if (pageView === "Leads_reject") {
      hover_d4[0].style.background = "#FFFFFF";
      hover_d4[0].style.height = "10%";
      text_font4[0].style.color = "#067237";
      text_font4[0].style.font = "bold";
      leftarrorIMG1_d3[0].style.display = "block";
      leftarrorIMG2_d3[0].style.display = "none";
    } else if (pageView === "Stock") {
      hover_d5[0].style.background = "#FFFFFF";
      hover_d5[0].style.height = "10%";
      text_font5[0].style.color = "#067237";
      text_font5[0].style.font = "bold";
      diIMG1_d2[0].style.display = "block";
      diIMG2_d2[0].style.display = "none";
    } else if (pageView === "Report") {
      hover_d6[0].style.background = "#FFFFFF";
      hover_d6[0].style.height = "10%";
      text_font6[0].style.color = "#067237";
      text_font6[0].style.font = "bold";
      diIMG1_d3[0].style.display = "block";
      diIMG2_d3[0].style.display = "none";
    } else if (pageView === "Setting_profile") {
      hover_d7[0].style.background = "#FFFFFF";
      hover_d7[0].style.height = "10%";
      text_font7[0].style.color = "#067237";
      text_font7[0].style.font = "bold";
      leftarrorIMG1_d4[0].style.display = "block";
      leftarrorIMG2_d4[0].style.display = "none";
    } else if (pageView === "Setting_customer") {
      hover_d8[0].style.background = "#FFFFFF";
      hover_d8[0].style.height = "10%";
      text_font8[0].style.color = "#067237";
      text_font8[0].style.font = "bold";
      leftarrorIMG1_d5[0].style.display = "block";
      leftarrorIMG2_d5[0].style.display = "none";
    } else if (pageView === "Setting_stock") {
      hover_d9[0].style.background = "#FFFFFF";
      hover_d9[0].style.height = "10%";
      text_font9[0].style.color = "#067237";
      text_font9[0].style.font = "bold";
      leftarrorIMG1_d6[0].style.display = "block";
      leftarrorIMG2_d6[0].style.display = "none";
    } else if (pageView === "Setting_link") {
      hover_d10[0].style.background = "#FFFFFF";
      hover_d10[0].style.height = "10%";
      text_font10[0].style.color = "#067237";
      text_font10[0].style.font = "bold";
      leftarrorIMG1_d7[0].style.display = "block";
      leftarrorIMG2_d7[0].style.display = "none";
    }
   
    
    if (leadViwe === "Open") {
      const lead = document.getElementsByClassName("hiddnbox");
      lead[0].style.display = "block";
    } else if (leadViwe === "Close") {
      const lead = document.getElementsByClassName("hiddnbox");
      lead[0].style.display = "none";
    } 
    
    if (SettingViwe === "Open") {
      const setting = document.getElementsByClassName("hiddnbox2");
      setting[0].style.display = "block";
    } else if (SettingViwe === "Close") {
      const setting = document.getElementsByClassName("hiddnbox2");
      setting[0].style.display = "none";
    }
  }, []);

  const navigate = useNavigate();

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
      sessionStorage.setItem("leadViwe", "Open");
      l = l + 1;
    } else {
      const lead = document.getElementsByClassName("hiddnbox");
      lead[0].style.display = "none";
      sessionStorage.setItem("leadViwe", "Close");
      l = l - 1;
    }
  };

  var s = 0;
  const setting = () => {
    if (s === 0) {
      const setting = document.getElementsByClassName("hiddnbox2");
      setting[0].style.display = "block";
      sessionStorage.setItem("SettingViwe", "Open");
      s = s + 1;
    } else {
      const setting = document.getElementsByClassName("hiddnbox2");
      setting[0].style.display = "none";
      sessionStorage.setItem("SettingViwe", "Close");
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
    sessionStorage.setItem("pageView", "Dashboard");
    navigate("/Dashboard");
  };
  const d2 = () => {
    sessionStorage.setItem("pageView", "Leads_avalible");
    navigate("/Leads_avalible");
  };
  const d3 = () => {
    sessionStorage.setItem("pageView", "Leads_success");
    navigate("/Leads_success");
  };
  const d4 = () => {
    sessionStorage.setItem("pageView", "Leads_reject");
    navigate("/Leads_reject");
  };
  const d5 = () => {
    sessionStorage.setItem("pageView", "Stock");
    navigate("/Stock");
  };
  const d6 = () => {
    sessionStorage.setItem("pageView", "Report");
    navigate("/Report");
  };
  const d7 = () => {
    sessionStorage.setItem("pageView", "Setting_profile");
    navigate("/Setting_profile");
  };
  const d8 = () => {
    sessionStorage.setItem("pageView", "Setting_customer");
    navigate("/Setting_customer");
  };
  const d9 = () => {
    sessionStorage.setItem("pageView", "Setting_stock");
    navigate("/Setting_stock");
  };
  const d10 = () => {
    sessionStorage.setItem("pageView", "Setting_link");
    navigate("/Setting_link");
  };
  const logout = () =>{
    alert("log out");
    sessionStorage.setItem("login", false);
    navigate("/");
  }

  return (
    <div className="row set_mar_navbar">
      <div className="leftbox leftbox_new_page bg_nav_left poti_fix22 poti_fix">
        <div className="row">
          <div className="col-12">
            <div className="row cPoin hednameRow">
              <img className="logo" src="./images/aeuimages.png" alt="" />
            </div>
          </div>
        </div>

        <Link to="/Dashboard">
          <div onClick={d1} className="row d1">
            <div className="col-12 hover hover_d1">
              <div className="mt-2 mb-2 row cPoin settop centeraligtn ms-2 me-2 ">
                <div className="justify-center align-middle col-3 d-flex">
                  <img
                    className="diIMG1 diIMG1_d1"
                    src="./images/dash.png"
                    alt=""
                  />
                  <img
                    className=" diIMG2 diIMG2_d1"
                    src="./images/dash_white.png"
                    alt=""
                  />
                </div>
                <div className="justify-start align-middle col-9 d-flex">
                  <h6 className="text_font text_font1">Dashboard</h6>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="row">
          <div className="col-12 hover hover_lead">
            <div
              onClick={lead}
              className="mt-2 mb-2 row cPoin centeraligtn ms-2 me-2 "
            >
              <div className="col-3 end">
                <img className="diIMG1" src="./images/d1.png" alt="" />
                <img className="diIMG2" src="./images/d1_white.png" alt="" />
              </div>
              <div className="justify-start align-middle col-7 d-flex">
                <h6 className="text_font">Leads</h6>
              </div>
              <div className="mt-2 col-2">
                {/* <img className="mt-1 arrorIMG" src="./images/arror.png" alt="" /> */}
                <img
                  className="mt-1 arrorIMG"
                  src="./images/arror_white.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row hiddnbox ">
          <div className="mt-2 mb-2 marginsetlef">
            <div className="row">
              <div className="col-12 hover hover_d2">
                <div onClick={d2} className="mt-2 mb-2 row cPoin d2 ">
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d1 ms-5"
                      src="./images/leftAroor.png"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d1 ms-5"
                      src="./images/leftAroor_white.png"
                      alt=""
                    />
                  </div>
                  <div className="justify-start align-middle col-9 d-flex">
                    <Link to="/Leads_avalible">
                      <h6 className="ms-5 text_font text_font2">Available</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 hover hover_d3">
                <div onClick={d3} className="mt-2 mb-2 row cPoin d3 ">
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d2 ms-5"
                      src="./images/leftAroor.png"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d2 ms-5"
                      src="./images/leftAroor_white.png"
                      alt=""
                    />
                  </div>
                  <div className="justify-start align-middle col-9 d-flex">
                    <Link to="/Leads_success">
                      <h6 className="ms-5 text_font text_font3">Success</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 hover hover_d4">
                <div onClick={d4} className="mt-2 mb-2 row cPoin d4 ">
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d3 ms-5"
                      src="./images/leftAroor.png"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d3 ms-5"
                      src="./images/leftAroor_white.png"
                      alt=""
                    />
                  </div>
                  <div className="justify-start align-middle col-9 d-flex">
                    <Link to="/Leads_reject">
                      <h6 className="ms-5 text_font text_font4">Rejected</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link to="/Stock">
          <div className="row">
            <div className="col-12 hover hover_d5">
              <div onClick={d5} className="mt-2 mb-2 row d5">
                <div className=" col-12">
                  <div className=" row cPoin centeraligtn ms-2 me-2">
                    <div className="col-3 end">
                      <img
                        className="diIMG1 diIMG1_d2"
                        src="./images/d2.png"
                        alt=""
                      />
                      <img
                        className="diIMG2 diIMG2_d2"
                        src="./images/d2_white.png"
                        alt=""
                      />
                    </div>
                    <div className="justify-start align-middle col-9 d-flex">
                      <h6 className="text_font text_font5">Current Stock</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/Report">
          <div className="mt-1 row ">
            <div className="col-12 hover hover_d6">
              <div onClick={d6} className="mt-2 mb-2 row d6">
                <div className=" col-12">
                  <div className=" row cPoin centeraligtn ms-2 me-2">
                    <div className="col-3 end">
                      <img
                        className="diIMG1 diIMG1_d3"
                        src="./images/d3.png"
                        alt=""
                      />
                      <img
                        className="diIMG2 diIMG2_d3"
                        src="./images/d3_white.png"
                        alt=""
                      />
                    </div>
                    <div className="justify-start align-middle col-9 d-flex">
                      <h6 className="text_font text_font6">Reports</h6>
                    </div>
                    <div className="col-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="row">
          <div className="col-12 hover hover_seting">
            <div
              onClick={setting}
              className="mt-2 mb-2 row cPoin centeraligtn ms-2 me-2"
            >
              <div className="col-3 end">
                <img className="diIMG1" src="./images/d4.png" alt="" />
                <img className="diIMG2" src="./images/d4_white.png" alt="" />
              </div>
              <div className="justify-start align-middle col-7 d-flex">
                <h6 className="text_font">Settings</h6>
              </div>
              <div className="col-2">
                {/* <img className="mt-2 arrorIMG" src="./images/arror.png" alt="" /> */}
                <img
                  className="mt-3 arrorIMG"
                  src="./images/arror_white.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row hiddnbox2">
          <div className="mb-2 marginsetlef">
            <div className="row">
              <div className="col-12 hover hover_d7">
                <div onClick={d7} className="mt-2 mb-2 row cPoin d7">
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d4 ms-5"
                      src="./images/leftAroor.png"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d4 ms-5"
                      src="./images/leftAroor_white.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <Link to="/Setting_profile">
                      <h6 className="ms-5 text_font text_font7">Profile</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 hover hover_d8">
                <div onClick={d8} className="mt-2 mb-2 row cPoin d8">
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d5 ms-5"
                      src="./images/leftAroor.png"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d5 ms-5"
                      src="./images/leftAroor_white.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <Link to="/Setting_customer">
                      <h6 className="ms-5 text_font8 text_font">Customer</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 hover hover_d9">
                <div onClick={d9} className="mt-2 mb-2 row cPoin d9">
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d6 ms-5"
                      src="./images/leftAroor.png"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d6 ms-5"
                      src="./images/leftAroor_white.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <Link to="/Setting_stock">
                      <h6 className="ms-5 text_font text_font9">Stocks</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 hover hover_d10">
                <div onClick={d10} className="mt-2 mb-2 row cPoin d10">
                  <div className="col-2">
                    <img
                      className="mt-2 leftarrorIMG1 leftarrorIMG1_d7 ms-5"
                      src="./images/leftAroor.png"
                      alt=""
                    />
                    <img
                      className="mt-2 leftarrorIMG2 leftarrorIMG2_d7 ms-5"
                      src="./images/leftAroor_white.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <Link to="/Setting_link">
                      <h6 className="ms-5 text_font text_font10">Links</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 poti_fix">
        <div className="row bg_hed">
          <div className="col-6 indexp cPoin">
            <img
              onClick={manu}
              className="mt-1 img_manu cPoin"
              src="./images/Vector.png"
              alt=""
            />
          </div>
          <div className="col-6 col-md-6 endSET">
            <Dropdown className="me-4">
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="rowler"
              >
                <img
                  className="profileIMG me-1"
                  src={profiledetile.imgUrl}
                  alt=""
                />
                {profiledetile.name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>My Account</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
