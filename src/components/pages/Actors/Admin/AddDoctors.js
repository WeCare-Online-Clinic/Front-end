import React,{useState} from 'react'
import * as _ from 'lodash'
import  '../../SignUp/SignUp.css'
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';
import {Link} from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '75ch',       
      }
    },
  }));

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

let initFormValue={
    firstName:'',
    lastName:'',
    email:'',
    nic: '',
    address1:'',
    address2:'',
    password:'',
    confirmPassword:'',
    mobile:'',
    qualifications:'',
    speciality:'',
    clinic :''
}
let initError={
    firstNameErrors:{},
    lastNameErrors:{},
    emailErrors:{},
    nicErrors:{},
    address1Errors:{},
    passwordErrors:{},
    confirmPasswordErrors:{},
    mobileErrors:{},
    qualificationsError:{},
    specialityErrors:{},
    clinicError:{}
}

const AddDoctors = (props) => {
    const [formValue,setFormValue]=useState({...initFormValue});
    const [errors,setErrors]=useState({...initError});
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);

    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    
      const handleClickShowPassword = () => {
        setFormValue({ ...formValue.password, showPassword: !formValue.showPassword });
      };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const classes = useStyles();

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
        //validating first name
        if(formValue.firstName.trim().length<1){               
            let firstNameMissing=Object.assign({},{missing:'first name is missing'}); //make a local object 'firstNameMissing' and add the error 
            localErrors.firstNameErrors=firstNameMissing;  //push the error to localErrors   
            isValid=false;
        }
        else{
            localErrors.firstNameErrors.missing=null;
        }       
        if(formValue.firstName.trim().length>10){
            let firstNameTooLong=Object.assign({},{tooLong:'first name is too long'})
            localErrors.firstNameErrors=firstNameTooLong;
            isValid=false;       
        }
        else{
            localErrors.firstNameErrors.tooLong=null;
        }
         //validating last name
        if(formValue.lastName.trim().length<1){
            let lastNameMissing=Object.assign({},{missing:'last name is missing'});
            localErrors.lastNameErrors=lastNameMissing;
            isValid=false;
            
        }
        else{
            localErrors.lastNameErrors.missing=null;
        }
        if(formValue.lastName.trim().length>10){
            let lastNameTooLong=Object.assign({},{tooLong:'last name is too Long'});
            localErrors.lastNameErrors=lastNameTooLong;
            isValid=false;
        }
        else{
            localErrors.lastNameErrors.tooLong=null;
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
        // validating password
        if(formValue.password.length<1){
            let passwordMissing=Object.assign({},{passwordMissing:'password is missing'})
            localErrors.passwordErrors=passwordMissing;
            isValid=false;
        }
        else{
            localErrors.passwordErrors.passwordMissing=null;
        }
        //validating confirm password
        if(formValue.confirmPassword!==formValue.password){
            let confirmPasswordWrong=Object.assign({},{confirmPasswordWrong:'password is wrong'});
            localErrors.confirmPasswordErrors=confirmPasswordWrong;
            isValid=false;
        }
        else{
                localErrors.confirmPasswordErrors.confirmPasswordWrong=null;
        }


          
        setErrors({...localErrors}); //push all errors to errors object
        return isValid;
    }

    const onMyChange=(v)=>{
        let value=v.target.value;
        let name=v.target.name;
        setFormValue({...formValue,[name]:value})

    }

    return (  
     
                        <div className="container mt-5"> 
                        <div className="card">
                             <h3 className="text-center">Register New Doctor</h3>  
                        <div className="row ">
                            <div className="col ">
                            <div className="card ">                                                   
                            <div className="card-body ml-5 ">
                            <form  className={classes.root}  noValidate autoComplete="off" >                    
                                 
                                    
                                <TextField 
                                    // error
                                    id="standard-basic"
                                    label="first name" 
                                    variant="outlined" 
                                    name="firstName" 
                                    value={formValue.firstName}
                                    onChange={onMyChange}
                                />                        
                                 {/* first name errors */}
                                 <div className="mb-2">
                                    {Object.keys(errors.firstNameErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.firstNameErrors[key]}</div>
                                        })}
                                 </div>

                                 <TextField id="outlined-basic" 
                                            label="last name" 
                                            variant="outlined" 
                                            name="lastName" 
                                            value={formValue.firstName}
                                            onChange={onMyChange}
                                />
                                 {/* last name errors */}
                                 <div className="mb-2">
                                        {Object.keys(errors.lastNameErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.lastNameErrors[key]}</div>
                                        })}
                                </div>

                                <TextField id="outlined-basic" 
                                                label="email" 
                                                variant="outlined" 
                                                name="email" 
                                                value={formValue.email}
                                                onChange={onMyChange}
                                />
                                 {/* email erros */}
                                 <div className="mb-2">
                                        {Object.keys(errors.emailErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.emailErrors[key]}</div>
                                        })}
                                 </div>
                                    
                                 <TextField id="outlined-basic" 
                                                label="National Identity Card" 
                                                variant="outlined" 
                                                name="nic" 
                                                value={formValue.nic}
                                                onChange={onMyChange}
                                />
                                 {/* nic errors */}
                                 <div className="mb-2">
                                    {Object.keys(errors.nicErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.nicErrors[key]}</div>
                                     })} 
                                </div>  

                                <TextField      
                                                id="outlined-basic" 
                                                label="address line 1" 
                                                variant="outlined" 
                                                name="address1" 
                                                value={formValue.address1}
                                                onChange={onMyChange}
                                /> 
                                {/* address line 1 errors */}
                                <div className="mb-2">
                                    {Object.keys(errors.address1Errors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.address1Errors[key]}</div>
                                     })} 
                                </div> 

                                <TextField      
                                                id="outlined-basic" 
                                                label="address line 2" 
                                                variant="outlined" 
                                                name="address2" 
                                                value={formValue.address2}
                                                onChange={onMyChange}
                                /> 
                                {/* address line 2 errors not defined */}
                             
                                <TextField      
                                                id="outlined-basic" 
                                                label="mobile number" 
                                                variant="outlined" 
                                                name="mobile" 
                                                value={formValue.mobile}
                                                onChange={onMyChange}
                                /> 
                                {/* mobile number errors */}
                                <div className="mb-2">
                                    {Object.keys(errors.mobileErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.mobileErrors[key]}</div>
                                     })} 
                                </div> 

                                <TextField      
                                                id="outlined-basic" 
                                                label="Degree" 
                                                variant="outlined" 
                                                name="qualifications" 
                                                value={formValue.qualifications}
                                                onChange={onMyChange}
                                /> 
                                {/* qualifications errors */}
                                <div className="mb-2">
                                    {Object.keys(errors.qualificationsError).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.qualificationsError[key]}</div>
                                     })} 
                                </div> 

                                <TextField
                                    id="standard-select-currency-native"
                                    select
                                    label="Native select"
                                    value={currency}
                                    onChange={handleChange}
                                    SelectProps={{
                                        native: true,
                                    }}
                                      helperText="Please select your currency"
                                >
                                    {currencies.map((option) => (
                                        <option key={option.value} value={option.value}>
                                        {option.label}
                                        </option>
                                     ))}
                                 </TextField>

                                 
                          
                            </form>
                            </div>
                        </div>

                            </div>
                            <div className="col">
                            <div className="card col-md-6 offset-md-3 offset-md-3">                                                   
                            <div className="card-body">
                          <TextField
                                id="standard-select-currency-native"
                                select
                                label="Native select"
                                value={currency}
                                onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                }}
                                helperText="Please select your currency"
                                >
                                {currencies.map((option) => (
                                    <option key={option.value} value={option.value}>
                                    {option.label}
                                    </option>
                                ))}
                         </TextField>
                            <br/>
                                    {/* <span className="input-group-text">Password:</span>                                     */}
                                    {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                            labelWidth={70}
                                        /> */}
                                
                                 
                                   {/* password errors */}
                                 <div className="mb-2">
                                    {Object.keys(errors.passwordErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.passwordErrors[key]}</div>
                                        })}
                                 </div>

                                 <div className="input-group mb-3">
                                    <span className="input-group-text">Confirm Password:</span>
                                    <input 
                                           type={showConfirmPassword?"text":"password"}
                                           placeholder="Confirm Password" 
                                           name="confirmPassword" 
                                           className="form-control"
                                           value={formValue.confirmPassword}
                                           onChange={onMyChange}>                                           
                                    </input> 
                                    <button type="reset" className="btn btn-primary" onClick={()=>setShowConfirmPassword(showConfirmPassword=>!showConfirmPassword)}>
                                        {showConfirmPassword?<ShowIcon/>:<ShowOffIcon/>}
                                    </button> 
                                   {/* confirm password errors */}                          
                                 </div>
                                 <div className="mb-2">
                                    {Object.keys(errors.confirmPasswordErrors).map((key,index)=>{
                                                return <div key={index} style={{color:"red"}}>{errors.confirmPasswordErrors[key]}</div>
                                    })} 
                                 </div>
                                 <div className="input-group mb-3">
                                     <button  className="btn btn-primary" onClick={onSubmit} style={{width:"100%"}} >Save</button>
                                 </div>
                                 <div className="mb-2">
                                        <p>Already Have Account? <Link to="/login">Login</Link></p>
                                </div>
                            </div>
                        </div>

                            </div>

                        </div>                   
                        </div>
                        </div>
                

        )
    
}
export default AddDoctors;