import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Overview from './Overview'; 
import AllDrugs from './AllDrugs';
import TrialDrugs from './TrialDrugs';
import SingleDrug from './SingleDrug'; 


const routes = [
  {
    path: "/",
    exact: true,
    main: Overview
  },
  {
    path: "/alldrugs",
    main: AllDrugs
  },
  {
    path: "/trialdrugs",
    main: TrialDrugs
  },
  {
    path: "/singledrug",
    main: SingleDrug
  }
];

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "20%",
            height: "1000px",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0, marginLeft:"5%" }}>
            <li
            style={{
              color: "purple",
              marginBottom: "10%"
            }}
            >
              <h2>Beyond Trials</h2>
            </li>
            <li style={{marginBottom: "5%"}}>
              <Link to="/">Overview</Link>
            </li>
            <li style={{marginBottom: "5%"}}>
              <Link to="/alldrugs">All Drugs</Link>
            </li>
            <li>
              <Link to="/trialdrugs">Trial Drugs</Link>
            </li>
          </ul>

          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;



// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Nav defaultActiveKey="/home" className="flex-column">
//             <Nav.Link href="/home" style={{display: "flex"}}>Active</Nav.Link>
//             <Nav.Link eventKey="link-1">Link</Nav.Link>
//             <Nav.Link eventKey="link-2">Link</Nav.Link>
//             <Nav.Link eventKey="disabled" disabled>
//               Disabled
//             </Nav.Link>
//           </Nav>
//           <Route path="/home" component ={Overview}/>
//       </Router>
//     );
//   }
// }

// export default App;