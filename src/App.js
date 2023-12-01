import './App.css';
import Navbar from './layout/Navbar';
import Users from './components/User'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className="container">
      <Users/>
     </div>
    </div>
  );
}

export default App;
