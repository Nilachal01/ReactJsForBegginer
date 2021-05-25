import './App.css';
import FuncCompo from './Components/functionComponents'
import ClassComponet from './Components/classComponents'
import CounterComponet from './Components/CounterComponent'
import ListOfComponent from './Components/ListOfDataComponent'


function App() {
  return (
    <div className="App">
      
        <FuncCompo name="Neel" id="01"></FuncCompo>
        <ClassComponet name="Nila" id="03"/>
        <CounterComponet/>
      <ListOfComponent datalist="Check/"></ListOfComponent>
    </div>
  );
}


export default App;
