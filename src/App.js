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
import PortalComponent from './Components/PortalComponent';
import HOCComponent1 from './Components/HOCComponent1';
import HOCComponet2 from './Components/HOCComponet2';
import GetDataComponent from './Components/GetDataComponent';





function App() {
  return (
    <div className="App">
      <GetDataComponent/>
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
        <PortalComponent/>
        <HOCComponet2/>
        <HOCComponent1/>

    </div>
  );
}


export default App;
