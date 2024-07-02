import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
