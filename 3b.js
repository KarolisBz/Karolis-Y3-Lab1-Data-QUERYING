// fields
const stringArray = ["Default1", "Default2"];

// functions
let addTask = (task) => {
    // adding task
    stringArray.push(task);

    // printing indication
    console.log("Added " + task + " to task array!")

    // returning number of elements in array
    return (stringArray.length);
}


// running tests
console.log(addTask("homework")); // adding task

