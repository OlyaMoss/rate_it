import logo from './logo.png';
import './App.css';
import ListRanking from "./components/ListRanking";

function App() {
  return (
      <div style={{backgroundColor: "#a1cfe0"}} className="container-fluid" >
          <div className='row'>
              <nav  style={{backgroundColor: "white"}} className='navbar d-flex justify-content-md-evenly '>
                  <div>
                      <img className='navbar-brand' src={logo} alt='logo' height='75'/>
                      <a style={{color:"#ff6e00",fontSize: "40px", fontFamily: "Lucida Console Courier New monospace"}} className='navbar-brand'>Rate it</a>
                  </div>
                  <div>
                      <p style={{color:"#ff6e00"}}>Created by Olga Eidelman</p>
                  </div>
              </nav>
          </div>

          <ListRanking/>
      </div>
  );
}

export default App
