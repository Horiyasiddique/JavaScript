// Asyncronous JS
//setTimeOut
console.log(1);
console.log(2);
console.log(3);

setTimeout(() => {
  console.log("hello after 5 seconds");
}, 5000);

console.log(4);
console.log(5);

//Call Backs
function getUserName(username, func) {
  setTimeout(() => {
    console.log(`user name : ${username}`);
    func();
  }, 2000);
}

function getPassword(password) {
  setTimeout(() => {
    console.log(`password : ${password}`);
  }, 2000);
}

getUserName("horiya",() => {
  getPassword(123);
});

// EXAMPLE 02
function washing(callback) {
  setTimeout(() => {
    console.log("Washing done! in 4 seconds");
    callback();
  }, 4000);
}

function soaking(callback) {
  setTimeout(() => {
    console.log("soaking done! in 2 seconds");
    callback();
  }, 2000);
}

function drying(callback) {
  setTimeout(() => {
    console.log("drying done! in 3 seconds");
    callback();
  }, 3000);
}

function folding() {
  setTimeout(() => {
    console.log("Folding complete! in 1 second");
  }, 1000);
}

washing(() => {
  soaking(() => {
    drying(() => {
      folding();
    });
  });
});

// Promise
// EXAMPLE 01 (resolve)
function resolvedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success!");
    }, 4000);
  });
}

resolvedPromise().then((val) => {
  console.log(val);
});

//(reject)
function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("failed!");
    }, 3000);
  });
}

rejectedPromise().catch((err) => {
  console.log(err);
});

//EXAMPLE 03
function moneyReturned() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("John! note it in your diary 'I have returned your money'");
      //we can also use reject here instead of resolve
    }, 3000);
  });
}
moneyReturned()
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

//EXAMPLE 03
//same example of washing process

function washing() {
  console.log("washing started.......");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("washing done!");
    }, 4000);
  });
}

function soaking() {
  console.log("soaking started .....");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("soaking done!");
    }, 3000);
  });
}

function drying() {
  console.log("drying started....");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("drying done!");
    }, 2000);
  });
}

function folding() {
  console.log("folding started......");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("folding  complete");
    }, 1000);
  });
}
washing()
  .then((val) => {
    console.log(val);
    return soaking();
  })
  .then((val) => {
    console.log(val);
    return drying();
  })
  .then((val) => {
    console.log(val);
    return folding();
  })
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log("err!" , err);
  })
  .finally(() => {
    console.log("I do not like to wash clothes");
  });

//Async await
//same example of washing machine process

async function runWashingMachine() {
  try {
    const result1 = await washing();
    console.log(result1);
    const result2 = await soaking();
    console.log(result2);
    const result3 = await drying();
    console.log(result3);
    const result4 = await folding();
    console.log(result4);
  } catch (err) {
    console.log(err);
  }
  finally{
    console.log('I do not like to wash clothes')
  }
}

runWashingMachine();
