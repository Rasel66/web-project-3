import React from 'react';
import logo from './Logo.png';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import "./Homepage.css";
const fontAwesome = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css';

export default function Homepage() {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-lg-10">
              <div className="h_text">
                <h1>Jashore University of Science and Technology</h1>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-12">
              <div className="slider text-center">
                <h3>Welcome to </h3>
                <h2>Attendance Management System</h2>
                <div className="div">
                <Link to="/studentLogin"><a href="#" className='btnn'><i class="fa fa-user-circle-o" aria-hidden="true"></i> Student Login</a></Link>
                <Link to="/teacherLogin"><a href="#" className='btnn'><i class="fa fa-user-circle-o" aria-hidden="true"></i> Teacher Login</a></Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="row">
                <div class="col-sm-12">
                    <div class="footer text-center">
                        <p>Copyright &copy; Attendance Management System. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
