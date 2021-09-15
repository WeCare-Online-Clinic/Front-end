import React, { useEffect, useState } from 'react'
import './profile.css'
import profile from './../.././../../assets/img/pro.png'
import { useDispatch, useSelector } from 'react-redux';
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import * as Actions from "./store/action";

import * as _ from 'lodash'
import 'reactjs-popup/dist/index.css';

import { format } from 'date-format-parse';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const ViewTest = props => {
    const dispatch = useDispatch();
    const reducerData = useSelector(({ testDetails }) => testDetails.viewTest);
    let testProfile;
    testProfile = reducerData.testProfile;
    let deleteTest;

    

    
    return (
        <div className="container">
            <div className="row " >
                <nav className="navbar navbar-expand ">
                    <div className="collapse navbar-collapse">
                       
                    </div>
                </nav>
            </div>

            {

                testProfile && testProfile.map((testProfile, index) => (
                    <React.Fragment>
                        <div className="row mt-5 " >
                            <div className="col">
                                <div className="card  bg-light mb-3" >
                                    <div className="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm' }}>

                                        <div className="row align-items-center" >
                                            <div className="col">
                                                <img src={profile} height="100" width="100" style={{ marginBottom: '5px' }}></img>
                                            </div>
                                            <div className="col">
                                                <h3>{testProfile.name} Test</h3>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="card-body">
                                        <table className="mytable mt-3">
                                            <tbody>
                                                <tr className="my" ><th width="150">Test Id :</th><th>{testProfile.id}</th></tr>
                                                <tr className="my"><th width="150">Test Name :</th><th>{testProfile.name}</th></tr>
                                                <tr className="my"><th width="150">Description :</th><th>{testProfile.description}</th></tr>
                                                <tr className="my"><th width="150">field 1 :</th><th>{testProfile.field1}</th></tr>
                                                <tr className="my"><th width="150">field 2 :</th><th>{testProfile.field2}</th></tr>
                                            </tbody>
                                        </table>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))

            }

        </div>

    )
}


export default withReducer('testDetails', reducer)(ViewTest);