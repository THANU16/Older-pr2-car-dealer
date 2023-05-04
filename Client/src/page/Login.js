import { React, useEffect, useState } from 'react';
import "./Login.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";



export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {

        var login = sessionStorage.getItem("login");


        if (login===true) {

            alert("automatic login!");
            sessionStorage.setItem("pageView", "Dashboard");
            navigate("/Dashboard");

        }
        else {
            sessionStorage.setItem("pageView", "");
            navigate("/");
        }

    }, [])

    const login = () => {
        if (email == "" || password == "") {
            
            alert("Fill the form");
        }
        else {

            sessionStorage.setItem("login", true);

            navigate("/Dashboard");
            sessionStorage.setItem("pageView", "Dashboard");
            var check = false;

        

            // for(let i=0;i<data.length;i++){

            //     if(data[i].email==email && data[i].password==password){
            //         alert("login sucess");
            //         check=false
            //         navigate("/Dashboard");
            //         break
            //     }
            //     else{

            //         check=true;

            //     }

            // }
            // if(check){
            //     alert("login unscess");
            // }


        }
    }


    return (
        <div className='hid'>
            <div className='row'>
                <div className='col-12 full_hight'>
                    <div className='row'>

                        <div className='justify-end col-12 col-md-6 right_loginbox full_hight d-flex'>
                            <div className='col-6 box_coklor'></div>
                            <img className='login_img' src="./images/right_image.png" alt="" />
                            <img className='poti_set' src="./images/Group_dots.png" alt="" />
                        </div>

                        <div className='col-12 col-md-6 left_loginbox'>
                            <div className='justify-center mt-5 row d-flex'>
                                <img className='login_logo' src="./images/Rectangle.png" alt="" />
                            </div>
                            <div className='justify-center mt-4 mb-4 row d-flex'>
                                <div className='justify-center col-12 d-flex'>
                                    <h2 className='font_bold'>Log In</h2>
                                </div>
                            </div>
                            <div className='justify-center mt-4 mb-4 row d-flex'>

                                <div className='justify-center row d-flex'>
                                    <div class="col-9 mt-4 ms-3">
                                        <div class="textOnInput">
                                            <label for="inputText">Email</label>
                                            <input

                                                id='Email'
                                                class="form-control"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='justify-center row d-flex'>
                                    <div class="col-9 mt-4 ms-3">
                                        <div class="textOnInput">
                                            <label for="inputText">Password</label>
                                            <input

                                                id='Password'
                                                class="form-control"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='justify-end row d-flex me-5'>
                                    <div class="col-12 mt-1 d-flex justify-end me-5">
                                        <h2 className='font_bold'>Forgot password?</h2>
                                    </div>
                                </div>

                                <div className='justify-end mt-4 row d-flex'>
                                    <div class="col-12 mt-1 d-flex justify-center">
                                        <div onClick={login} className='boxBtn_login all_center'>
                                            <h2 className='font_white'>Login</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className='justify-end mt-4 row d-flex'>
                                    <div class="col-6 mt-1 d-flex justify-end">
                                        <img className='loginBTNlogo' src="./images/Google.webp" alt="" />
                                    </div>
                                    <div class="col-6 mt-1 d-flex justify-start">
                                        <img className='loginBTNlogo2' src="./images/Facebook.png" alt="" />
                                    </div>
                                </div>

                                <div className='justify-end mt-4 row d-flex'>
                                    <div class="col-12 mt-1 d-flex justify-center">
                                        <h2 className='underline'>Don’t have an account? Register here</h2>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
