import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import './Signup.css'

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const [isPolicyExpanded,setIsPolicyExpanded]=useState(false);

  const handleChange=(e)=>{
    const parentEle = e.target.parentElement;
    const msgEle = e.target.parentElement.querySelector(".input-message");

    e.target.oninput = () => {
      if (parentEle.classList.contains("invalid")) {
        parentEle.classList.remove("invalid");
        msgEle.innerText = "";
      }
    }

    e.target.onblur = () => {
      // console.log(e.target.id + ": " + e.target.value);
      if (e.target.id == "email") {
        const emailStr = e.target.value
        if (!emailStr.trim()) {
          parentEle.classList.add("invalid");
          msgEle.innerText = fields[0].msgBlank;
        } else {
          if (emailStr.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            if (parentEle.classList.contains("invalid")) {
              parentEle.classList.remove("invalid");
            }
            msgEle.innerText = "";
          } else {
            if (!parentEle.classList.contains("invalid")) {
              parentEle.classList.add("invalid");
              msgEle.innerText = fields[0].msgEmailInvalid;
            }
          }
          
        }
      }
      if (e.target.id == "password") {
        const passStr = e.target.value;
        if (!passStr.trim()) {
          parentEle.classList.add("invalid");
          msgEle.innerText = fields[1].msgBlank;
        } else {
          if (passStr.match(/(?=.*\d)(?=.*([a-z]|[A-Z]))(?=.*[!@#$%^&*+=]){8,}/)) {
            if (parentEle.classList.contains("invalid")) {
              parentEle.classList.remove("invalid");
            }
            msgEle.innerText = "";
          } else {
            if (!parentEle.classList.contains("invalid")) {
              parentEle.classList.add("invalid");
              msgEle.innerText = fields[1].msgPasswordInvalid;
            }
            
          }
          const emailStr = document.querySelector("#email").value;
          const account = emailStr.match(/^([^@]*)@/) ? emailStr.match(/^([^@]*)@/)[1] : "";
          
          const passIncluded = String(passStr).includes(account);
          console.log(passIncluded);
          if (passIncluded) {
            if (!parentEle.classList.contains("invalid")) {
              parentEle.classList.add("invalid");
              msgEle.innerText = fields[1].msgContainEmail;
            }
          }
        }
      }
    }
    
    setSignupState({...signupState,[e.target.id]:e.target.value})
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
  }

  const handleClickPolicyOptions = () => {
    setIsPolicyExpanded(!isPolicyExpanded);
  }
    return(
        <form className="form-mt" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
          <div className='relative form-policy'>
            <input className='policy-checkbox' type="checkbox" id="terms" name="terms" value="terms" required />
            <label htmlFor="terms" className="policy-link">I agree to Typeform’s 
            <a href="#" target='_blank' className=""> Terms of Service</a>, <a href='#' target='_blank' className=''>Privacy Policy</a> and <a href="#" target='_blank' className="">Data Processing Agreement</a>.
            </label>

            <div className='policy-options-wrapper'>
              <div className='flex justify-between items-center policy-options-btn' onClick={handleClickPolicyOptions}>
                <p>See options</p>
                <span className={isPolicyExpanded ? "" : "policy-options-icon"}><svg width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.00008 2.94976L8.87876 5.82845C9.65981 6.6095 10.9261 6.60949 11.7072 5.82844L6.00008 0.121338L0.292969 5.82844C1.07402 6.60949 2.34035 6.60949 3.1214 5.82844L6.00008 2.94976Z"></path></svg></span>
              </div>
              <div aria-hidden={isPolicyExpanded ? "false" : "true"} className={isPolicyExpanded ? "expand-options-menu radio-custom" : "hidden-options-menu radio-custom"}>
                <div className=''>
                  <div className='policy-option-wrap-text'><label id='marketing' className='policy-option-marketing'>Get useful tips, inspiration, and offers via e-communication.</label></div>
                  <div className='flex radio-btn-wrapper'>
                    <div>
                      <label className='label-radio-btn'>
                        <input readOnly name='marketing' type="radio" value={1} defaultChecked />
                        <span>Yes</span>
                      </label>
                    </div>
                    <div>
                    <label className='label-radio-btn'>
                        <input readOnly name='marketing' type="radio" value={0} />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='policy-option-wrap-text'>
                    <label id='tailor_to_needs_agreed' className='policy-option-marketing'>Tailor Typeform to my needs based on my activity.</label>
                    <a href='#' className='policy-option-marketing-link'>See Privacy Policy</a>  
                    </div>
                  <div className='flex radio-btn-wrapper'>
                    <div className='policy-option-wrap-text'>
                      <label className='label-radio-btn'>
                        <input type="radio" name='tailor_to_needs_agreed' value={1} defaultChecked />
                        <span>Yes</span>
                      </label>
                    </div>
                    <div>
                    <label className='label-radio-btn'>
                        <input type="radio" name='tailor_to_needs_agreed' value={0} />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='policy-option-wrap-text'>
                    <label id='third_parties_agreed' className='policy-option-marketing'>Enrich my data with select third parties for more relevant content.</label>
                    <a id='third_parties_agreed' href='#' target='_blank' className='policy-option-marketing-link'>See Privacy Policy</a>  
                  </div>
                  <div className='flex radio-btn-wrapper'>
                    <div>
                      <label className='label-radio-btn'>
                        <input type="radio" name='third_parties_agreed' defaultChecked value={1} />
                        <span>Yes</span>
                      </label>
                    </div>
                    <div>
                    <label className='label-radio-btn'>
                        <input type="radio" name='third_parties_agreed' value={0} />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
                <p className='text-footer-expand'>You can update your preferences in your Profile at any time</p>
              </div>
            </div>
            
          </div>
          <FormAction handleSubmit={handleSubmit} text="Create my free account" />
        </div>

         

      </form>
    )
}