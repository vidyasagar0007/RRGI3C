const fs = require('node:fs');


//===========================================================================
//==================create a Vidya Folder =======================================
//===========================================================================

// fs.mkdir('Vidya', (err) => {
//     if (err) {
//         console.error("Error", err);
//         return;
//     }
//     console.log("Directory 'Vidya' created successfully!");
// });


//===========================================================================
//==================create a note file=======================================
//===========================================================================

// fs.writeFile('Vidya/notes.txt', 'Welcome to my Node.js file!', (err) => {
//     if (err) {
//         console.error("Error creating file:", err);
//         return;
//     }
//     console.log("File 'notes.txt' created inside 'Vidya' folder!");
// });


//===========================================================================
//==================Read the contents=======================================
//===========================================================================



// fs.readFile('Vidya/notes.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log("File Contents:");
//     console.log(data);
// });

//===========================================================================
//==================Add more text to the file (Append)============================
//===========================================================================


fs.appendFile('Vidya/notes.txt', '\nThis is a new line added later.', (err) => {
    if (err) {
        console.error("Error appending file:", err);
        return;
    }
    console.log("New text added successfully!");
});