import React, { useEffect, useState } from 'react'
import './profile.css'
import profile from './../.././../../assets/img/test.png'
import { useDispatch, useSelector } from 'react-redux';
import withReducer from '../../../../../store/withReducer'
import reducer from './store/reducer/index'
import * as _ from 'lodash'
import 'reactjs-popup/dist/index.css';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ViewPDFComponent from './ViewPDFComponent'

toast.configure()
const ViewReport = props => {
    const dispatch = useDispatch();
    const reducerData = useSelector(({ reportDetails }) => reportDetails.viewReport);
    let reportProfile;
    reportProfile = reducerData.reportProfile;
    console.log("reportProfile...:  ", reducerData.reportProfile)




    return (
        <div className="container">
            <div className="row mt-5 " >
                <div className="col-6">
                    <div className="card  bg-light mb-3" style={{}}>
                        <div className="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm' }}>

                            <div className="row align-items-center" >
                                <div className="col">
                                    <img src={profile} height="100" width="100" style={{ marginBottom: '5px' }}></img>
                                </div>
                                <div className="col">
                                    <h3>{reportProfile.test && reportProfile.test.name} Report </h3>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="mytable mt-3">
                                <tbody>
                                    <tr className="my" ><th>Report Id :</th><th>{reportProfile.id}</th></tr>
                                    <tr className="my" ><th>Patient Name :</th><th>{reportProfile.patient && reportProfile.patient.name}</th></tr>
                                    <tr className="my" ><th>Test Name :</th><th>{reportProfile.test && reportProfile.test.name}</th></tr>
                                    <tr className="my"><th>Test Time :</th><th>{reportProfile.testTime}</th></tr>
                                    <tr className="my"><th>Test Date :</th><th>{reportProfile.testDate}</th></tr>
                                    <tr className="my"><th>Issued Date :</th><th>{reportProfile.issuedDate}</th></tr>
                                    <tr className="my"><th>{reportProfile.test && reportProfile.test.field1} :</th><th>{reportProfile.data1}</th></tr>
                                    <tr className="my"><th>{reportProfile.test && reportProfile.test.field2} :</th><th>{reportProfile.data2}</th></tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row align-items-center"></div>
                    <div className="card  bg-light mb-3" >
                        <div clasName="card-header" style={{ textAlign: 'center', backgroundColor: '#3f51b5', color: 'white', height: '3cm', verticalAlign: 'middle' }}>
                            <h3 className="mt-5">PDF format</h3>
                        </div>
                        <div className="card-body">

                            <div className="">

                                < ViewPDFComponent reportDetails={reducerData.reportProfile} />

                            </div>
                        </div>
                    </div>
                </div>
          

            </div>

        </div >

    )
}


export default withReducer('reportDetails', reducer)(ViewReport);