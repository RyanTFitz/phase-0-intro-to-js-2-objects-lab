const employee =  {
    name: "Bob Smith", 
    streetAddress: "10 Main St"
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = { ...employee};
    newEmployee[key] = value; 
    return newEmployee; 
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    const youAreFired = { ...employee }
    delete youAreFired[key];
    return youAreFired;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}