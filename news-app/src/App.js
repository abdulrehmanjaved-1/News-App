import './App.css';
import NavBar from './Components/NavBar'
import NewsItems from './Components/NewsItems';
import BootNews from './Components/bootnews';
import HandlerNews from './Components/handlerofnews';
import { Route, Routes } from 'react-router-dom';

function App() {
  // const exact = "truehy";
  
  return (
    <>
        <NavBar />

        <Routes>
          <Route path="/" element={<HandlerNews key="general" category="general" country="us" />} />
          <Route path="/business" element={<HandlerNews key="business" category="business" country="us" />} />
          <Route path="/sports" element={<HandlerNews key="sports" category="sports" country="us" />} />
          <Route path="/technology" element={<HandlerNews key="technology" category="technology" country="us" />} />
          <Route path="/entertainment" element={<HandlerNews key="entertainment" category="entertainment" country="us" />} />
          <Route path="/science" element={<HandlerNews key="science" category="science" country="us" />} />
          <Route path="/health" element={<HandlerNews key="health" category="health" country="us" />} />
        </Routes>
      
    </>
  );
}

export default App;