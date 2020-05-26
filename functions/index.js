const admin = require('firebase-admin')
const messaging = require('firebase-messaging')
const firebase = require('firebase')

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://witties.firebaseio.com"
});

const functions = require('firebase-functions');
const faker = require('faker');
// Initialize products array
const products = [];

// Max number of products
const LIMIT = 100;

// Push a new product to the array
for (let i = 0; i < LIMIT; i++) {
  products.push({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  });
}

exports.addUser = functions.auth.user().onCreate((user) => {
  console.log("Userul cu emailul "  + user.email + " are tokenul ")
  firebase.messaging().getToken().then(token => console.log(token)).catch(err => console.log(err))
}) 