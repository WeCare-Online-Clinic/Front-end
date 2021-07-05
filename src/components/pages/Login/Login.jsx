import React,{useState} from 'react'
import * as _ from 'lodash'
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';
import {Link} from 'react-router-dom';


let initFormValue={
  
    email:'',
    password:'',
       
}
let initError={
    
    emailErrors:{},   
    passwordErrors:{}
   
}

const Login = (props) => {
    const [formValue,setFormValue]=useState({...initFormValue});
    const [errors,setErrors]=useState({...initError});
    const [showPassword,setShowPassword]=useState(false);   


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
        // validating password
        if(formValue.password.length<1){
            let passwordMissing=Object.assign({},{passwordMissing:'password is missing'})
            localErrors.passwordErrors=passwordMissing;
            isValid=false;
        }
        else{
            localErrors.passwordErrors.passwordMissing=null;
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
                            <h3 className="text-center">Login</h3>                          
                            <div className="card-body">
                            <form >                         
                                {/* user name */}
                                 <div className="input-group mb-3">
                                    <span className="input-group-text">User Name:</span>
                                    <input placeholder="Email" 
                                           name="email" 
                                           className="form-control"
                                           value={formValue.email}                                     
                                           onChange={onMyChange}>
                                    </input>                      
                                 </div>
                                 {/* user name(email) erros */}
                                 <div className="mb-2">
                                        {Object.keys(errors.emailErrors).map((key,index)=>{
                                            return <div key={index} style={{color:"red"}}>{errors.emailErrors[key]}</div>
                                        })}
                                 </div>

                                {/* password */}
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
                                     <button  className="btn btn-primary" onClick={onSubmit} style={{width:"100%"}} >Save</button>
                                 </div>
                                <div className="mb-2">
                                        <p>No Existing Account? <Link to="/Signup">Sign Up</Link></p>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                 </div>

        )
    
}
export default Login;