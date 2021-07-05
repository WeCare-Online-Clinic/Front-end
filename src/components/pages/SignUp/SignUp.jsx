import React,{useState} from 'react'
import * as _ from 'lodash'
import './SignUp.css';
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';
import {Link} from 'react-router-dom';


let initFormValue={
    firstName:'',
    lastName:'',
    email:'',
    dob: '',
    password:'',
    confirmPassword:''
}
let initError={
    firstNameErrors:{},
    lastNameErrors:{},
    emailErrors:{},
    dobErrors:{},
    passwordErrors:{},
    confirmPasswordErrors:{}
}

const SignUp = (props) => {
    const [formValue,setFormValue]=useState({...initFormValue});
    const [errors,setErrors]=useState({...initError});
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);


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

    return (<div className="signup">     
                        <div className="container mt-5">     
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Sign Up</h3>
                            <p className="text-center">Please fill in this from to create an acount</p><hr></hr>
                            <div className="card-body">
                            <form >
                                 <div className="input-group mb-3">
                                    <span className="input-group-text">First Name:</span>
                                    <input placeholder="First Name"                                            
                                           name="firstName" 
                                           className="form-control"
                                           value={formValue.firstName}                                    
                                           onChange={onMyChange}>
                                    </input>                                 
                                 </div>
                                 {/* first name errors */}
                                 <div className="mb-2">
                                    {Object.keys(errors.firstNameErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.firstNameErrors[key]}</div>
                                        })}
                                 </div>

                                 <div className="input-group mb-3">
                                    <span className="input-group-text">Last Name:</span>
                                    <input placeholder="Last Name" 
                                           name="lastName" 
                                           className="form-control"
                                           value={formValue.lastName}                                      
                                           onChange={onMyChange}>
                                    </input>
                                 </div>
                                 {/* last name errors */}
                                 <div className="mb-2">
                                        {Object.keys(errors.lastNameErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.lastNameErrors[key]}</div>
                                        })}
                                </div>

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

                                 <div className="input-group mb-3">
                                    <span className="input-group-text">Password:</span>                                    
                                    <input 
                                           type={showPassword?"text":"password"}
                                           placeholder="Password" 
                                           name="password" 
                                           className="form-control"
                                           value={formValue.password}
                                           onChange={onMyChange}>
                                    </input>  
                                    <button type="reset" className="btn btn-primary" onClick={()=>setShowPassword(showPassword=>!showPassword)}>
                                        {showPassword?<ShowIcon/>:<ShowOffIcon/>}
                                    </button>                           
                                 </div>
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
                          
                            </form>
                            </div>
                        </div>
                        </div>
                 </div>

        )
    
}
export default SignUp;