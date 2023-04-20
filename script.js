window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`const out = document.getElementById('output');

// Create an array of 5 promises that resolve with a random time between 1 and 5 seconds
promises = [
  new Promise(resolve => setTimeout(() => resolve(1), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(2), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(3), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(4), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(5), Math.floor(Math.random() * 5000) + 1000))
];

Promise.any(promises)
  .then(result => {
    output.innerText = `${result}`;
  })
  .catch(error => {
    console.error(error);
  });