// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
  }
  const employee = {
    name: 'Moha',
    age: 22,
    position: 'MARKETER'
  };
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
 employee[key] = value;
 return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = { ...employee };
    delete clonedEmployee[key];
    return clonedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
