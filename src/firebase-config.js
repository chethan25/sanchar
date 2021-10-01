const config = {
  apiKey: 'AIzaSyBrnEYqps7IjjzTh1MZGUFx764-NAu5Mvs',
  authDomain: 'sanchar-faf9f.firebaseapp.com',
  projectId: 'sanchar-faf9f',
  storageBucket: 'sanchar-faf9f.appspot.com',
  messagingSenderId: '351218695718',
  appId: '1:351218695718:web:dfcae9e0c27815b341f0e7',
  measurementId: 'G-LS7JGERBB0',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
