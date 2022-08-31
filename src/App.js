import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/nav';
import 'bootstrap/dist/css/bootstrap.min.css';

import  Todos from './components/todos/todos';
   


function App() {

  let  tasks=[
    {sno:1,
    title:"go to gym",
  description:"I have to go to market"},
  {sno:2,
    title:"go to mall",
  description:"I have to go to market"},
  {sno:3,
    title:"go to home",
  description:"I have to go to home"}
  ]
  return (
    <>
   
    <div>
      <Nav/>
    </div>
    <div className="App">
      <Todos  tasks={tasks}/>
    </div>
    </>
    
  );
}

export default App;
