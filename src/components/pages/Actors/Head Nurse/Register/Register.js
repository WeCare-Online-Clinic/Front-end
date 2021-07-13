import React,{useState} from 'react'
import * as _ from 'lodash'
import './Register.css'
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';
import {Link} from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core'

let initFormValue={
    patientName:'',
    patientAddress:'',
    contactNumber:'',
    email:'',
    dob: '',
    nic:'',
}
let initError={
    patientNameErrors:{},
    patientAddressErrors:{},
    contactNumberErrors:{},
    emailErrors:{},
    dobErrors:{},
    nicErrors: {},
}

const Register = (props) => {
    const [formValue,setFormValue]=useState({...initFormValue});
    const [errors,setErrors]=useState({...initError});



    const onSubmit=(e)=>{
        console.log("onsubmit");   
        e.preventDefault();
        const isValid=validation();        
        
        if(isValid){
           console.log("pass");           
           
        }
        else{
           console.log("fail");      
                    
            
        }
        
    }
    const validation=()=>{             
        let localErrors=_.cloneDeep(errors); //make a seperate local errors object and assign it to localErrors 
        let isValid=true;
        //validating ptient name
        if(formValue.patientName.trim().length<1){               
            let patientNameMissing=Object.assign({},{missing:' name is missing'}); //make a local object 'ptientNameMissing' and add the error 
            localErrors.patientNameErrors=patientNameMissing;  //push the error to localErrors   
            isValid=false;
        }
        else{
            localErrors.patientNameErrors.missing=null;
        }       
        
         //validating contact
        
        if(formValue.contactNumber.trim().length>10){
            let contactNumberTooLong=Object.assign({},{tooLong:'not valid'});
            localErrors.contactNumberErrors=contactNumberTooLong;
            isValid=false;
        }
        else{
            localErrors.contactNumberErrors.tooLong=null;
        }
        //validating email
        if(formValue.email.trim().length<1){
            let emailMissing=Object.assign({},{missing:'email is missing'});
            localErrors.emailErrors=emailMissing;  
            isValid=false;          
        }
        else{
            if(!formValue.email.includes('@')){
                let invalidEmail=Object.assign({},{invalidEmail:'invalid email'});
                localErrors.emailErrors=invalidEmail; 
                isValid=false;
            }
            else{
                localErrors.emailErrors.invalidEmail=null;
            }
            localErrors.emailErrors.missing=null;
        }
        // validating dob
        if(formValue.dob.length<1){
            let dobMissing=Object.assign({},{dobMissing:'date of birth is missing'});
            localErrors.dobErrors=dobMissing;
            isValid=false;
        }
        else{
            localErrors.dobErrors.dobMissing=null;
        }
       
            //validating ptient adress
            if(formValue.patientAddress.trim().length<1){               
                let patientAddressMissing=Object.assign({},{missing:' Address is missing'}); //make a local object 'ptientNameMissing' and add the error 
                localErrors.patientAddressErrors=patientAddressMissing;  //push the error to localErrors   
                isValid=false;
            }
            else{
                localErrors.patientAddressErrors.missing=null;
            }     

          // validating nic
        if (formValue.nic < 1) {
            let nicMissing = Object.assign({}, { nicMissing: 'nic is missing' });
            localErrors.nicErrors = nicMissing;
            isValid = false;
        }
        else {
            if (!formValue.nic.includes('V')) {
                let invalidNic = Object.assign({}, { invalidNic: 'invalid nic' });
                localErrors.nicErrors = invalidNic;
                isValid = false;
            }
            else {
                localErrors.nicErrors.invalidNic = null;
            }
            localErrors.nicErrors.nicMissing = null;
        }

                    setErrors({...localErrors}); //push all errors to errors object
                    return isValid;
                }

    const onMyChange=(v)=>{
        let value=v.target.value;
        let name=v.target.name;
        setFormValue({...formValue,[name]:value})

    }

    return (<div className="signup">     
                         <div className="container mt-5">
            <div className="card ">
                <div className="title">
                    <h3 className="text-center">Register New Patient</h3>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card-body">
                            <form >
                                 <div className="input-group mb-3">
                                    <span className="input-group-text">Patient Name:</span>
                                    <input placeholder="Patient Name"                                            
                                           name="patientName" 
                                           className="form-control"
                                           value={formValue.patientName}                                    
                                           onChange={onMyChange}>
                                    </input>                                 
                                 </div>
                                 {/* first name errors */}
                                 <div className="mb-2">
                                    {Object.keys(errors.patientNameErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.patientNameErrors[key]}</div>
                                        })}
                                 </div>

                                 {/* Address */}
                                 <div className="input-group mb-3">
                                    <span className="input-group-text">Address:</span>
                                    <textarea placeholder="Patient Address"                                            
                                           name="patientAddress" 
                                           className="form-control"
                                           value={formValue.patientAddress}                                    
                                           onChange={onMyChange}>
                                    </textarea>                                 
                                 </div>
                                 {/* first address errors */}
                                 <div className="mb-2">
                                    {Object.keys(errors.patientAddressErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.patientAddressErrors[key]}</div>
                                        })}
                                 </div>

                                 {/* Contact */}
                                 <div className="input-group mb-3">
                                    <span className="input-group-text">Contact Number:</span>
                                    <input placeholder="Contact Number" 
                                           name="contactNumber" 
                                           className="form-control"
                                           value={formValue.contactNumber}                                      
                                           onChange={onMyChange}>
                                    </input>
                                 </div>
                                 {/* last number errors */}
                                 <div className="mb-2">
                                        {Object.keys(errors.contactNumberErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.contactNumberErrors[key]}</div>
                                        })}
                                </div>

                                {/* Email */}
                                 <div className="input-group mb-3">
                                    <span className="input-group-text">Email:</span>
                                    <input placeholder="Email" 
                                           name="email" 
                                           className="form-control"
                                           value={formValue.email}                                     
                                           onChange={onMyChange}>
                                    </input>                      
                                 </div>
                                 {/* email erros */}
                                 <div className="mb-2">
                                        {Object.keys(errors.emailErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.emailErrors[key]}</div>
                                        })}
                                 </div>
                                 <Grid item sm={12}>
                                    <Grid container style={{ marginBottom: '10px' }} spacing={5}>
                                        <Grid item sm={6}>
                                            {/* DoB */}
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Date of Birth:</span>
                                                <input type="date"
                                                    placeholder="Date of Birth" 
                                                    name="dob" 
                                                    className="form-control"
                                                    value={formValue.dob}
                                                    onChange={onMyChange}>
                                                </input>                
                                            </div>
                                            {/* date of birth errors */}
                                            <div className="mb-2">
                                                {Object.keys(errors.dobErrors).map((key,index)=>{
                                                        return <div key={index} style={{color:"red"}}>{errors.dobErrors[key]}</div>
                                                })} 
                                            </div>   
                                        </Grid>

                                <Grid item sm={6}>
                                    {/* NIC Input Field */}
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">NIC</span>
                                            <input type="text"
                                                placeholder="National Identity Card"
                                                name="nic"
                                                className="form-control"
                                                value={formValue.nic}
                                                onChange={onMyChange}>
                                            </input>
                                        </div>
                                        {/* nic errors */}
                                        <div className="mb-2">
                                            {Object.keys(errors.nicErrors).map((key, index) => {
                                                return <div key={index} style={{ color: "red" }}>{errors.nicErrors[key]}</div>
                                            })}
                                        </div>
                                    </Grid>

                                    <Grid item sm={6}>
                                   {/* Clinic */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Clinic</span>
                                        <select>
                                            <option value="0">Clinic Type</option>
                                            <option value="1">Dentistry</option>
                                            <option value="2">Dermatology</option>
                                            <option value="3">Neurology</option>  
                                        </select>          
                                 </div>
                                 </Grid> 

                                 <Grid item sm={6}>
                                 <div className="input-group mb-3">
                                    <span className="input-group-text">Gender :</span>
                                   <div className="radio">
                                        <input type="radio" id="male"  value="Male" />
                                          <label for="html">Male</label>
                                         <input type="radio" id="female" value="Female" />
                                          <label for="css">Female</label>  
                                  </div></div>
                                  </Grid> 
                                </Grid> 
                            </Grid> 
				
                                  <div className="input-group mb-3">
                                    <span className="input-group-text">Special Notes:</span>
                                    <textarea placeholder="Notes" rows="2" cols="133"></textarea>                                 
                                 </div>
                                  
                                
                                 <div className="input-group mb-3">
                                     <button  className="btn btn-primary" onClick={onSubmit} style={{width:"100%"}} >Save</button>
                                 </div>
                                 
                          
                            </form>
                            </div>
                        </div>
                        </div>
                 </div>

                 </div>
        </div>
        )
    
}

export default Register