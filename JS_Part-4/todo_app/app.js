let todo = [];

let req = prompt("What would you like to do?").toLowerCase();

while (true) {
    if (req === "exit") {
        console.log("Exiting the app. Goodbye!");
        break;
    }

    if (req === "list") {
        console.log("**********");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("**********");
    } else if (req === "add") {
        let newTodo = prompt("Enter new todo");
        todo.push(newTodo);
        console.log("Added todo");
    } else if (req === "delete") {
        let index = parseInt(prompt("Enter index to delete"));
        if (!Number.isNaN(index) && index >= 0 && index < todo.length) {
            let deleted = todo.splice(index, 1);
            console.log(`Deleted todo: ${deleted}`);
        } else {
            console.log("Invalid index");
        }
    } else {
        console.log("Invalid request");
    }

    // Update the request for the next loop iteration
    req = prompt("What would you like to do?").toLowerCase();
}
