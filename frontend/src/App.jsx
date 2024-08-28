import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//          Co-Housing Connect
//         </p>
//         <a
//           className="App-link"
//           href="#"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Stay Tuned!
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
