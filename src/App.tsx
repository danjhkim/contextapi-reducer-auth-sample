import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Secret from './components/Secret';
import { LoginStore } from './contexts/AuthContext'


function App () {
  return (
    <div className='App'>
      <Router>
        <LoginStore>
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/secret" element={ <Secret /> } />
            <Route path="/signin" element={ <Login /> } />
          </Routes>
        </LoginStore>
      </Router>
    </div>
  );
}

export default App;
