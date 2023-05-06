import "./Setting_stock.css";
import React from "react";
import Heder from "../components/Heder";
// import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";

export default function Setting_stock() {
  const stock_seti_detail = [
    {
      id: "1",
      Lead_name: "Ann Culhane",
      address: "No.21, Colombo",
      model: "A1",
      Reg_Number: "5684236526",
    },
    {
      id: "2",
      Lead_name: "Ann Culhane",
      address: "No.21, Colombo",
      model: "A1",
      Reg_Number: "5684236526",
    },
    {
      id: "3",
      Lead_name: "Ann Culhane",
      address: "No.21, Colombo",
      model: "A1",
      Reg_Number: "5684236526",
    },
    {
      id: "4",
      Lead_name: "Ann Culhane",
      address: "No.21, Colombo",
      model: "A1",
      Reg_Number: "5684236526",
    },
  ];

  const update2 = () => {
    const txt01 = document.getElementsByClassName("text01");
    const txt02 = document.getElementsByClassName("text02");
    const btn01 = document.getElementsByClassName("button01");
    const btn02 = document.getElementsByClassName("button02");
    const table01 = document.getElementsByClassName("table011");
    const table02 = document.getElementsByClassName("table022");
    txt01[0].style.display = "none";
    txt02[0].style.display = "block";
    btn01[0].style.visibility = "hidden";
    btn01[0].style.position = "absolute";
    btn02[0].style.visibility = "visible";
    btn02[0].style.position = "relative";
    table01[0].style.visibility = "hidden";
    table01[0].style.position = "absolute";
    table02[0].style.visibility = "visible";
    table02[0].style.position = "relative";
  };
  const save = () => {
    const txt01 = document.getElementsByClassName("text01");
    const txt02 = document.getElementsByClassName("text02");
    const btn01 = document.getElementsByClassName("button01");
    const btn02 = document.getElementsByClassName("button02");
    const table01 = document.getElementsByClassName("table011");
    const table02 = document.getElementsByClassName("table022");
    txt01[0].style.display = "block";
    txt02[0].style.display = "none";
    btn01[0].style.visibility = "visible";
    btn01[0].style.position = "relative";
    btn02[0].style.visibility = "hidden";
    btn02[0].style.position = "absolute";
    table01[0].style.visibility = "visible";
    table01[0].style.position = "relative";
    table02[0].style.visibility = "hidden";
    table02[0].style.position = "absolute";
  };

  const neww = () => {
    const M_box3 = document.getElementsByClassName("massege_box_stock");
    M_box3[0].style.visibility = "visible";
  };

  const cancel_box = () => {
    const M_box3 = document.getElementsByClassName("massege_box_stock");
    M_box3[0].style.visibility = "hidden";
  };
  const add_stock = () => { };

  const chane_detail = () => { };

  return (
    <div className="bg">
      <Heder />

      {/* Massege BOX 01 ADD */}
      <div className="mt-3 massege_box_stock col-12 col-md-6 offset-md-4">
        <div className="mt-2 mb-2 row ms-2 me-2">
          <div className="col-12">
            <div className="mt-2 row">
              <div>
                <label className="mb-3 font_bold" htmlFor="">
                  Upload excel file
                </label>
                <br />
               
                <label for="file">
                  <div className="uplad_btn poti_ab">
                    <div className="row set_margin_new">
                      <div className="justify-end col-3 d-flex">
                        <img className="up_logo" src="./images/upload.png" alt="" />
                      </div>
                      <div className="col-9">
                        <div className="row">
                          <h6 className="color_blue">Upload File</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" poti_ab ms-5" >
                    <input className="mt-1 ms-4" type="file" id="file" name="file"/>
                  </div>
                </label>

              </div>
            </div>

            <div className="mt-5 mb-3 row">
              <div className="justify-center col-12 d-flex">
                <h3 className='font_bold'>or</h3>
              </div>
            </div>

            <div className="mt-4 row ">
              <div>
                <label className="mb-2" htmlFor="">
                  1st Column name
                </label>
                <InputGroup className="mb-3 bg_coll">
                  <Form.Control
                  className="bg_coll"
                    id="column01"
                    placeholder="1st Column name"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  2st Column name
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    id="column02"
                    className="bg_coll"
                    placeholder="2st Column name"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  3st Column name
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    id="column03"
                    className="bg_coll"
                    placeholder="3st Column name"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className="mb-2" htmlFor="">
                  4st Column name
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    id="column04"
                    className="bg_coll"
                    placeholder="4st Column name"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>

            <div className="mb-5 row">
              <div>
                <img className='add_colomn' src="./images/add_colomn.png" alt="" />
              </div>
            </div>

            <div className="mt-2 mb-2 row">
              <div className="justify-end col-6 d-flex">
                <div onClick={cancel_box} className="BTN_01 all_center">
                  <h2 className="btn_text">Cancle</h2>
                </div>
              </div>
              <div className="justify-start col-6 d-flex">
                <div onClick={add_stock} className="BTN_02 all_center">
                  <h2 className="btn_text">Add Stocks</h2>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="setbody">
        <div className="mt-5 row ms-5">
          <h2 className="mt-4 mb-4">Settings / <span className='small_font'>Stocks</span></h2>
        </div>

        <div className="mt-4 mb-5 row tblleboxmargin">
          <div className="col-12 ">
            <div className="mt-4 row ms-2 me-2">
              <div className="col-6">
                <h3 className='mt-2 font_bold text01'>Available cars </h3>
                <h3 className='mt-2 font_bold text02'>Update </h3>
              </div>

              <div className="col-6">
                <div className="margin_set_add row button01">
                  <div onClick={update2} className="mt-1 mb-1 addNew_profile all_center me-1 ms-1">
                    <img src="./images/update.png" alt="" />
                  </div>
                  <div onClick={neww} className="mt-1 mb-1 addNew_profile all_center me-1 ms-1">
                    <img src="./images/new.png" alt="" />
                  </div>
                </div>
                <div className="margin_set_add row button02">
                  <div
                    onClick={save}
                    className="mt-1 mb-1 addNew_profile all_center me-1 ms-1"
                  >
                    <img src="./images/save.png" alt="" />
                  </div>
                  <div

                    className="mt-1 mb-1 addNew_profile_dark all_center me-1 ms-1"
                  >
                    <img src="./images/new_dark.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 row tableBox">
              <div>
                <div className="row ms-3 me-3 table011">
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>Lead name</th>
                        <th>Address</th>
                        <th>Model</th>
                        <th>Reg Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stock_seti_detail.map((stock_seti_detail) => (
                        <tr>
                          <td className="tx_bold">{stock_seti_detail.Lead_name}</td>
                          <td>{stock_seti_detail.address}</td>
                          <td>{stock_seti_detail.model}</td>
                          <td>{stock_seti_detail.Reg_Number}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <div className="row ms-3 me-3 table022">
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>Lead name</th>
                        <th>Address</th>
                        <th>Model</th>
                        <th>Reg Number</th>
                        <th className=''>
                          <h3 className='with_th_hidden'>status_H</h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {stock_seti_detail.map((stock_seti_detail) => (
                        <tr>
                          <td className="tx_bold">{stock_seti_detail.Lead_name}</td>
                          <td>{stock_seti_detail.address}</td>
                          <td>{stock_seti_detail.model}</td>
                          <td>{stock_seti_detail.Reg_Number}</td>
                          <td className=''>
                            <div className="row all_center">
                              <img onClick={chane_detail} className='e_logo2' src="./images/edit_profile.png" alt="" />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
