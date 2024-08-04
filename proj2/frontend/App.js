import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Student from './Student';


function App() {
  return (
    
    <div className='app'>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Student/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;
