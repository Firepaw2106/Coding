
function updateView(){
    
    app.innerHTML = /*HTML*/`
    <div>
      <div>
            <h1>Login</h1>
            <input type="text" placeholder="Username" onchange="model.input.loggInView.username = this.value">
            <input type="password" placeholder="Password" onchange="model.input.loggInView.password = this.value">

        </div>
        <div>
            <button onclick="loggin()">Login</button>
            <button>Signup</button>
        </div>

    </div>
    `;
    
}