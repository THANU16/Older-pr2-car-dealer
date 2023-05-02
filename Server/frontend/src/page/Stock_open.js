import "./Stock_open.css";
import React from "react";
import Heder from "../components/Heder";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Carousel } from 'react-carousel-minimal';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Stock_open() {

  const Stock_detail = {
    Brand: "Audi",
    Model: "A1",
    Edition: "S Line",
    Manufacture: "2019",
    Condition: "Used",
    Transmission: "Automatic",
    Body_type: "",
    Fuel_type: "Petol",
    Engine_capacity: "1500cc",
    Mileage: "91000km",
  };

  const data = [
    {
      image: "./images/car.png"
    },
    {
      image: "./images/car.png"
    },
    {
      image: "./images/car.png"
    },
    {
      image: "./images/car.png"
    },
  ];
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  const annual_mileage = [
    {
      name: "Annual 01"
    },
    {
      name: "Annual 02"
    },
    {
      name: "Annual 03"
    },
  ];
  const repayment_term = [
    {
      name: "Repayment 01"
    },
    {
      name: "Repayment 02"
    },
    {
      name: "Repayment 03"
    },
  ];

  var visi = 0;
  const continu01 = () => {
    if (visi === 0) {
      const box1 = document.getElementsByClassName("BOXHidde1");
      const box2 = document.getElementsByClassName("BOXHidde2");
      box1[0].style.position = "absolute";
      box1[0].style.visibility = "hidden";
      box2[0].style.position = "relative";
      box2[0].style.visibility = "visible";
      visi = visi + 1;
    }
  };
  const continu02 = () => {
    if (visi === 1) {
      const box3 = document.getElementsByClassName("BOXHidde3");
      box3[0].style.position = "relative";
      box3[0].style.visibility = "visible";
    }
  };
  const back = () => {
    if (visi === 1) {
      const box1 = document.getElementsByClassName("BOXHidde1");
      const box2 = document.getElementsByClassName("BOXHidde2");
      const box3 = document.getElementsByClassName("BOXHidde3");
      box1[0].style.position = "relative";
      box1[0].style.visibility = "visible";
      box2[0].style.position = "absolute";
      box2[0].style.visibility = "hidden";
      box3[0].style.position = "absolute";
      box3[0].style.visibility = "hidden";
      visi = visi - 1;
    }
  };

  const PCD_FINANCE = {
    Main_PCD_FINANCE:"£200.50",
    First_Payment: "£252.30",
    Monthly_Payment: "£252.30",
    Deposit_Amount: "£1462.99",
    Final_Payment: "£9,456.94",
    Total_Amount_Payable: "£23,456.94",
    Cash_Price: "£18,456.94",
    Term_Length: "48 months",
    Amount_of_Credit: "£3,156.94",
    Option_to_Purchase_Fee: "£10.00",
    Representative_APR: "5.9%",
    Rate_of_Interest: "8.88% Fixed",
  };
  const HP_FINANCE = {
    Main_HP_FINANCE:"£400.50",
    First_Payment: "£252.30",
    Monthly_Payment: "£252.30",
    Deposit_Amount: "£1462.99",
    Final_Payment: "£9,456.94",
    Total_Amount_Payable: "£23,456.94",
    Cash_Price: "£18,456.94",
    Term_Length: "48 months",
    Amount_of_Credit: "£3,156.94",
    Option_to_Purchase_Fee: "£10.00",
    Representative_APR: "5.9%",
    Rate_of_Interest: "8.88% Fixed",
  };





  return (
    <div className="bg">
      <Heder />
      <div className="setbody">
        <div className="mt-5 row ms-5">
          <h2 className="mt-4 mb-4">Current Stock</h2>
        </div>

        <div className="mb-4 row">
          <div className="col-12">

            <div className="mt-2 row">
              <div className="col-md-6 col-12">

                <div className="mt-2 mb-2 row ms-2 me-2 witeboxstok">
                  <div className="col-12 col-md-8">
                    <div className="mt-4 me-2 ms-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt_bod'>Details</h5>
                      </div>
                      <div className="col-6"></div>
                    </div>

                    <div className="mt-4 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Brand</h5>
                      </div>
                      <div className="col-6">
                        <h5>: {Stock_detail.Brand}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Model</h5>
                      </div>
                      <div className="col-6">
                        <h5>: {Stock_detail.Model}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Trim / Edition</h5>
                      </div>
                      <div className="col-6">
                        <h5>: {Stock_detail.Edition}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Year of Manufacture</h5>
                      </div>
                      <div className="col-6">
                        <h5>: {Stock_detail.Manufacture}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Condition</h5>
                      </div>
                      <div className="col-6">
                        <h5>: {Stock_detail.Condition}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Transmission</h5>
                      </div>
                      <div className="col-6">
                        <h5>: {Stock_detail.Transmission}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Body type</h5>
                      </div>
                      <div className="col-6">
                        <h5>: {Stock_detail.Body_type}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Fuel type</h5>
                      </div>
                      <div className="col-6">
                        <h5>: {Stock_detail.Fuel_type}</h5>
                      </div>
                    </div>
                    <div className="mt-2 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Engine capacity</h5>
                      </div>
                      <div className="col-6">
                        <h5>: {Stock_detail.Engine_capacity}</h5>
                      </div>
                    </div>
                    <div className="mt-2 mb-4 ms-2 me-2 row">
                      <div className="col-6">
                        <h5 className='div_box_txt'>Mileage</h5>
                      </div>
                      <div className="col-6">
                        <h5>: {Stock_detail.Mileage}</h5>
                      </div>
                    </div>



                  </div>
                  <div className="justify-center col-12 col-md-4 d-flex">
                    <Carousel
                      data={data}
                      time={2000}
                      width="250px"
                      height="200px"
                      captionStyle={captionStyle}
                      radius="10px"
                      slideNumber={false}
                      slideNumberStyle={slideNumberStyle}
                      captionPosition="bottom"
                      automatic={false}
                      dots={false}
                      pauseIconColor="white"
                      pauseIconSize="40px"
                      slideBackgroundColor="darkgrey"
                      slideImageFit="cover"
                      thumbnails={true}
                      thumbnailWidth="50px"
                      style={{
                        textAlign: "center",
                        // maxWidth: "850px",
                        // maxHeight: "500px",
                        margin: "10px auto",
                      }}
                    />
                  </div>
                </div>

              </div>
              <div className="col-md-6 col-12">

                {/* BOX 01 */}
                <div id="BOX1" className="mt-2 mb-2 BOXHidde1 row ms-2 me-2 witeboxstok">
                  <div className="col-12">
                    <div className="mt-3 row ms-2 me-2">
                      <h3 className='blach_bolt_txt'>About the vehicle</h3>
                    </div>
                    <div className="mt-4 row me-2 ms-2">
                      <h3 className='blach_bolt_txt2'>Vehicle Type</h3>
                    </div>
                    <div className="mt-4 row">
                      <div className="col-6 all_center">
                        <h2>New</h2>
                        <Form.Check className='me-2 ms-2' // prettier-ignore
                          type="checkbox"
                          id="New"
                        />
                      </div>
                      <div className="col-6 all_center">
                        <h2>Used</h2>
                        <Form.Check className='me-2 ms-2' // prettier-ignore
                          type="checkbox"
                          id="used"
                        />
                      </div>
                    </div>
                    <div className="mt-4 row me-2 ms-2">
                      <h3 className='blach_bolt_txt2'>What is the registration?</h3>
                    </div>
                    <div className="mt-4 row all_center">
                      <div className="inputbox">
                        <div className="row">
                          <div className="col-2 full_center">
                            <h3 className='mt-1 gb_txt'>GB</h3>
                          </div>
                          <div className="col-6">
                            <input className='imput' type="text" />
                          </div>
                          <div className="full_center col-4">
                            <h3 className='mt-2 look_txt'>LOOKUP REG</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 ms-5 row">
                      <a href="#know"><p className='underline ms-5'>I don’t know registration?</p></a>
                    </div>
                    <div className="justify-center mt-5 mb-4 row d-flex">
                      <div onClick={continu01} className="btn_continuw all_center">
                        <img src="./images/continue.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOX 02 */}
                <div id="BOX2" className="mt-2 mb-2 row ms-2 BOXHidde2 me-2 witeboxstok">
                  <div className="col-12">
                    <div className="mt-2 row ms-2 me-2">
                      <h3 className='blach_bolt_txt'>Finance details</h3>
                    </div>

                    <div className="mt-2 row ms-2 me-2">
                      <div className="col-6">
                        <label className='mb-2' htmlFor="">Vehicle price</label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            id="ve_price"
                            placeholder="0"
                            aria-label="0"
                            aria-describedby="basic-addon2"
                          />
                          <InputGroup.Text id="basic-addon2">(£)</InputGroup.Text>
                        </InputGroup>
                      </div>
                      <div className="col-6">
                        <label className='mb-2' htmlFor="">Deposit amount</label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            id="de_amount"
                            placeholder="0"
                            aria-label="0"
                            aria-describedby="basic-addon2"
                          />
                          <InputGroup.Text id="basic-addon2">(£)</InputGroup.Text>
                        </InputGroup>
                      </div>
                    </div>

                    <div className="row ms-2 me-2">
                      <div className="col-6">
                        <label className='mb-2' htmlFor="">Finance amount</label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            id="fi_amount"
                            placeholder="0"
                            aria-label="0"
                            aria-describedby="basic-addon2"
                          />
                          <InputGroup.Text id="basic-addon2">(£)</InputGroup.Text>
                        </InputGroup>
                      </div>
                      <div className="col-6">
                        <label className='mb-2' htmlFor="">Annual mileage</label>
                        <Form.Select aria-label="Default select example" id="selectCategory" name="selectCategory">
                          <option>Please select</option>
                          {annual_mileage.map((annual_mileage) => (
                            <option value={annual_mileage.name}>{annual_mileage.name}</option>
                          ))}
                        </Form.Select>
                      </div>
                    </div>
                    <div className=" row ms-2 me-2">
                      <div className="col-6">
                        <label className='mb-2' htmlFor="">Repayment term</label>
                        <Form.Select aria-label="Default select example" id="selectCategory" name="selectCategory">
                          <option>Please select</option>
                          {repayment_term.map((repayment_term) => (
                            <option value={repayment_term.name}>{repayment_term.name}</option>
                          ))}
                        </Form.Select>
                      </div>
                    </div>

                    <div className="justify-center mt-3 mb-3 row d-flex">
                      <div onClick={continu02} className="btn_continuw all_center">
                        <img src="./images/continue.png" alt="" />
                      </div>
                      <div className="mt-1 all_center">
                        <p onClick={back} className='underline'>Back</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-2 row BOXHidde3">
              <div className="col-md-6 col-12">
                <div className="mt-2 mb-2 row ms-2 me-2 witeboxstok">
                  
                  <div className="col-12">
                    <div className="mt-2 mb-2 row ms-2 me-2">
                      <div className="col-12">

                        <div className="row">
                          <div className="justify-start col-6 d-flex">
                            <h2>PCD FINANCE</h2>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h2>{PCD_FINANCE.Main_PCD_FINANCE}</h2>
                          </div>
                        </div>
                        <div className="mt-1 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='underline tx_small'>Why choose PCD FINANCE?</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_small'>PER MONTH</h4>
                          </div>
                        </div>

                        <div className="mt-4 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>First Payment</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.First_Payment}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>47 Monthly Payment of</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Monthly_Payment}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Deposit Amount</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Deposit_Amount}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Final Payment</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Final_Payment}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Total Amount Payable</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Total_Amount_Payable}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Cash Price</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Cash_Price}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Term Length</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Term_Length}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Amount of Credit</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Amount_of_Credit}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Option to Purchase Fee</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Option_to_Purchase_Fee}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Representative APR</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Representative_APR}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Rate of Interest</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{PCD_FINANCE.Rate_of_Interest}</h4>
                          </div>
                        </div>

                        <div className="mt-3 mb-3 row all_center">
                          <div className="finaceBTN all_center">
                            <img src="./images/finace_pcd.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-6 col-12">
              <div className="mt-2 mb-2 row ms-2 me-2 witeboxstok">
                  
                  <div className="col-12">
                    <div className="mt-2 mb-2 row ms-2 me-2">
                      <div className="col-12">

                        <div className="row">
                          <div className="justify-start col-6 d-flex">
                            <h2>HP FINANCE</h2>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h2>{HP_FINANCE.Main_HP_FINANCE}</h2>
                          </div>
                        </div>
                        <div className="mt-1 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='underline tx_small'>Why choose HP FINANCE?</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_small'>PER MONTH</h4>
                          </div>
                        </div>

                        <div className="mt-4 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>First Payment</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.First_Payment}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>47 Monthly Payment of</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Monthly_Payment}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Deposit Amount</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Deposit_Amount}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Final Payment</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Final_Payment}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Total Amount Payable</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Total_Amount_Payable}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Cash Price</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Cash_Price}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Term Length</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Term_Length}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Amount of Credit</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Amount_of_Credit}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Option to Purchase Fee</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Option_to_Purchase_Fee}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Representative APR</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Representative_APR}</h4>
                          </div>
                        </div>
                        <div className="mt-2 row">
                          <div className="justify-start col-6 d-flex">
                            <h4 className='tx_data_fiance'>Rate of Interest</h4>
                          </div>
                          <div className="justify-end col-6 d-flex">
                            <h4 className='tx_data_fiance'>{HP_FINANCE.Rate_of_Interest}</h4>
                          </div>
                        </div>

                        <div className="mt-3 mb-3 row all_center">
                          <div className="finaceBTN all_center">
                            <img src="./images/finace_hp.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
