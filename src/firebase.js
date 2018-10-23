import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDR3p46fmDVxjbP1ayXbGeTLM-qHBStRpQ",
    authDomain: "nba-full-ea227.firebaseapp.com",
    databaseURL: "https://nba-full-ea227.firebaseio.com",
    projectId: "nba-full-ea227",
    storageBucket: "nba-full-ea227.appspot.com",
    messagingSenderId: "191260448895"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data;
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}