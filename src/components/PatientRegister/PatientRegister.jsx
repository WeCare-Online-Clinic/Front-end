import React from 'react';

import './Register.css';

class PatientRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
   
    <div class="testbox">
      <form action="/">
        <h1>Register Patient</h1>
        <div class="item">
          <p>Patient name</p>
          <div>
            <input type="text" name="name" placeholder="First" />
            <input type="text" name="name" placeholder="Last" />
          </div>

        </div>
        <div class="item">
          <p>Contact Number</p>
          <input type="text" name="name"/>
        </div>

        <div class="item">
          <p>Address</p>
          <textarea rows="5"></textarea>
        </div>

        <div class="item">
          <p>Email</p>
          <input type="text" name="name"/>
        </div>

        <div class="item">
          <p>NIC</p>
          <input type="text" name="name"/>
        </div>

        <div class="item">
          <p>Date of Birth</p>
          <input type="date" name="name" required/>
          <i class="fas fa-calendar-alt"></i>
        </div>

        <div class="item">
        <p>Gender</p>
            <label class="radio-button">
                <input type="radio" name="radio" checked="checked" />
                    <span class="label-visible">
                        <span class="fake-radiobutton"></span>
                    Male
                    </span>
            </label>
            <label class="radio-button">
                <input type="radio" name="radio" />
                    <span class="label-visible">
                        <span class="fake-radiobutton"></span>
                    Female
                    </span>
            </label>
        </div>

        <div class="item">
          <p>Clinic Type</p>
          <select>
            <option value="">*Please select*</option>
            <option value="A"> ENT Clinic</option>
            <option value="B"> Dermatology Clinic</option>
            <option value="C"> Surgery Clinic</option>
            <option value="D"> Cardiology Clinic</option>
            <option value="E"> Dental Clinic</option>
          </select>
        </div>
        
        <div class="item">
          <p>Special Notes</p>
          <textarea rows="5"></textarea>
        </div>
        
        <div class="btn-block">
          <button type="submit" href="/">Register</button>
        </div>
      </form>
    </div>
 
    );
  }
}

export default PatientRegister
