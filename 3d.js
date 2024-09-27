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

let listAllTasks = () => {
    // prints each task in array "stringArray"
    stringArray.map(
        (task) => {console.log(task)}
    );
}

let deleteTask = (task) => {
    // finds and removes task from array "stringArray"
    let index = stringArray.indexOf(task)
    stringArray.splice(index, 1);

    // printing message to console
    console.log("Task " + task + " was deleted!")

    // returning number of elements in array
    return (stringArray.length);
}

// running tests
listAllTasks()
console.log(addTask("homework")); // adding task
listAllTasks()
console.log(deleteTask("homework")); // removing task

