// import * as helpers from './helpers.js' // importing all
// import { Person } from './Person.js' // importing select
// import Person from './Person.js' // importing default

// helpers.frontEndExpert();
// helpers.algo();

// const ryan = new Person('Ryan');
// ryan.sayHello();

/* importing exports conditionally. */

const shouldLogFrontEndExpert = false;

if (shouldLogFrontEndExpert) {
    const { frontEndExpert } = await import('./helpers.js');
    frontEndExpert(); 
} else {
    const { algo } = await import('./helpers.js');
    algo();
}

