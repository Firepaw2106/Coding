const app = document.getElementById('app');

const model ={
    app: {
        loggedInUser: null,
        darkMode: true,
        currentPage: "logginPage"
    },
    input: {
        loggInView: {
            username: "",
            password: "",
        },
        signUpView: {
            username: "",
            password: "",
            rptPassword: "",
            email: "",

        },
    },
    data: {
        users: [
            {
                id: 0,
                username: "Therese",
                password: "4567",
                email: "therese@hotmail.no",
                pofilePicture:"login side/emptyUser.jpg",
            },
            {
                id: 1,
                username: "Hannah",
                password: "4567",
                email: "Hannah@hotmail.no",
                pofilePicture:"login side/emptyUser.jpg",
            },  
        ]   
    },
}