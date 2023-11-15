import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Body from "./components/body/body";
import Page from './components/pageTwo/Page';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
          <Routes>
              <Route path='page' element={<Page />} />
          </Routes>
      
      <Header />
      <Nav />
      <Body />
     
    </div>
  );
}

export default App;
