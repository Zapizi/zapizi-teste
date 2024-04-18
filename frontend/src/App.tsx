import { BrowserRouter } from 'react-router-dom';
import 'src/scss/styles.scss';
import './App.css';
import Router from './routes/sections';

function App() {  
  return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  )
}

export default App
