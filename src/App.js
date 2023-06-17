import logo from './logo.png';
import './App.css';
import ListRanking from "./components/ListRanking";
import photo from './media/photo.jpg'

function App() {
  return (
      <div style={{backgroundColor: "#a1cfe0"}} className="container-fluid" >
          <div className='row'>
              <nav  style={{backgroundColor: "white"}} className='navbar d-flex justify-content-md-evenly '>
                  <div>
                      <img className='navbar-brand ' src={logo} alt='logo' height='75'/>
                      <a style={{color:"#ff6e00",fontSize: "50px" }} className='navbar-brand headFont'>Rate it</a>
                  </div>
                  <div style={{left:"80px"}} className='w-25 position-relative'>
                      <img className='mx-2' style={{float:"left",borderRadius:"50%"}} src={photo} alt='photo' width='40px' height='38px'/>
                      <p style={{color:"#ff6e00",fontSize: "15px"}}>Created by Olga Eidelman</p>
                  </div>
              </nav>
          </div>

          <ListRanking/>
      </div>
  );
}

export default App
