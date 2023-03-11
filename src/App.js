import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
    </div>
  );
}

export default App;
