export default function VariablesAndConstants(){
    var functionScoped = 2;
    let blockScoped = 5;

    const constant1 = functionScoped - blockScoped;
    return(
        <div id="wd-variables-and-constants">
            <h4>Variables and Constants</h4>
            functionScoped = {functionScoped}<br></br>
            blockScoped = {blockScoped}<br></br>
            constant1 = {constant1} <hr></hr>
        </div>
    )
}