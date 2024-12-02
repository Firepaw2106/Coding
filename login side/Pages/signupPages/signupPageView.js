
function goToSignupPage(){
    app.innnerHTML = /*HTML*/`

    <h1>User Registration</h1>
    <div class ="inputDivContainerBerforeLoggin">
        <input type="text" placeholder="Enter Username" onchange="model.input.signupView.username =this.value">
        <input type="text" placeholder="Enter Password" onchange="model.input.signupView.password =this.value">
        <input type="text" placeholder="Enter Password again" onchange="model.input.signupView.rptPassword =this.value">
        <input type="text" placeholder="Enter Email" onchange="model.input.signupView.email =this.value">
   </div>
   <button onclick="registerUser()">Signup</button>
   <button onclick="backToLogginPage()">Go Back</button>
 `;
}