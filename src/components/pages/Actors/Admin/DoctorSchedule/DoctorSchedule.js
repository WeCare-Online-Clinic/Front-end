import React from 'react'
import './shedule.css'
import profile from './../.././../../assets/img/pro.png'
import { float } from 'webidl-conversions'

function DoctorSchedule() {

    return (
        <div className="container">
            <div className="row " >
                <nav className="navbar navbar-expand ">
                    <div className="collapse navbar-collapse"   >
                        <form className="form" >
                            <ul className='nav-menu' >
                                <li> <input className="form-control me-2" style={{ height: '50px' }} type="search" placeholder="Doctor Id" aria-label="Search" /></li>
                                <li> <input className="form-control me-2" style={{ height: '50px' }} type="search" placeholder="Doctor Name" aria-label="Search" /> </li>
                                <li> <input className="form-control me-2" style={{ height: '50px' }} type="search" placeholder="Clinic" aria-label="Search" /> </li>
                                <li> <button className="btn" type="submit" style={{ backgroundColor: '#b3246b', color: 'white', fontWeight: 'bold', width: '100px', height: '50px' }}>SEARCH</button> </li>
                            </ul>
                        </form>
                    </div>
                </nav>
            </div>
            <div className="row " >
                <div className="col">
                    <div className="card  bg-light mb-3" >
                        <div clasName="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm' }}>

                            <div className="row align-items-center" >
                                <div className="col">
                                    <img src={profile} height="100" width="100" style={{ marginBottom: '5px' }}></img>
                                </div>
                                <div className="col">
                                    <h3>K.M.Silva</h3>
                                </div>
                            </div>


                 
                        </div>
                        <div className="card-body">
                            <table className="mytable mt-3">
                                <tr className="my"><th>Id :</th><th>07</th></tr>
                                <tr className="my"><th>Name :</th><th>K.M.Silva</th></tr>
                                <tr className="my"><th>Email :</th><th>silva87@gmail.com</th></tr>
                                <tr className="my"><th>Phone :</th><th>0721256394</th></tr>
                                <tr className="my"><th>Qualification :</th><th>MBBS</th></tr>
                                <tr className="my"><th>Specialty :</th><th>Cardiologist</th></tr>
                                <tr className="my"><th>Registered date :</th><th>2021.07.13</th></tr>
                            </table>



                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row align-items-center"></div>
                    <div className="card  bg-light mb-3" >
                        <div clasName="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm' }}><h3>Clinic Details</h3></div>
                        <div className="card-body">
                            <p>Clinic : Cadiology</p>
                            <table className="mt-3">
                                <tr><th>Day</th><th>Time</th></tr>
                                <tr><td>Monaday</td><td>8.30 a.m</td></tr>
                                <tr><td>Wednesday</td><td>11.00 a.m</td></tr>
                                <tr><td>Friday</td><td>9.30 a.m</td></tr>
                                <tr><td>Saturday</td><td>9.30 a.m</td></tr>

                            </table>
                            <div className="mr-5" style={{ float: 'right' }}>
                                <button className="btn btn-primary mt-3" style={{ height: '40px' }}>Update Shedule</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default DoctorSchedule
