const { IgApiClient } = require('instagram-private-api');
require("dotenv").config();
const { readFile } = require('fs');
const { promisify } = require('util');

// const readFileAsync = promisify(readFile);
const Accounts = require('./src/account');

// let alreadyReadFile;
// const ig = new IgApiClient(); // need to initialize for each user
// const path = './food.jpg';
// const waitForFileParse = async () => {
//   const file = await readFileAsync(path);
//   alreadyReadFile = file
// }

// waitForFileParse()
// console.log(Accounts, "Accounts")

// const uploadStoryToAccount = Accounts.map( account => {
//   console.log(account.id)
//   // return await processElement(object[key]);
//   async function login() {
//     ig.state.generateDevice(account.IG_USERNAME);
//     console.log(IG_USERNAME)
//     await ig.account.login(account.IG_USERNAME, account.IG_PASSWORD);
//   }

//   async function uploadNow () {
//     await login();
//     // const path = './psychopath.jpg';
//     // const file = await readFileAsync(path);
  
//     await ig.publish.story({
//       alreadyReadFile,
//     });
//   }

//   uploadNow()
  

// }); ------------------


// --------DIDNT COMPLETE THE CODE
// const uploadStoryToAccount = Accounts.map( async account => {
//   console.log(account.id);

//   async function login() {
//     ig.state.generateDevice(account.IG_USERNAME);
//     console.log(IG_USERNAME);
//     await ig.account.login(account.IG_USERNAME, account.IG_PASSWORD);
//   }

//   async function uploadNow() {
//     await login();
//     // ... your upload logic using account details
//   }

//   await ig.publish.story({
//     alreadyReadFile,
//   });

//   return { login, uploadNow }; // Return an object with the functions
// });




// async function login() {
//   ig.state.generateDevice(process.env.IG_USERNAME);
//   await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
// }

// const postStoryToInsta = async () => {
//   await login();
//   const path = './psychopath.jpg';
//   const file = await readFileAsync(path);

//   await ig.publish.story({
//     file,
//   });
// }


// ----------------------AI exitCode, how to make it work
// const uploadStoryToAccount = Accounts.map(async account => {
//   console.log(account.id);

//   async function login() {
//     ig.state.generateDevice(account.IG_USERNAME);
//     console.log(IG_USERNAME);
//     await ig.account.login(account.IG_USERNAME, account.IG_PASSWORD);
//   }

//   async function uploadNow() {
//     await login();
//     // ... your upload logic using account details
//     await ig.publish.story({
//       file,
//     });
//   }

//   // await ig.publish.story({
//   //   file,
//   // });
  

//   return { login, uploadNow }; // Return an object with the functions
// });

// const fileReadyForUpload = async () => {
  
// }


// Access the functions from the mapped elements
// const mappedAccounts = uploadStoryToAccount(Accounts);
// mappedAccounts.forEach(accountObj => {
//   accountObj.login(); // Call the login function
//   accountObj.uploadNow(); // Call the uploadNow function
//   // fileReadyForUpload();
// });

// async function uploadStoryToAccount(Accounts) {
//   return await Promise.all(Accounts.map(async (account) => {
//     console.log(account.id);

//     async function login() {
//       ig.state.generateDevice(account.IG_USERNAME);
//       console.log(IG_USERNAME);
//       await ig.account.login(account.IG_USERNAME, account.IG_PASSWORD);
//     }

//     async function uploadNow() {
//       await login();
//       // ... your upload logic using account details
//       await ig.publish.story({
//         file,
//       });
//     }

//     await uploadNow(account); // Call login and uploadNow for each account
//   }));
// }

// // Call the async function
// const uploadedStories = await uploadStoryToAccount(Accounts);

// Now you can call ig.publish.story after all uploads are complete (not needed anymore)
// await ig.publish.story({
//   file,
// });



async function uploadStoryToAccount() {
 
  try {
    // Ensure 'Accounts' and 'file' are properly defined outside the function
    const uploadedStories = await Promise.all(Accounts.map(async (account) => {
      const readFileAsync = promisify(readFile);
      const path = './temple_of_apollo_at_delphi.jpg';
      const file = await readFileAsync(path);
      const ig = new IgApiClient();
      console.log(account.id); // Assuming 'id' is a property in each account object

      // Login function (replace placeholders with actual implementation)
      async function login() {
        ig.state.generateDevice(account.IG_USERNAME);

        console.log('username',account.IG_USERNAME, account.IG_PASSWORD, 'password');
        await ig.account.login(account.IG_USERNAME, account.IG_PASSWORD);
      }

      // Upload function (replace placeholders with actual implementation)
      async function uploadNow() {
        await login();
        console.log('Uploading story for', account.IG_USERNAME);
        console.log('Password before encryption:', account.IG_USERNAME)
        await ig.publish.story({
          file,
        });
       
      }

      await uploadNow(account); // Call login and upload for each account
      
    }));
    console.log('Story uploads completed!');
  } catch (error) {
    console.error('Error during story upload:', error);
  }
}

// Call the upload function automatically when the server starts









    console.log('before, May 9th, 1659 hours, 2024')
    // postStoryToInsta();
    // uploadStoryToAccount(Accounts)
    uploadStoryToAccount();
    // uploadStoryToAccount();
    console.log('after')



  //   const transformedArray = array.map(element => {
  //     // Call multiple functions here
  //     function1(element);
  //     function2(element);
  //     // and so on...
  
  //     // Optionally, return a transformed element
  //     return transformedElement;
  // });