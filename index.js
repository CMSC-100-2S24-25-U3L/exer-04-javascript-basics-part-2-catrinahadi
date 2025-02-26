import { v4 as uuid } from 'uuid'; //import using es modules
import validator from 'validator';
import fs from 'fs';

// function to generate a unique ID
function generateUniqueID(firstName, lastName) {
    const firstLetter = firstName.charAt(0).toLowerCase(); // gets first letter in lowercase
    const lowerLastName = lastName.toLowerCase(); // converts last name to lowercase
    const uuidWithoutHyphens = uuid().replace(/-/g, '').slice(0, 8); // removes hyphens & gets first 8 characters
    const uniqueID = `${firstLetter}${lowerLastName}${uuidWithoutHyphens}`; // creates unique ID using string interpolation
    return uniqueID; // returns the generated unique ID as a string
}