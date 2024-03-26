import logo from './logo.svg';
import './App.css';
import SignupPage from './components/SignupPage';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
     <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
