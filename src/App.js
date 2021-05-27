import './App.css';
import FuncCompo from './Components/functionComponents'
import ClassComponet from './Components/classComponents'
import CounterComponet from './Components/CounterComponent'
import ListOfComponent from './Components/ListOfDataComponent'
import FormController from './Components/FormsComponent'
import PComponent from './Components/PComponent';
import PureComponents from './Components/PureComponents';
import MemoComponent from './Components/MemoComponent';
import RefCompnent from './Components/RefCompnent';
import PRefComponent from './Components/PRefComponent';



function App() {
  return (
    <div className="App">
      
        <FuncCompo name="Neel" id="01"></FuncCompo>
        <ClassComponet name="Nila" id="03"/>
        <CounterComponet/>
        <ListOfComponent datalist="Check/"></ListOfComponent>
        <FormController/>
        <PComponent/>
        <PureComponents/>
        <MemoComponent/>
        <RefCompnent/>
        <PRefComponent/>
        

    </div>
  );
}


export default App;
