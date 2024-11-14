const { sum, fetchData, fetchPromise } = require("./sum");

// suits in jest are basically test cases and snapshots are basically the output of the test case

// expect is a function that returns an object with a bunch of methods
// toBe is a method that checks if the actual value is equal to the expected value

// Matchers are functions that are used to check if the actual value is equal to the expected value
// like toBe, toEqual, toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy, toBeGreaterThan

// toBe is used for primitive data types
test("1. adds 1 + 2 and returns 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("2. adds 2 + 2 and returns 4", () => {
  expect(2 + 2).toBe(4);
});

// to equal is used for objects and arrays
test("3. object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// toBeFalsy is used for falsy values like false, 0, "", null, undefined, NaN
test("4. falsy values", () => {
  expect(0).toBeFalsy();
});

//toBeTruthy is used for truthy values like true, 1, "0", "false", [], {}
test("5. truthy values", () => {
  expect(1).toBeTruthy();
});

// toThrow is used for throwing errors and exceptions like throw new Error("error message")
test("6. throw error", () => {
  expect(() => {
    throw new Error("error message");
  }).toThrow();
});

// aync test is used for testing asynchronous code like setTimeout, setInterval, fetch, axios, etc.

// testing asynchronous code
test("7. fetch data", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("Shubh is testing");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});
// the work of done is that it waits for the callback to be called before it moves on to the next test.
// and if the callback is not called, the test will fail.

// testing asynchronous code using promises
test("8. fetch data using promises if it resolves", () => {
  return expect(fetchPromise()).resolves.toBe("Shubh is testing");
});

// test("9. fetch data using promises if it rejects", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

test("10. fetch data using promises another way", async () => {
  const data = await fetchPromise();
  expect(data).toBe("Shubh is testing");
}); // this is the same as the above test but using async/await instead of promises

//mock functions and spy are used to test the behavior of a function without actually calling the function
test("11. mock function implementation", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  expect(mockCallback(1)).toBe(43);
  expect(mockCallback).toHaveBeenCalledWith(1);
});

// spying on a function is used to test the behavior of a function without actually calling the function
test("12. spying on a function", () => {
  const video = {
    play() {
      return true;
    },
  };
  const spy = jest.spyOn(video, "play"); // spyOn is used to spy on a function
  video.play(); // this will call the play function

  expect(spy).toHaveBeenCalled(); // this will check if the play function was called
  spy.mockRestore(); // this will restore the original function so that it can be called again
});
