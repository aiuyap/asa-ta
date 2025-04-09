import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="asa-ta">Asa man ta?</div>
      </div>
      <Link to="/result">
        <button>Ikaw Bahala</button>
      </Link>
    </>
  );
}

export default App;
