import './App.css';
import Navigator from './Navigator';
import Getrequest from './getrequest';
// import { Route } from 'react-router';
import { Route } from "react-router-dom";
import img1 from '../src/images/IPL.jpeg';

function App() {
  return (
    <div className="App">
      <img src={img1} alt='IPL_Auction'/>
      <Navigator/>
      <Route exact path='/getrequest' component={Getrequest}/>
    </div>
  );
}

export default App;