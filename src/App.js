import logo from './logo.svg';
import './App.css';
import  FunctionalComponent  from './component/FunctionalComponent';
import ClassComponent from './component/ClassComponent';

function App() {
  return (
    <div>
    <h1 className='heading'>Styling using Functional and Class Components</h1>
    
  
     <FunctionalComponent/>
     <ClassComponent/>
   
    
 </div>
  );
}

export default App;
