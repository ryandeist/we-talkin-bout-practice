/* Cookies */
// document.cookie = `name=Ryan; secure; samesite=strict`;

// path=/mydirectory For use in a particular file.
// secure Only works with HTTPS instead of HTTP.
// samesite=strict Prevent Cross-Site Scripting
// max-age=0 Number of secs we want the cookie to last.
// expires=${new Date().toUTCString()} Set Experation of Date.

// console.log(document.cookie);

// accessing a cookie's value
// const course = document
//     .cookie
//     .split('; ')
//     .find(cookie => cookie.startsWith('course='))
//     .split('=')[1];

// console.log(course);

/* Web Storage API */

/* Local Storage, does not expire */
// localStorage.setItem('user', 'Ryan');
// localStorage.setItem('course', 'FrontEndExpert');

// console.log(localStorage.getItem('user'));
// localStorage.removeItem('user');
// localStorage.clear(); // removes everything from local storage
// console.log(localStorage.getItem('course'));
// console.log(localStorage.getItem('user'));

/* Session Storage, expires at the end of session */

/* indexedDb */
const request = indexedDB.open('myDatabase', 1);

/* Building the Database */
// request.addEventListener('upgradeneeded', event => {
//     const database = event.target.result;
//     console.log(database)
//     const store = database.createObjectStore('users', {keyPath: 'id'});
//     store.createIndex('name', 'name');

//     store.add({
//         id: 0,
//         name: 'Ryan',
//         course: 'FrontEndExpert'
//     });

//     store.add({
//         id: 1,
//         name: 'Julia',
//         course: 'AlgoExpert'
//     });
// })

/* Connecting to existing database */
// request.addEventListener('success', event => {
//     const database = event.target.result;
//     database
//         .transaction(['users'], 'readwrite')
//         .objectStore('users')
//         .add({
//             id: 2,
//             name: 'Victor',
//             course: 'MLExpert',
//         });
// })

/* Deleting from the DB */
request.addEventListener('success', event => {
    const database = event.target.result;
    database
        .transaction(['users'], 'readwrite')
        .objectStore('users')
        .delete(2);
})

/* Get one record from database */
request.addEventListener('success', event => {
    const database = event.target.result;
    const req = database
        .transaction(['users'], 'readwrite')
        .objectStore('users')
        .get(0);
    
    req.addEventListener('success', event => {
        console.log(event.target.result.name);
    })
})

/* GET from index of records */
request.addEventListener('success', event => {
    const database = event.target.result;
    const req = database
        .transaction(['users'], 'readwrite')
        .objectStore('users')
        .index('name')
        .get('Ryan');
    
    req.addEventListener('success', event => {
        console.log(event.target.result.course);
    })
})