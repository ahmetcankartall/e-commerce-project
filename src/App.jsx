import { Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage';

function App() {
  return (
    <>
     

      {/* Navbar sabit olduğu için padding */}
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
