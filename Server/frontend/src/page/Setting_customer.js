import "../components/Heder.css";
import "./Setting_customer.css";
import React from "react";
import Heder from "../components/Heder";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";

export default function Setting_customer() {

  const filter = [
    {
      filtername: "Sale Price",
      id: "1",
    },
    {
      filtername: "deposit",
      id: "2",
    },
    {
      filtername: "balance to finance(£)",
      id: "3",
    },
    {
      filtername: "total amount payable(£)",
      id: "4",
    },
    {
      filtername: "baloon payment(£)",
      id: "5",
    },
    {
      filtername: "monthly payment(£)",
      id: "6",
    },
    {
      filtername: "rate",
      id: "7",
    },
    {
      filtername: "start date",
      id: "8",
    },
    {
      filtername: "month of payment(£)",
      id: "9",
    },
    {
      filtername: "settlement figure",
      id: "10",
    },
    {
      filtername: "length of agreement",
      id: "11",
    },
    {
      filtername: "interest rebate",
      id: "12",
    },
    {
      filtername: "valueation",
      id: "13",
    },
    {
      filtername: "equity",
      id: "14",
    },
    {
      filtername: "mileage at start",
      id: "15",
    },
    {
      filtername: "mileage now",
      id: "16",
    },
    {
      filtername: "phone number",
      id: "17",
    },
    {
      filtername: "email",
      id: "18",
    },
    {
      filtername: "post code",
      id: "19",
    },
  ];
  const month_list = [
    {
      name: "January",
    },
    {
      name: "February	",
    },
    {
      name: "March",
    },
    {
      name: "April",
    },
    {
      name: "May",
    },
    {
      name: "June",
    },
    {
      name: "July",
    },
  ];
  const price_range = [
    {
      name: "10000-20000",
    },
    {
      name: "20000-30000	",
    },
    {
      name: "30000-40000	",
    },
    {
      name: "40000-50000	",
    },
  ];

  const costomer_seti_detail = [
    {
      id: "1",
      FIRST_NAME: "Ann Culhane",
      LAST_NAME: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Reg_Number: "5684236526",
      Muleage: "60000 KM",
      Colour: "Red",
      Price: "30000",
      Monthly_payment: "10000",
      Camount_equity: "10000",
    },
    {
      id: "2",
      FIRST_NAME: "Ann Culhane",
      LAST_NAME: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Reg_Number: "5684236526",
      Muleage: "60000 KM",
      Colour: "Red",
      Price: "30000",
      Monthly_payment: "10000",
      Camount_equity: "10000",
    },
    {
      id: "3",
      FIRST_NAME: "Ann Culhane",
      LAST_NAME: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Reg_Number: "5684236526",
      Muleage: "60000 KM",
      Colour: "Red",
      Price: "30000",
      Monthly_payment: "10000",
      Camount_equity: "10000",
    },
    {
      id: "4",
      FIRST_NAME: "Ann Culhane",
      LAST_NAME: "Ann Culhane",
      Make: "Audi",
      Model: "A1",
      Reg_Number: "5684236526",
      Muleage: "60000 KM",
      Colour: "Red",
      Price: "30000",
      Monthly_payment: "10000",
      Camount_equity: "10000",
    },
  ];

  const update = () => {
    const btn01 = document.getElementsByClassName("button01");
    const btn02 = document.getElementsByClassName("button02");
    const table01 = document.getElementsByClassName("table01");
    const table02 = document.getElementsByClassName("table02");
    btn01[0].style.visibility = "hidden";
    btn01[0].style.position = "absolute";
    btn02[0].style.visibility = "visible";
    btn02[0].style.position = "relative";
    table01[0].style.visibility = "hidden";
    table01[0].style.position = "absolute";
    table01[0].style.display = "none";
    table02[0].style.visibility = "visible";
    table02[0].style.position = "relative";
    table02[0].style.display = "block";
  };
  const save = () => {
    const btn01 = document.getElementsByClassName("button01");
    const btn02 = document.getElementsByClassName("button02");
    const table01 = document.getElementsByClassName("table01");
    const table02 = document.getElementsByClassName("table02");
    btn01[0].style.visibility = "visible";
    btn01[0].style.position = "relative";
    btn02[0].style.visibility = "hidden";
    btn02[0].style.position = "absolute";
    table01[0].style.visibility = "visible";
    table01[0].style.position = "relative";
    table01[0].style.display = "block";
    table02[0].style.visibility = "hidden";
    table02[0].style.position = "absolute";
    table02[0].style.display = "none";
  };

  const neww = () => {
    const M_box3 = document.getElementsByClassName("massege_box_stock");
    M_box3[0].style.visibility = "visible";
  };

  const cancel_box = () => {
    const M_box3 = document.getElementsByClassName("massege_box_stock");
    M_box3[0].style.visibility = "hidden";
  };
  const add_stock = () => {};

  const chane_detail = () => {};

  return (
    <div className="bg">
      <div className="hidden_heder_css leftbox_new_page"></div>

      <div className="col-12" >
        <Heder />
      </div>

      {/* Massege BOX 01 ADD */}
      <div className="mt-5 massege_box_stock col-12 col-md-6 offset-md-4">
        <div className="mt-2 mb-2 row ms-2 me-2">
          <div className="col-12">
            <div className="mt-2 row">
              <div>
                <label className="mb-3 font_bold" htmlFor="">
                  Upload excel file
                </label>
                <br />
                <input type="file" />
              </div>
            </div>

            <div className="mt-4 mb-4 row">
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
          <h2 className="mt-4 mb-4">Settings / Customer</h2>
        </div>

        <div className="mt-4 mb-4 row ms-5 me-5">
          <div className="col-10 col-md-6 searchBox">
            <div className="row">
              <div className="mt-1 col-10 alignCenter2">
                <input
                  className="inputSearch"
                  type="text"
                  placeholder=" Search here"
                />
              </div>
              <div className="mt-1 col-2 alignCenter">
                <img src="./images/search.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-2 col-md-6">
            <div className="row">
              <Dropdown className="me-4">
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="filterbox ms-4"
                >
                  <img
                    className="mt-2 mar_le"
                    src="./images/filter.png"
                    alt=""
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="drofdownBox">
                  <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4 alignCenter">
                      <h6 className="me-3">Show</h6>
                    </div>
                  </div>

                  {filter.map((filter) => (
                    <Dropdown.Item href="#/action-1">
                      <div className="row">
                        <div className="col-8">
                          <h6 className="color_blu">{filter.filtername}</h6>
                        </div>
                        <div className="col-4 alignCenter">
                          <Form.Check
                            className='me-2' // prettier-ignore
                            type="checkbox"
                            id={filter.id}
                          />
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="mt-5 mb-5 row tblleboxmargin">
          <div className="col-12 tableBox">
            <div className="mt-4 row ms-2 me-2">
              <div className="mt-1 mb-1 col-6 col-md-2">
                <h6 className="font_bold">Fresh Leads</h6>
              </div>
              <div className="mt-1 mb-1 col-12 col-md-3 solidex">
                <h6>Month</h6>
                <Form.Select
                  aria-label="Default select example"
                  className="size_select fondsixw ms-2"
                >
                  <option>Select Month</option>
                  {month_list.map((month_list) => (
                    <option value={month_list.name}>{month_list.name}</option>
                  ))}
                </Form.Select>
              </div>
              <div className="mt-1 mb-1 col-12 col-md-3 solidex">
                <h6>Price_Range</h6>
                <Form.Select
                  aria-label="Default select example"
                  className="size_select fondsixw ms-2"
                >
                  <option>Price Range</option>
                  {price_range.map((price_range) => (
                    <option value={price_range.name}>{price_range.name}</option>
                  ))}
                </Form.Select>
              </div>

              <div className="mt-3 mb-1 col-12 col-md-4 rowell">
                <div className="margin_set_add row button01">
                  <div
                    onClick={update}
                    className="mt-1 mb-1 addNew_profile all_center me-1 ms-1"
                  >
                    <img src="./images/update.png" alt="" />
                  </div>
                  <div
                    onClick={neww}
                    className="mt-1 mb-1 addNew_profile all_center me-1 ms-1"
                  >
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
                </div>
              </div>
            </div>

            <div className="mt-4 row">
              <div className="col-12">
                <div className="row ms-3 me-3 table01">
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th></th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Reg Number</th>
                        <th>Muleage</th>
                        <th>Colour</th>
                        <th>Price(£)</th>
                        <th>Monthly payment</th>
                        <th>Camount of equity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costomer_seti_detail.map((costomer_seti_detail) => (
                        <tr>
                          <td>{costomer_seti_detail.id}</td>
                          <td>{costomer_seti_detail.FIRST_NAME}</td>
                          <td>{costomer_seti_detail.LAST_NAME}</td>
                          <td>{costomer_seti_detail.Make}</td>
                          <td>{costomer_seti_detail.Model}</td>
                          <td>{costomer_seti_detail.Reg_Number}</td>
                          <td>{costomer_seti_detail.Muleage}</td>
                          <td>{costomer_seti_detail.Colour}</td>
                          <td>{costomer_seti_detail.Price}</td>
                          <td>{costomer_seti_detail.Monthly_payment}</td>
                          <td>{costomer_seti_detail.Camount_equity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <div className="row ms-3 me-3 table02">
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th></th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Reg Number</th>
                        <th>Muleage</th>
                        <th>Colour</th>
                        <th>Price(£)</th>
                        <th>Monthly payment</th>
                        <th>Camount of equity</th>
                        <th className="">
                          <h3 className="with_th_hidden">status_H</h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {costomer_seti_detail.map((costomer_seti_detail) => (
                        <tr>
                          <td>{costomer_seti_detail.id}</td>
                          <td>{costomer_seti_detail.FIRST_NAME}</td>
                          <td>{costomer_seti_detail.LAST_NAME}</td>
                          <td>{costomer_seti_detail.Make}</td>
                          <td>{costomer_seti_detail.Model}</td>
                          <td>{costomer_seti_detail.Reg_Number}</td>
                          <td>{costomer_seti_detail.Muleage}</td>
                          <td>{costomer_seti_detail.Colour}</td>
                          <td>{costomer_seti_detail.Price}</td>
                          <td>{costomer_seti_detail.Monthly_payment}</td>
                          <td>{costomer_seti_detail.Camount_equity}</td>
                          <td className="">
                            <div className="row all_center">
                              <img
                                onClick={chane_detail}
                                className="e_logo2"
                                src="./images/edit_profile.png"
                                alt=""
                              />
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
    </div>
  );
}
