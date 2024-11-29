
function registerUser(){
    let user =model.input.signUpView;
    if( user.password === user.rptPassword &&
        !getUserByUserName(user.username) &&
        user.email.includes("@")
    ) {
        let newUser = {
            id: model.data.users.length +1,
            username: user.username,
            password: user.password,
            email: user.email,
            profilePicture: "login side/emptyUser.jpg",
        }

        model.data.users.push(newUser);
        clearSignUpFields();

        model.app.currentPage = "logginPage";
        updateView();

    } else{
        alert("Fyll ut alle felt")
    }
}

function backToLogginPage(){
    updateView();
    model.app.currentPage ="logginPage";
    updateView();
}