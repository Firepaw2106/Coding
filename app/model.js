const app = document.getElementById('app');

const model ={
    app: {
        loggedInUser: null,
        darkMode: true,
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
            },
            {
                id: 1,
                username: "Hannah",
                password: "4567",
                email: "Hannah@hotmail.no",
            },  
        ]   
    },
}