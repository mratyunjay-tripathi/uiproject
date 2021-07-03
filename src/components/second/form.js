import { useState } from 'react';
import Relaxe from '../../assets/relaxe.png';
import './form.css';

function Form(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [project, setProject] = useState("none");

  const checkForm = () => {
    let result = window.confirm(
      `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nPassword: ${password}\n Projects: ${project}\nDo you want to submit form`);

    if (result) {
      window.alert("form submitted successfully");
      props.history.replace('/ui/home/');
    }
  }


  return (
    <div section="form" className="section formSectionnew ">
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', padding: '40px 0px' }}>
        <p className="header">Please fill requirements <span className="headFocus">:)</span></p>
      </div>
      <div className="row">
        <div className="span-2-of-2">
          <div className="formStylenew">
            <div className="formImagenew">
              <img src={Relaxe} className="image" />
            </div>
            <div>
              <form action="" className='inputContainer'>
                <div className="inputWrapper">
                  <input type="text" className="input"
                    placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="inputWrapper">

                  <input type="tel" name="phone" placeholder="Phone Number" className='input' onChange={(e) => setNumber(e.target.value)} />
                </div>
                <div className="inputWrapper">
                  <input type="email" className="input"
                    placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="inputWrapper">
                  <input type="password"
                    placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                    className="input" />
                </div>

                <div className="radio">
                  <p >Number of projects:</p>
                  <label className="container">One
                   <input type="radio" name="noftw" value="one" onChange={(e) => setProject(e.target.value)} />
                  </label>
                  <label className="container">Two
                  <input type="radio" name="noftw" value="Two" onChange={(e) => setProject(e.target.value)} />
                  </label>
                  <label className="container">More than Two
                     <input type="radio" name="noftw" value="More than two" onChange={(e) => setProject(e.target.value)}
                    />
                  </label>
                  <label className="container">None
                    <input type="radio" name="noftw" value="None" onChange={(e) => setProject(e.target.value)} />
                  </label>
                </div>
                <div className="inputWrapper">
                  <button className="formBtn" type="submit" onClick={checkForm}>
                    Submit Form
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
