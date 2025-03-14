// ******************************* Promises ************************************
// EXAMPLE 01 [resolve]
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise one task completed");
    resolve();
  }, 3000);
});

promise1.then(() => {
  console.log("promise one resolved");
});

// EXAMPLE 02 [reject]
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise 2 task could not complete");
    reject();
  }, 3000);
});

promise2.catch(() => {
  console.log("sorry promise 2 has been rejected");
});

// EXAMPLE 03 [parameters in resolve]
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise 3 task done");
    resolve({ username: "hooriya", email: "coder404@error.com" });
  }, 2000);
});

promise3.then((para) => {
  console.log(`username : ${para.username} user email : ${para.email}`);
});

//EXAMPLE 04 [conditional based promises]
//lets suppose that my friend borrowed some money from me and she said she will return me on this monday if she has returned print 'Thanks friend to return my money on time' but if she did not return print 'when will u return my money ?'
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let returned = false;
    if (returned) {
      resolve();
    } else {
      reject();
    }
  }, 2000);
});

promise4.then(() => {
  console.log("Thanks friend to return my money on time 🤗");
});

promise4.catch(() => {
  console.log("when will u return my money ?😕");
});

promise4.finally(() => {
  console.log("I will not give u money again 😑");
});

// ******************** handle promise with async await *****************************
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve("no error ");
    } else {
      reject("ERROR! Something went wrong....");
    }
  }, 2000);
});

async function consumedpromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedpromise5();

// ******************** fetch with async await ****************************
async function getAllUsers() {
  try {
    const data = await fetch("https://api.github.com/users");
    const response = await data.json();
    console.log(response);
  } catch (error) {
    console.log(`ERROR! ${error}`);
  }
}
getAllUsers();
