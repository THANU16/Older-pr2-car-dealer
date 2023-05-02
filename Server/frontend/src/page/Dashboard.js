import './Dashboard.css';
import React from 'react'
import Heder from "../components/Heder";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


export default function Dashboard() {
    const dash_detail = {
        lead_month: "125",
        lead_total: "150",
        profit_total: "32570",
    };
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
    const table_dashbord = [
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
    const table_dashbord2 = [
        {
            id: "1",
            f_name: "Ann Culhane",
            L_name: "Ann Culhane",
            Make: "Audi",
            Model: "A1",
            reg_Number: "5684236526",
            Sa_price: "2995",
            deposit: "0",
            ba_finance: "2995",
            t_amount: "3444.25",
            Blaoo_payment: "1048.25",
            m_payment: "10000",
            rate: "1.15",
            sta_date: "22 Jan 2021",
            m_of_payment: "27",
            figure: "600",
            ageement: "36",
            bebate: "36",
            valueation: "18500",
            equity: "15534.94",
            Milege_start: "1534.94",
            Milege_now: "46575",
            phone: "07237758578",
            email: "ann@gmail.com",
            p_code: "HG1 5HR",
        },
        {
            id: "2",
            f_name: "Ann Culhane",
            L_name: "Ann Culhane",
            Make: "Audi",
            Model: "A1",
            reg_Number: "5684236526",
            Sa_price: "2995",
            deposit: "0",
            ba_finance: "2995",
            t_amount: "3444.25",
            Blaoo_payment: "1048.25",
            m_payment: "10000",
            rate: "1.15",
            sta_date: "22 Jan 2021",
            m_of_payment: "27",
            figure: "600",
            ageement: "36",
            bebate: "36",
            valueation: "18500",
            equity: "15534.94",
            Milege_start: "1534.94",
            Milege_now: "46575",
            phone: "07237758578",
            email: "ann@gmail.com",
            p_code: "HG1 5HR",
        },
        {
            id: "3",
            f_name: "Ann Culhane",
            L_name: "Ann Culhane",
            Make: "Audi",
            Model: "A1",
            reg_Number: "5684236526",
            Sa_price: "2995",
            deposit: "0",
            ba_finance: "2995",
            t_amount: "3444.25",
            Blaoo_payment: "1048.25",
            m_payment: "10000",
            rate: "1.15",
            sta_date: "22 Jan 2021",
            m_of_payment: "27",
            figure: "600",
            ageement: "36",
            bebate: "36",
            valueation: "18500",
            equity: "15534.94",
            Milege_start: "1534.94",
            Milege_now: "46575",
            phone: "07237758578",
            email: "ann@gmail.com",
            p_code: "HG1 5HR",
        },
        {
            id: "4",
            f_name: "Ann Culhane",
            L_name: "Ann Culhane",
            Make: "Audi",
            Model: "A1",
            reg_Number: "5684236526",
            Sa_price: "2995",
            deposit: "0",
            ba_finance: "2995",
            t_amount: "3444.25",
            Blaoo_payment: "1048.25",
            m_payment: "10000",
            rate: "1.15",
            sta_date: "22 Jan 2021",
            m_of_payment: "27",
            figure: "600",
            ageement: "36",
            bebate: "36",
            valueation: "18500",
            equity: "15534.94",
            Milege_start: "1534.94",
            Milege_now: "46575",
            phone: "07237758578",
            email: "ann@gmail.com",
            p_code: "HG1 5HR",
        },
    ];

    return (
        <div className='bg'>
            <Heder />
            <div className='setbody'>
                <div className='mt-4 row ms-5 margin_upset'>
                    <h2>Our Leads</h2>
                    <div className='col-12'>
                        <div className='row center_justify'>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='width1'>
                                        <h6 className='mt-2 welcom_text'>Welcome</h6>
                                    </div>
                                    <div className='width1'>
                                        <h6 className='mt-2 color_ger'>David.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-5 mb-5 row'>
                    <div className='width_set_dash'>
                        <div className='row margin_du'>
                            <div className='mt-1 col-12 col-md-4 phone_center'>
                                <div className='row bg_white me-1'>
                                    <div className='mb-4 m col-12'>
                                        <div className='row'>
                                            <div className='dcenter col-6'>
                                                <h2>{dash_detail.lead_month}</h2>
                                            </div>
                                            <div className='justify-end col-6 d-flex'>
                                                <img src="./images/dash1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='ms-2 col-12 d-flex'>
                                                <h3>Leads generated this month</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-1 col-12 phone_center col-md-4'>
                                <div className='row bg_white me-1'>
                                    <div className='mb-4 m col-12'>
                                        <div className='row'>
                                            <div className='dcenter col-6'>
                                                <h2>{dash_detail.lead_total}</h2>
                                            </div>
                                            <div className='justify-end col-6 d-flex'>
                                                <img src="./images/dash2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='ms-2 col-12 d-flex'>
                                                <h3>Leads generated in total</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-1 phone_center col-12 col-md-4'>
                                <div className='row bg_white me-1'>
                                    <div className='mb-4 m col-12'>
                                        <div className='row'>
                                            <div className='dcenter col-6'>
                                                <h2 className='green_text'>£ {dash_detail.profit_total}</h2>
                                            </div>
                                            <div className='justify-end col-6 d-flex'>
                                                <img src="./images/dash3.png" alt="" />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='ms-2 col-12 d-flex'>
                                                <h3>Estimated profit in total</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-4 row tblleboxmargin'>
                    <div className='col-12 tableBox'>

                        <div className='mt-4 row row_width ms-2 me-2'>
                            <div className='col-4 col-md-6'>
                                <h6>Fresh Leads</h6>
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
                            <div className='justify-start col-4 col-md-3 d-flex'>
                                <div className='row margin_set_dash_fil'>
                                    <Dropdown className='me-4'>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="filterbox ms-4">
                                            <img className='mt-2 mar_le' src="./images/filter.png" alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='drofdownBox22'>
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
                                                <th>Price(£)</th>
                                                <th>monthly payment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {table_dashbord.map((table_dashbord) => (
                                                <tr>
                                                    <td>{table_dashbord.id}</td>
                                                    <td>{table_dashbord.f_name}</td>
                                                    <td>{table_dashbord.L_name}</td>
                                                    <td>{table_dashbord.Make}</td>
                                                    <td>{table_dashbord.Model}</td>
                                                    <td>{table_dashbord.reg_Number}</td>
                                                    <td>{table_dashbord.muleage}</td>
                                                    <td>{table_dashbord.Price}</td>
                                                    <td>{table_dashbord.m_payment}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div className='mt-5 mb-5 row tblleboxmargin'>
                    <div className='col-12 tableBox'>

                        <div className='mt-4 row row_width ms-2 me-2'>
                            <div className='col-4 col-md-6'>
                                <h6></h6>
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
                            <div className='justify-start col-4 col-md-3 d-flex'>
                                <div className='row margin_set_dash_fil'>
                                    <Dropdown className='me-4'>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="filterbox ms-4">
                                            <img className='mt-2 mar_le' src="./images/filter.png" alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='drofdownBox22'>
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

                        <div className='mt-4 row'>
                            <div>
                                <div className='row ms-3 me-3'>

                                    <Table bordered hover className='table with_table'>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Make</th>
                                                <th>Model</th>
                                                <th>Reg Number</th>
                                                <th>Sale Price</th>
                                                <th>Deposit</th>
                                                <th>Balance to Finance(£)</th>
                                                <th>Total amount Payable(£)(£)</th>
                                                <th>Baloon Payment(£)(£)</th>
                                                <th>Monthly Payment</th>
                                                <th>Rate</th>
                                                <th>Start Date</th>
                                                <th>Month of Payment(£)</th>
                                                <th>Settlement Figure</th>
                                                <th>Length of Agreement</th>
                                                <th>Interest Rebate</th>
                                                <th>Valueation</th>
                                                <th>Equity</th>
                                                <th>Mileage at Start</th>
                                                <th>Mileage Now</th>
                                                <th>Phone Number</th>
                                                <th>Email</th>
                                                <th>Post Code</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {table_dashbord2.map((table_dashbord2) => (
                                                <tr>
                                                    <td>{table_dashbord2.id}</td>
                                                    <td>{table_dashbord2.f_name}</td>
                                                    <td>{table_dashbord2.L_name}</td>
                                                    <td>{table_dashbord2.Make}</td>
                                                    <td>{table_dashbord2.Model}</td>
                                                    <td>{table_dashbord2.reg_Number}</td>
                                                    <td>{table_dashbord2.Sa_price}</td>
                                                    <td>{table_dashbord2.deposit}</td>
                                                    <td>{table_dashbord2.ba_finance}</td>
                                                    <td>{table_dashbord2.t_amount}</td>
                                                    <td>{table_dashbord2.Blaoo_payment}</td>
                                                    <td>{table_dashbord2.m_payment}</td>
                                                    <td>{table_dashbord2.rate}</td>
                                                    <td>{table_dashbord2.sta_date}</td>
                                                    <td>{table_dashbord2.m_of_payment}</td>
                                                    <td>{table_dashbord2.figure}</td>
                                                    <td>{table_dashbord2.ageement}</td>
                                                    <td>{table_dashbord2.bebate}</td>
                                                    <td>{table_dashbord2.valueation}</td>
                                                    <td>{table_dashbord2.equity}</td>
                                                    <td>{table_dashbord2.Milege_start}</td>
                                                    <td>{table_dashbord2.Milege_now}</td>
                                                    <td>{table_dashbord2.phone}</td>
                                                    <td>{table_dashbord2.email}</td>
                                                    <td>{table_dashbord2.p_code}</td>
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
