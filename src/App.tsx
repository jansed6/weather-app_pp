import {Routes, Route, Navigate} from 'react-router-dom';
import Search from './Pages/Search';

function App() {
  return (
    <div>
      <Routes>
        <Route path="*"  element={<Navigate to="/search" />} /> 
        <Route path="/search" element={<Search />}  />
      </Routes>    
    </div>
  );
}

export default App;
