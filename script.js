const input = [1, 2, 3, 4];
const output = document.querySelector("#output");

// Initial promise that resolves after 3 seconds
new Promise((resolve) => {
    setTimeout(() => {
        resolve(input);
    }, 3000);
})
.then((arr) => {
    // First transformation: Filter out odd numbers
    const filteredArr = arr.filter(num => num % 2 === 0);
    
    // Display after 1 second delay
    return new Promise((resolve) => {
        setTimeout(() => {
            output.innerHTML = filteredArr.join(",");
            resolve(filteredArr);
        }, 1000);
    });
})
.then((filteredArr) => {
    // Second transformation: Multiply even numbers by 2
    const multipliedArr = filteredArr.map(num => num * 2);
    
    // Display after 2 seconds delay
    return new Promise((resolve) => {
        setTimeout(() => {
            output.innerHTML = multipliedArr.join(",");
            resolve();
        }, 2000);
    });
});
