class Firebase
{
    constructor()
    {
        this.config = {
            apiKey: "AIzaSyBZJ1t2TNK2D33sUsD8Vnz0--t-o4Y4ab4",
            authDomain: "geoclodo-936e1.firebaseapp.com",
            databaseURL: "https://geoclodo-936e1.firebaseio.com",
            storageBucket: "geoclodo-936e1.appspot.com",
            messagingSenderId: "27562098887"
        };
        this.init = firebase.initializeApp(this.config);
    }

    get(table, field, response)
    {
        firebase.database().ref(table).on(field, (snapshot) => {
            return response(snapshot.val());
        }, function (error) {
            console.log("Error: " + error.code);
        });
    }

    push(table, data)
    {
        return firebase.database().ref(table).push(data);
    }
}
