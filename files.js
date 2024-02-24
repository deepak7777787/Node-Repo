const files = require('fs');

// reading files 

// files.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line buddy!');

// writing files

// files.writeFile('./docs/blog1.txt', 'super buddy..', () => {
//     console.log('written successfully');
// });

// writing the same line on blog3.txt - not working

// let n = 1
// while(n<100) {
//     files.writeFile('./docs/blog3.txt', 'super buddy.. hello buddy.. great work buddy.. enjoy your life body', () => {
//         files.writeFile('./docs/blog3.txt', 'super buddy.. hello buddy.. great work buddy.. enjoy your life body', () => {
//             console.log('written');
//         });
//         console.log('written successfully');
//     });
//     n = n+1;
// }


// directories

// if(!files.existsSync('./assets')) {
//     files.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// } else {
//     files.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }

// deleting files 

// if(files.existsSync('./docs/deleteme.txt')) {
//     files.unlink('./docs/deleteme.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('file deleted');
//     });
// }
