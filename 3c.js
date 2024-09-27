// fields
const stringArray = ["Default1", "Default2"];

// functions
let addTask = (task) => {
    // adding task
    stringArray.push(task);

    // printing indication
    console.log("Added new task!")

    // returning number of elements in array
    return (stringArray.length);
}

let listAllTasks = () => {
    // prints each task in array "stringArray"
    stringArray.map(
        (task) => {console.log(task)}
    );
}

// running tests
listAllTasks()
console.log(addTask("homework")); // adding task
listAllTasks()
