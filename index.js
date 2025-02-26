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

// function to add account
// export keyword so i can call this function in the test file
export function addAccount(userInfo) {
    const [firstName, lastName, email, age] = userInfo; //array of info
    if (
        userInfo.length === 4 && // all fields are present
        firstName && lastName && email && // first name, last name, and email are non empty-strings
        validator.isEmail(email) && // the email is in a valid format
        typeof age === 'number' && age >= 18 // if age is a number, and at least 18
    ) {
        const uniqueID = generateUniqueID(firstName, lastName); // then generate unique id
        const userData = `${firstName},${lastName},${email},${age},${uniqueID}\n`; // store into a data using string interpolation
        try {
            fs.appendFileSync('users.txt', userData); // save the data into a new line in users.txt file
            return true;
        } catch {
            return false;
        }
    } else {
        return false; // ret false if atleast one of the conditions is not met
    }
}