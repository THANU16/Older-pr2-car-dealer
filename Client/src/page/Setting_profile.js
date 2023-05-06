import "./Setting_profile.css";
import React from "react";
import Heder from "../components/Heder";
// import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';


export default function Setting_profile() {

  const profile_detail = [
    {
      id: "1",
      name: "Ann Culhane",
      email: "annculhane@gmail.com",
      user_role: "Manager",
    },
    {
      id: "2",
      name: "Ann Culhane",
      email: "annculhane@gmail.com",
      user_role: "Manager",
    },
    {
      id: "3",
      name: "Ann Culhane",
      email: "annculhane@gmail.com",
      user_role: "Manager",
    },
    {
      id: "4",
      name: "Ann Culhane",
      email: "annculhane@gmail.com",
      user_role: "Manager",
    },
    {
      id: "5",
      name: "Ann Culhane",
      email: "annculhane@gmail.com",
      user_role: "Manager",
    },
    {
      id: "6",
      name: "Ann Culhane",
      email: "annculhane@gmail.com",
      user_role: "Manager",
    },
    {
      id: "7",
      name: "Ann Culhane",
      email: "annculhane@gmail.com",
      user_role: "Manager",
    },
    {
      id: "8",
      name: "Ann Culhane",
      email: "annculhane@gmail.com",
      user_role: "Manager",
    },
  ];

  
  const add = () => {
    const M_box1 = document.getElementsByClassName("massege_box");
    M_box1[0].style.visibility = "visible";
  };
  const edit = () => {
    const M_box2 = document.getElementsByClassName("massege_box2");
    M_box2[0].style.visibility = "visible";
  };

  
  const cancel_box = () => {
    const M_box1 = document.getElementsByClassName("massege_box");
    M_box1[0].style.visibility = "hidden";
  };
  const add_box = () => {};

  const cancel_box2 = () => {
    const M_box2 = document.getElementsByClassName("massege_box2");
    M_box2[0].style.visibility = "hidden";
  };
  const save = () => {};


  return (
    <div className="bg">
      <Heder />

{/* Massege BOX 01 ADD */}
      <div className="mt-3 mb-5 massege_box col-12 col-md-6 offset-md-4">
        <div className="mt-2 mb-2 row ms-2 me-2">
          <div className="col-12">
            <div className="mt-2 row">
              <div>
                <label className='mb-2' htmlFor="">Username</label>
                <InputGroup className="mb-3">
                  <Form.Control
                  className="bg_cool"
                    id="username"
                    placeholder="Annculhane@gmail.com"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className='mb-2' htmlFor="">Email</label>
                <InputGroup className="mb-3">
                  <Form.Control
                   className="bg_cool"
                    id="email"
                    placeholder="annculhane@gmail.com"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className='mb-2' htmlFor="">Role</label>
                <InputGroup className="mb-3">
                  <Form.Control
                   className="bg_cool"
                    id="Role"
                    placeholder="Manager"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className='mb-2' htmlFor="">Password</label>
                <InputGroup className="mb-3">
                  <Form.Control
                   className="bg_cool"
                    id="Password"
                    placeholder="*****"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className='mb-2' htmlFor="">Confirm Password</label>
                <InputGroup className="mb-3">
                  <Form.Control
                   className="bg_cool"
                    id="conf_Password"
                    placeholder="*****"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>

            <div className="mt-2 mb-2 row">
              <div className="justify-end col-6 d-flex">
                <div onClick={cancel_box} className="BTN_01 all_center">
                  <h2 className="btn_text">Cancle</h2>
                </div>
              </div>
              <div className="justify-start col-6 d-flex">
                <div onClick={add_box} className="BTN_02 all_center">
                  <h2 className="btn_text">Add User</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Massege BOX 02 EDIT */}
      <div className="mt-5 mb-5 massege_box2 col-12 col-md-6 offset-md-4">
        <div className="mt-2 mb-2 row ms-2 me-2">
          <div className="col-12">
            <div className="mt-2 row">
              <div>
                <label className='mb-2' htmlFor="">Username</label>
                <InputGroup className="mb-3">
                  <Form.Control
                   className="bg_cool"
                    id="username_edit"
                    placeholder="Annculhane@gmail.com"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className='mb-2' htmlFor="">Email</label>
                <InputGroup className="mb-3">
                  <Form.Control
                   className="bg_cool"
                    id="email_edit"
                    placeholder="annculhane@gmail.com"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className='mb-2' htmlFor="">Role</label>
                <InputGroup className="mb-3">
                  <Form.Control
                   className="bg_cool"
                    id="Role_edit"
                    placeholder="Manager"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className='mb-2' htmlFor="">Password</label>
                <InputGroup className="mb-3">
                  <Form.Control
                   className="bg_cool"
                    id="Password_edit"
                    placeholder="*****"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>
            <div className="mt-2 row">
              <div>
                <label className='mb-2' htmlFor="">Confirm Password</label>
                <InputGroup className="mb-3">
                  <Form.Control
                   className="bg_cool"
                    id="conf_Password_edit"
                    placeholder="*****"
                    aria-label="0"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </div>
            </div>

            <div className="mt-2 mb-2 row">
              <div className="justify-end col-6 d-flex">
                <div onClick={cancel_box2} className="BTN_01 all_center">
                  <h2 className="btn_text">Cancle</h2>
                </div>
              </div>
              <div className="justify-start col-6 d-flex">
                <div onClick={save} className="BTN_02 all_center">
                  <h2 className="btn_text">Save</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="setbody">
        <div className="mt-5 row ms-5">
          <h2 className="mt-4 mb-4">Settings / <span className='small_font'>Profile</span></h2>
        </div>

        <div className="mt-4 mb-5 row tblleboxmargin">
          <div className="col-12 ">
            <div className="mt-4 row ms-2 me-2">
              <div className="col-12">
                <div className="margin_set_add row">
                  <div onClick={add} className="addNew_profile all_center">
                    <img src="./images/add_user.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 row tableBox3">
              <div>
                <div className="row ms-3 me-3">

                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th></th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>User Role</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {profile_detail.map((profile_detail) => (
                        <tr>
                          <td className="">{profile_detail.id}</td>
                          <td className="">{profile_detail.name}</td>
                          <td>{profile_detail.email}</td>
                          <td>{profile_detail.user_role}</td>
                          <td>
                            <div className="row">
                              <div className="col-6">
                                <img onClick={edit} className='e_logo' src="./images/edit_profile.png" alt="" />
                              </div>
                              <div className="col-6">
                                <img className='e_logo' src="./images/delete_profile.png" alt="" />
                              </div>
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
