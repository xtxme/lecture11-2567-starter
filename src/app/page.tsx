"use client";
import { useState } from "react";

export default function RegisterForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [buyBottle, setBuyBottle] = useState(false);
  const [buyShoes, setBuyShoes] = useState(false);
  const [buyCap, setBuyCap] = useState(false);
  const [plan,setPlan] = useState("");
  const [gender,setGender] =useState("");

  const inputFnameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFname(event.target.value);
  };

  const inputLnameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLname(event.target.value);
  };

  const selectPlanOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlan(event.target.value);
  };

  const radioGenderMaleOnChange = () => {
    setGender("male");
  }
  const radioGenderFemaleOnChange = () => {
    setGender("female");
  }

  const computeTotalPayment = () => {};

  const registerBtnOnClick = () => {
    alert(`Registration complete. Please pay money for ... THB.`);
  };

  return (
    <div className="mx-auto vstack gap-3" style={{ width: "400px" }}>
      <h3 className="text-center fst-italic my-3">Register CMU Marathon 🏃‍♂️</h3>
      {/* First name & Last name */}
      <div className="d-flex gap-2">
        <div>
          <label className="form-label">First name</label>
          <input
            className="form-control"
            onChange={inputFnameOnChange}
            value={fname}
          />
        </div>
        <div>
          <label className="form-label">Last name</label>
          <input
            className="form-control"
            onChange={inputLnameOnChange}
            value={lname}
          />
        </div>
      </div>

      {/* Running Plan */}
      <div>
        <label className="form-label">Plan</label>
        {/* Fun run 5.5 Km (500 THB)
          Mini Marathon 10 Km (800 THB)
          Half Marathon 21 Km (1,200 THB)
          Full Marathon 42.195 Km (1,500 THB) */}
          <select 
            className="form-select"
            onChange={selectPlanOnChange}
            value={plan}>
            <option value="">Please select...</option>
            <option value="funrun">Fun run 5.5 Km (500 THB)</option>
            <option value="mini">Mini Marathon 10 Km (800 THB)</option>
            <option value="half">Half Marathon 21 Km (1,200 THB)</option>
            <option value="full">Full Marathon 42.195 Km (1,500 THB)</option>
          </select>
      </div>

      {/* Gender */}
      <div>
        <label className="form-label">Gender</label>
        <div>
          <input 
            className="me-2 form-check-input" 
            type="radio" 
            onChange={radioGenderMaleOnChange} 
            checked={gender == "male"}/>
          Male 👨
          <input 
            className="mx-2 form-check-input" 
            type="radio" 
            onChange={radioGenderFemaleOnChange} 
            checked={gender == "female"}/>
          Female 👩
        </div>
      </div>

      {/* Extra Items */}
      <div>
        <label className="form-label">Extra Item(s)</label>
        <div>
          <input className="form-check-input" type="checkbox" />{" "}
          <label className="form-check-label">Bottle 🍼 (200 THB)</label>
        </div>
        <div>
          <input className="form-check-input" type="checkbox" />{" "}
          <label className="form-check-label">Shoes 👟 (600 THB)</label>
        </div>
        <div>
          <input className="form-check-input" type="checkbox" />{" "}
          <label className="form-check-label">Cap 🧢 (400 THB)</label>
        </div>
      </div>

      {/* Total Payment */}
      <div>Total Payment : ... THB</div>

      {/* Register Button */}
      <button className="btn btn-success my-2" onClick={registerBtnOnClick}>
        Register
      </button>
    </div>
  );
}
