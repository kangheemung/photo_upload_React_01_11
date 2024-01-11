
import './App.css';
import Header from './Header'
import PhotoList from './Photo/PhotoList';
import PhotoUpload from './Photo/PhotoUpload';
import  { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter> {/* Use BrowserRouter here */}
        <Header />
      
        <Routes>
          <Route path="/photo-list"element={<PhotoList />} />
          <Route path="/photo-upload" element={<PhotoUpload />} />
          {/* Remove the misplaced PhotoUpload component */}
          {/* home top seems like an error or misplaced text */}
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
