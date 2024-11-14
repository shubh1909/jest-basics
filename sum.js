function sum(a,b) {
    return a+b;
}

function fetchData(callback){
    setTimeout(() => {
        callback("Shubh is testing");
    }, 1000); // 1 second delay using setTimeout
}

function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Shubh is testing");
        }, 1000); // 1 second delay using setTimeout
    });
}

module.exports = {
    sum,
    fetchData,
    fetchPromise
};