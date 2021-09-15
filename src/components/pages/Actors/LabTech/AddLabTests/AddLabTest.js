import React, { useEffect, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import PatientForm from '../../../../Forms/PatientForm'
import LabTechFullBld from '../../../../Lab Forms/LabTechFullBld'
import { getStorageItem } from '../../../../../utils/StorageUtils'
import './addlabtest.css'
import profile from './../.././../../assets/img/pro.png'
import SearchBar from './SearchBar'
const labTechDetails = getStorageItem('labTechInfo', true);

const useStyles = makeStyles({
    textTitle: {
        padding: '5px',
        color: '#4c5355',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textField: {
        padding: '5px',
        color: '#4c5355',
        fontSize: '16px',
    },
    textBox: {
        height: '140px',
        margin: '5px 40px 5px 40px',
        padding: '10px',
        color: '#4c5355',
        fontSize: '14px',
        border: '1px solid #4c5355',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
        padding: '0px 40px 20px 40px',
        width: '100%',
    },
})
const AddLabTest = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <div className="container">
                <div className="row " >
                    <nav className="navbar navbar-expand ">
                        <div className="collapse navbar-collapse">
                            {/* <SearchBar /> */}
                        </div>
                    </nav>
                </div>

                <div className="row mt-5 " >
                    <div className="col">
                        <div className="card  bg-light mb-3" >
                            <div className="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm' }}>

                                <div className="row align-items-center" >
                                    <div className="col">
                                        <img src={profile} height="100" width="100" style={{ marginBottom: '5px' }}></img>
                                    </div>
                                    <div className="col">
                                        <h3>Patient Details</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="" style={{ maxWidth: '500px', float: 'left' }}>
                                    <SearchBar />
                                </div>
                                <table className="mytable mt-3">
                                    <tbody>
                                        <tr className="my"><th>NIC :</th><th>973567635627V</th></tr>
                                        <tr className="my"><th>Name :</th><th>Mudiyanse</th></tr>
                                        <tr className="my"><th>Email :</th><th>mudiyanse@gmail.com</th></tr>
                                        <tr className="my"><th>Phone :</th><th>0770726091</th></tr>
                                        <tr className="my"><th>Gender:</th><th>male</th></tr>
                                        <tr className="my"><th>Gender:</th><th>male</th></tr>

                                    </tbody>
                                </table>



                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row align-items-center"></div>
                        <div className="card  bg-light mb-3" >
                            <div clasName="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm', verticalAlign: 'middle' }}>
                                <h3 className="mt-5">Add Test</h3>
                            </div>
                            <div className="card-body">

                                <div className="mt-4">
                                    <form>
                                        <div className='input-group mb-3'>
                                            <span className='input-group-text'>Clinic</span>

                                            <select
                                                name='clinic'
                                                id='clinic'
                                                className='form-control'
                                                // onChange={onValueChange}
                                            >
                                                <option value='' selected disabled hidden>
                                                    Select Test
                                                </option>
                                                {/* {Clinics.map((clinic, i) => {
                                                    console.log(clinic, i)
                                                    return (
                                                        <option key={i} value={i}>
                                                            {clinic.name}
                                                        </option>
                                                    )
                                                })} */}
                                            </select>
                                        </div>
                                        <div className="mt-5">
                                              <button className="btn btn-primary mt-3" style={{ height: '40px',marginLeft:'7cm', backgroundColor: '#b3246b' }}>Add Test</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default AddLabTest