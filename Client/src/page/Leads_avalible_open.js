import './Leads_avalible_open.css';
import React from 'react'
import Heder from "../components/Heder";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


export default function Leads_avalible_open() {
    const main_details = {
        Name: "Daniel",
        Make: "Chevrolet",
        Model: "Camry",
        Reg_Number: "JK84KZA",
        Mileage_Now: "91000km",
        Start_Date: "22 Jan 2021",
        Lenth_Agreement: "36",
        Interest_Rate: "10%",
        Months_Agreement: "27",

        Sale_Price: "2995",
        Deposit: "0",
        Balance_Finance: "2995",
        Monthly_Payment: "66.56",
        Baloon_Payment: "1048.53",
        Estimated_Value: "18500",
        Settlement_Figur: "599",
        Equity: "16965.06",

        p_number: "733242334",
        email: "abc@gmail.com",
    };
    const table_Avalible_op = [
        {
            id: "1",
            L_name: "Ann Culhane",
            address: "No.21, Colombo",
            Model: "A1",
            reg_Number: "5684236526",
            depocit: "600",
        },
        {
            id: "2",
            L_name: "Ann Culhane",
            address: "No.21, Colombo",
            Model: "A1",
            reg_Number: "5684236526",
            depocit: "600",
        },
        {
            id: "3",
            L_name: "Ann Culhane",
            address: "No.21, Colombo",
            Model: "A1",
            reg_Number: "5684236526",
            depocit: "600",
        },
        {
            id: "4",
            L_name: "Ann Culhane",
            address: "No.21, Colombo",
            Model: "A1",
            reg_Number: "5684236526",
            depocit: "600",
        },
    ];


    return (
        <div className='bg'>
            <Heder />
            <div className='mt-5 setbody'>
                <div className='mt-4 row ms-5'>
                    <h2>Specific lead page</h2>
                </div>

                <div className='mt-4 row'>
                    <div className='mt-5 mb-5 center_a_box'>
                        <div className='justify-center mt-2 row d-flex'>
                            <div className='col-12 col-md-6'>
                                <div className='mb-3 row me-2 ms-2'>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Name</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Name}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Make</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Make}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Model</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Model}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Reg Number</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Reg_Number}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Mileage Now</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Mileage_Now}</h3>
                                            </div>
                                        </div>

                                        <div className='mt-5 row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Start Date</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Start_Date}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Lenth Of Agreement</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Lenth_Agreement}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Interest Rate</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Interest_Rate}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Months Into Agreement</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Months_Agreement}</h3>
                                            </div>
                                        </div>

                                        <div className='mt-5 row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Phone Number</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.p_number}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Email</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.email}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='mb-2 row me-2 ms-2'>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Sale Price</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Sale_Price}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Deposit</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Deposit}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Balance To Finance</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Balance_Finance}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Monthly Payment</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Monthly_Payment}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Baloon Payment</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Baloon_Payment}</h3>
                                            </div>
                                        </div>

                                        <div className='mt-5 row '>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Estimated Value</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Estimated_Value}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Settlement Figur</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Settlement_Figur}</h3>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <h3 className='listionname'>• Equity</h3>
                                            </div>
                                            <div className='col-6'>
                                                <h3 className='listionname2'>: {main_details.Equity}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-4 mb-4 row tblleboxmargin'>
                    <div className='col-12 '>

                        <div className='mt-4 row row_width ms-2 me-2'>
                            <div className='col-4 col-md-6'>
                                <h6 className="tx_bold">Available cars</h6>
                            </div>
                            <div className='col-4 col-md-3 rowell'>

                            </div>
                            <div className='col-4 col-md-3 rowell'>

                            </div>
                        </div>


                        <div className='mt-4 row tableBox'>
                            <div>
                                <div className='row ms-3 me-3'>

                                    <Table bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Lead name</th>
                                                <th>Address</th>
                                                <th>Model</th>
                                                <th>Reg Number</th>
                                                <th>Deposit($)</th>
                                                <th>Select</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {table_Avalible_op.map((table_Avalible_op) => (
                                                <tr>
                                                    <td>{table_Avalible_op.L_name}</td>
                                                    <td>{table_Avalible_op.address}</td>
                                                    <td>{table_Avalible_op.Model}</td>
                                                    <td>{table_Avalible_op.reg_Number}</td>
                                                    <td>{table_Avalible_op.depocit}</td>
                                                    <td>
                                                        <Form.Check className='ms-3' // prettier-ignore
                                                            type="checkbox"
                                                            id={table_Avalible_op.id}
                                                        />
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

                <div className='mt-4 row'>
                    <div className='mt-5 mb-5 center_a_box'>
                        <div className='mt-3 mb-3 row ms-3'>
                            <h5 className="tx_bold">Add Note</h5>
                        </div>
                        <textarea className='textAria' name="" id="" cols="30" rows="10" placeholder='      Type here.....'></textarea>
                        <div className='justify-end mt-3 mb-3 row d-flex me-3'>
                            <div className='add_btn'>
                                <h5 className='tx_white'>Add</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-5 mb-5 all_center ms-5 row'>
                    <div className='col-6 col-md-3'>
                        <h3 className=''>If you are selected some cars,</h3>
                    </div>
                    <div className='col-6 col-md-9'>
                        <div className=' btn_mail'>
                            <p>Send an email</p>
                        </div>
                    </div>

                </div>
                <div className='mt-5 mb-5 all_center row'>
                    <div className='justify-end mt-3 col-6 d-flex'>
                        <div className='all_center btn_deal2'>
                            <p>Deal Rejected</p>
                        </div>
                    </div>
                    <div className='justify-start mt-3 col-6 d-flex'>
                        <div className='all_center btn_deal'>
                            <p>Deal Done</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

