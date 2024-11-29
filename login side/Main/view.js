
function updateView(){

 let page = model.app.currentPage;
 
     if(page =="logginPage"){
        logginPageView();
     } else if (page =="signupPage"){
        sinupPageView();
     } else if( page == "mainPage"){
        mainPageView()
     }
}