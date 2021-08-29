import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyDZk93Xh5WfvnMbNXfjGkuvOlKJXz5DKaw",
      authDomain: "fir-pj-fad69.firebaseapp.com",
      projectId: "fir-pj-fad69",
      storageBucket: "fir-pj-fad69.appspot.com",
      messagingSenderId: "829563872049",
      appId: "1:829563872049:web:c4ccaf3a8cf281deec0610",
      measurementId: "G-CC9QTSDLHM"
    }
  )
}

export default firebase
