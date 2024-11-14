
const output =document.getElementById("outputDiv");

function printTexst(){
    const input =document.getElementById("textInput").value;
   
    output.innerHTML += /*HTML*/ `
    <li><input type ="checkbox">${input}</li>
    `;

}