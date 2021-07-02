import './home.css';
import RightArrow from '../../assets/right-arrow.png';
import People from '../../assets/people.png';

function Home(props) {

  const buy=()=>{
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
          <button  onClick={buy}className="btnStyle" >
              Buy Now
          </button>
          </div>
          </div>
         </div>
   <div className='section row'>

     <div className='span-2-of-2  '>
     <div className='span-1-of-2 headerContainer'>
      <h1 className="header">Welcome to <span className='headFocus'>Landkit</span> Develop Anything</h1>
      <p className="subheader">Build a beautiful. modern website with flexible </p>
      <p className="subheader">Bootstrap components built from scratch.</p>
      <div className='span-2-of-2' style={{marginTop:'60px'}}>
      <button className="btnStyle">View All Pages <img src={RightArrow} className='smallIcon'/> </button>

      <button className="unfocusedBtn">Documentation</button>
      </div>
     </div>
     <div className='span-1-of-2'>
      <img src={People} style={{width:"100%",height:"100%"}}/>
     </div>
     </div>
     </div>      
    
</div>
    );
}

export default Home;
