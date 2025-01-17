// PROMISES IN JAVASCRIPT
// const promise = new Promise((resolve, reject) => {
//     // perform some asynchronous operations
//     if("dateTime" === "Good Morning" ){
//         resolve('Success!')
//     } else {
//         reject('Invalid dateTime')
//     }
// })

const fetchData = new Promise((resolve, reject) => {
  const data = true;

  if (data) {
    resolve("Data Fetched Successfully!");
  } else {
    reject("Failed to fetch data");
  }
});
// using the promise.
fetchData
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// Chaining Promises
const returnFive = new Promise((resolve, reject) => {
  const data = true;

  if (data) {
    resolve(5);
  } else {
    reject("No data available");
  }   
});

returnFive
  .then((value1) => {
    console.log("from step1:", value1);
    return value1 + 1;
  })
  .then((value2) => {
    console.log("from step2:", value2);
    return value2 * 2;
  })
  .then((value3) => {
    console.log("from step3:", value3);
    return value3 + 8;
  })
  .then((finalResult) => console.log("Final result:", finalResult))
  // Error Handling
  .catch((error) => console.error("Error:", error))
// using .finally
// .finally executes code regardless of whether the promise is resolved or rejected. It's often used for cleanup tasks.
  .finally(()  => console.log("Draw the curtain"))


