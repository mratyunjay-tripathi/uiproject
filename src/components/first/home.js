import './home.css';
import RightArrow from '../../assets/right-arrow.png';
import People from '../../assets/people.png';
import Toogle from '../../assets/toggle.png';
import Dashboard from '../../assets/dashboard.png';
import Code from '../../assets/code.png';
import Airbnb from '../../assets/airbnb.png';
import Coinbase from '../../assets/coinbase.png';
import Netflix from '../../assets/netflix.png';
import Dribble from '../../assets/dribble.png';
import Pinterest from '../../assets/pinterest.png';
import Instagram from '../../assets/instagram.png';
import Discussform from '../../assets/discussform.png';
import Check from '../../assets/check.png';
import Loop from '../../assets/loop.png';
import Stats from '../../assets/stats.png';
import { useState } from 'react';

const features = [{ icon: Toogle, heading: "Built for developers", description: "Landkit is built to make yuor life easier. Variables, build tooling, documentation, and reusable components." },
{
  icon: Dashboard,
  heading: "Designed to be modern", description: "Designed with the latest design trends in mind. Landkit feels modern, minimal, and beautifiul."
},
{
  icon: Code,
  heading: "Documentation for everything",
  description: "We have written extensive documentation for components and tools, so you never have to be reverse enginner anything."
}];

const company = [Airbnb, Coinbase, Dribble, Instagram, Netflix, Pinterest];

const service = [{ icon: Check, text: "Lifetime updates" }, { icon: Check, text: "Tech support" }, { icon: Check, text: "Tons of assets" }, { icon: Check, text: "Integration ready" }];

const statistics = [{ icon: Loop, heading: "Bootstrap users since the beginning", desc: "We have been developing with Bootstrap since it was publicly released in 2011." },
{ icon: Code, heading: "Deep understanding of Bootstrap", desc: "We've watched Bootstrap grow up over the years and understand it better than almost anyone." }];

function Home(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const buy = () => {
    props.history.push('/ui/form/');
  }

  return (
    <div >
      <div className="row">
        <div className="container">
          <div>
            <h1 className="logo">Landkit</h1>
          </div>
          <div>
            <ul className="main-nav">
              <li><a href="#">Landings</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Accounts</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>
          <div>
            <button onClick={buy} className="btnStyle" >
              Buy Now
          </button>
          </div>
        </div>
      </div>
      <div className='section1 section row'>

        <div className='span-2-of-2  '>
          <div className='span-1-of-2 headerContainer'>
            <h1 className="header">Welcome to <span className='headFocus'>Landkit</span> Develop Anything</h1>
            <p className="subheader">Build a beautiful. modern website with flexible </p>
            <p className="subheader">Bootstrap components built from scratch.</p>
            <div className='span-2-of-2' style={{ marginTop: '60px' }}>
              <button className="btnStyle"><span style={{ paddingRight: 10 }}>View All Pages</span> <img src={RightArrow} className='smallIcon' /> </button>

              <button className="unfocusedBtn">Documentation</button>
            </div>
          </div>
          <div className='span-1-of-2'>
            <img src={People} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>

      <div className="section2 row">
        <div className='span-3-of-3 '>
          {features.map((feature) => {
            return (
              <div className='span-1-of-3 feature'>
                <div className="featureIcon">
                  <img src={feature.icon} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="padContent">
                  <p className="featureHeading">{feature.heading}</p>
                </div>
                <div className="featureDesc">
                  <p>{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div section="companiesList">
        <hr className="line"></hr>
        <div className='row companies' >
          {company.map((c) => (
            <div className="companyLogo">
              <img src={c} className="image" />
            </div>
          ))}
          <div>
          </div>
        </div>
        <hr className="line"></hr>
      </div>

      <div section="form" className="section formSection ">
        <div className="row">
          <div className="span-2-of-2">
            <div className='span-1-of-2'>
              <div className="formStyle">
                <div className="formImage">
                  <img src={Discussform} className="image" />
                </div>
                <div>
                  <form action="" className='inputContainer'>
                    <div className="inputWrapper">
                      <input type="text" className="input"
                        placeholder="Name" onChange={(e) => setName(e.target.value)} />
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
                    <div className="inputWrapper">
                      <button className="formBtn" onClick={() =>
                        window.alert(
                          `Name:${name}\nEmail:${email}\nPassword:${password}`)}>
                        Download a sample
                    </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className='span-1-of-2 formPart2'>
              <div>
                <p className="secondHeading">The most useful resource</p>
                <p className="secondHeadFocus">ever created for dev|</p>
              </div>
              <div>
                <p className="secondDescription">
                  Using Landkit to build your site means never worrying about designing another page or cross browser compatibility. Our eve-growing library of components and pre-designed layouts will make your life easier.
              </p>
              </div>
              <div className="serviceContainer">
                {service.map(s => (
                  <div className="service">
                    <div className="smallIcon">
                      <img src={s.icon} className="image"></img>
                    </div>
                    <p className="serviceText">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div section="statistics" className="section row stats">
        <div className='span-2-of-2'>
          <div className="span-1-of-2">
            <div >
              <p className="secondHeading">
                We have lots of experience
              </p>
              <p className="secondHeadFocus">
                <span style={{ color: "rgb(10, 6, 226)" }}>
                  building Bootstrap themes.</span>
              </p>
            </div>
            <div>
              <p className="secondDescription">
                We've built well over a dozen of Bootstrap themes and sold tens of thousands of copies.
                </p>
            </div>
            <div className="statsContainer">
              {statistics.map((s) => (
                <div className="statistic">
                  <div className="iconContainer">
                    <div className="statsIcon">
                      <img src={s.icon} className="image" />
                    </div>
                  </div>
                  <div className="statsDetail">
                    <p className="statsHeading">{s.heading}</p>

                    <p className="featureDesc">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="span-1-of-2">
            <div className="statisticsImage">
              <div className="positionStats">
                <img src={Stats} className="image" />
              </div>
            </div>
          </div>
        </div>


      </div>



    </div>
  );
}

export default Home;
