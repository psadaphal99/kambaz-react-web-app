import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStatevariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

export default function Lab4(){
    function sayHello() {
        alert("Hello");
      }
    
    return (
        <div id="wd-lab4">
            <h2>Lab 4</h2>
            <ClickEvent></ClickEvent>
            <PassingDataOnEvent></PassingDataOnEvent>
            <PassingFunctions theFunction={sayHello}></PassingFunctions>
            <EventObject></EventObject>
            <Counter></Counter>
            <BooleanStateVariables></BooleanStateVariables>
            <StringStateVariables></StringStateVariables>
            <DateStateVariable></DateStateVariable>
            <ObjectStateVariable></ObjectStateVariable>
            <ArrayStateVariable></ArrayStateVariable>
            <ParentStateComponent></ParentStateComponent>
            <ReduxExamples></ReduxExamples>
        </div>
    );
}