import { addAccount } from './index.js'; // calls the function addAcount from index.js

//testing
addAccount(["Alan", "Turing", "aturing@w3c.com", 58]);
addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]);
addAccount(["Catrina", "Hadi", "mcatrina@gmail.com", 19]); 
addAccount(["Catrina", "Hadi", "mcatrina@gmail.com", 15]); // will not be generated due to age (also tried testing with missing fields)
addAccount(["Catrina", "Hadi", "mcatrina@gmail.com", 14]); 