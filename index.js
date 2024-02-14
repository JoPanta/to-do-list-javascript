let toDos = [];

let action = ""

while (action.toLowerCase() !== "quit") {
    
    action = prompt("What would you like to do?");
    
    if (action.toLowerCase() === "new") {
        let newToDo = prompt("Enter new ToDo.");
        toDos.push(newToDo);
    }
    else if (action.toLowerCase() === "list") {
        console.log("************");
        for (let i = 0; i < toDos.length; i++) {
            console.log(`${i}: ${toDos[i]}`);
        }
        console.log("************");
    }
    else if (action.toLocaleLowerCase() === "delete") {
        let index = prompt("Enter the index of the ToDo to delete: ");
        
        if (toDos[index]) {
            toDos.splice(index, 1);
        }
        else {
            alert("Invalid index. ToDo not found.");
        }
           
    }
        
    else if (action.toLocaleLowerCase() === "quit") {
        break;
        
    }
        
    else {
        alert("Comand not valid.")
    }

}