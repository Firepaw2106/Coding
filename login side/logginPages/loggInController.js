function loggin(){

    let user =getUserByUserName(model.input.loggInView.username);
    if(user.password == model.input.loggInView.password){
        model.app.currentPage ='mainPage';
        model.input.loggInView.username ='';
        model.input.loggInView.password ='';
        model.app.loggedInUser = user;
        
        updateView()
    }
    else{
        alert('Feil Passord')
    }
}

function goToSignupPage(){
    model.app.currentPage ="signupPage";
    updateView();
}