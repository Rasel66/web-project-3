import React from 'react'
import logo from './Logo.png';
import demopic from './default.png';
import "./Login.css";
const StudentLogin = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-3 pull-right">
                <div className="logo text-center">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="col-lg-9 pull-right">
                <div className="title">
                    <a href="">Jashore University of Science and Technology</a>
                </div>
            </div>
        </div>
        <hr />
        <br />
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 shadow p-3 mb-5 bg-white rounded">
            <h4 className="text-center">Attendance Management System</h4>
                <hr/>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="photo text-center">
                            <img src={demopic} style={{minWidth:"70%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <h4 className="text-center">Admin Login</h4>
                        <hr/>
                        <br />
                        <form action="">
                            <label htmlFor="username">Username </label>
                            <input type="text" name="" id=""  required className='form-control'/><br />
                            <label htmlFor="password">Password</label>
                            <input type="text" name="" id="" required className='form-control' />

                            <input type="submit" name="login" id="" value="Submit" className="pull-right btn btn-info"/><br/>
                            <a className="back pull-left btn btn-info"style={{marginTop: "-14px"}} href="">Back Homepage</a><br/>
                            <p>Don't have account?<a href="../admin/registration.php"> Register</a></p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-lg-2"></div>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default StudentLogin
