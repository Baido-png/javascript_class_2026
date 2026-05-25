function greetings(name, x) {
  console.log("Hello " + name);

  x();
}

let sayBye = function() {
  console.log("Goodbye");
}

let personName  = "Samuel"

// greetings(personName, sayBye);
// sayBye()




function jsStudents(welcomeTheNewStudents, ...students)
{
    console.log(students)
    welcomeTheNewStudents("Javascript")
}

function welcomeMsg(classroom)
{
    console.log(`welcome to ${classroom} class`)
}

function pyStudents(welcomeNewStudents, ...students)
{
    console.log(students)
    welcomeNewStudents("Python")
}

jsStudents(welcomeMsg, "Samuel", "Tommy", "Tony")
pyStudents(welcomeMsg, "Mary", "Linus")