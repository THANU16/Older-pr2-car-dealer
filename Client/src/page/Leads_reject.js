import './Leads_reject.css';
import React from 'react'
import Heder from "../components/Heder";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


export default function Leads_reject() {
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
    const Leads_reject = [
        {
            id: "1",
            f_name: "Ann Culhane",
            L_name: "Ann Culhane",
            Make: "Audi",
            Model: "A1",
            reg_Number: "5684236526",
            muleage: "60000 KM",
            Colour: "Red",
            Price: "20000",
            m_payment: "10000",
            equity: "10000",
        },
        {
            id: "2",
            f_name: "Ann Culhane",
            L_name: "Ann Culhane",
            Make: "Audi",
            Model: "A1",
            reg_Number: "5684236526",
            muleage: "70000 KM",
            Colour: "Red",
            Price: "40000",
            m_payment: "20000",
            equity: "20000",
        },
        {
            id: "3",
            f_name: "Ann Culhane",
            L_name: "Ann Culhane",
            Make: "Audi",
            Model: "A1",
            reg_Number: "5684236526",
            muleage: "30000 KM",
            Colour: "Red",
            Price: "20000",
            m_payment: "10000",
            equity: "10000",
        },
        {
            id: "4",
            f_name: "Ann Culhane",
            L_name: "Ann Culhane",
            Make: "Audi",
            Model: "A1",
            reg_Number: "5684236526",
            muleage: "60000 KM",
            Colour: "Red",
            Price: "30000",
            m_payment: "20000",
            equity: "20000",
        },
    ];
    const month_list = [
        {
            name: "January"
        },
        {
            name: "February	"
        },
        {
            name: "March"
        },
        {
            name: "April"
        },
        {
            name: "May"
        },
        {
            name: "June"
        },
        {
            name: "July"
        },
    ];
    const price_range = [
        {
            name: "10000-20000"
        },
        {
            name: "20000-30000	"
        },
        {
            name: "30000-40000	"
        },
        {
            name: "40000-50000	"
        },
    ];

    return (
        <div className='bg'>
            <Heder />
            <div className='setbody'>
                <div className='mt-4 row ms-5'>
                    <h2>Our Leads - Reject</h2>
                </div>
                <div className='mt-5 row ms-5 me-5'>
                    <div className='col-10 col-md-6 searchBox'>
                        <div className='row'>
                            <div className='mt-1 col-10 alignCenter2'>
                                <input className='inputSearch' type="text" placeholder=' Search here' />
                            </div>
                            <div className='mt-1 col-2 alignCenter'>
                                <img src="./images/search.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-2 col-md-6'>
                        <div className='row'>
                            <Dropdown className='me-4'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="filterbox ms-4">
                                    <img className='mt-2 mar_le' src="./images/filter.png" alt="" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='drofdownBox'>
                                    <div className='row'>
                                        <div className='col-8'></div>
                                        <div className='col-4 alignCenter'>
                                            <h6 className='me-3'>Show</h6>
                                        </div>
                                    </div>

                                    {filter.map((filter) => (
                                        <Dropdown.Item href="#/action-1">
                                            <div className='row'>
                                                <div className='col-8'>
                                                    <h6 className='color_blu'>{filter.filtername}</h6>
                                                </div>
                                                <div className='col-4 alignCenter'>
                                                    <Form.Check className='me-2' // prettier-ignore
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
                <div className='mt-4 mb-4 row tblleboxmargin'>
                    <div className='col-12 tableBox'>

                        <div className='mt-4 row row_width ms-2 me-2'>
                            <div className='col-4 col-md-6'>
                                <h6>Select one and view more</h6>
                            </div>
                            <div className='col-4 col-md-3 rowell'>
                                <h6>Month</h6>
                                <Form.Select aria-label="Default select example" className='size_select fondsixw ms-2'>
                                    <option>Select Month</option>
                                    {month_list.map((month_list) => (
                                        <option value={month_list.name}>{month_list.name}</option>
                                    ))}

                                </Form.Select>
                            </div>
                            <div className='col-4 col-md-3 rowell'>
                                <h6>Price_Range</h6>
                                <Form.Select aria-label="Default select example" className='size_select fondsixw ms-2'>
                                    <option>Price Range</option>
                                    {price_range.map((price_range) => (
                                        <option value={price_range.name}>{price_range.name}</option>
                                    ))}
                                </Form.Select>
                            </div>
                        </div>

                        <div className='mt-4 row'>
                            <div>
                                <div className='row ms-3 me-3'>

                                    <Table bordered hover>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Make</th>
                                                <th>Model</th>
                                                <th>Reg Number</th>
                                                <th>muleage</th>
                                                <th>Colour</th>
                                                <th>Price(£)</th>
                                                <th>monthly payment</th>
                                                <th>camount of equity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Leads_reject.map((Leads_reject) => (
                                                <tr>
                                                    <td>{Leads_reject.id}</td>
                                                    <td>{Leads_reject.f_name}</td>
                                                    <td>{Leads_reject.L_name}</td>
                                                    <td>{Leads_reject.Make}</td>
                                                    <td>{Leads_reject.Model}</td>
                                                    <td>{Leads_reject.reg_Number}</td>
                                                    <td>{Leads_reject.muleage}</td>
                                                    <td>{Leads_reject.Colour}</td>
                                                    <td>{Leads_reject.Price}</td>
                                                    <td>{Leads_reject.m_payment}</td>
                                                    <td>{Leads_reject.equity}</td>
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
    )
}

