import logo from './logo.svg';
import './App.css';
import epaycoScript from './epaycoScript';

function App() {

  const amount = 25000;
  epaycoScript(amount);
  
  return (
    <div className="App">
      
    </div>
  );
}


export default App;
