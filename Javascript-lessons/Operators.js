//Operators are used to perform operations on variables and values. They are used to assign values, compare values, perform arithmetic operations, and more
// They are +, -, *, /, %
//logical operators examples are && AND, OR ||, NOT !, NULLISH ??, <, >, Equality ===, Equality and type ===
//These operators return a boolean value, which is either true or false.
//AND (&&) returns true if both operands are true.
//OR (||) returns true if one of the operands is true. Returns false if both operands are false.
//NOT (!) returns true if the operand is false and vice versa. Converts true to false and false to true
//NULLISH (??) returns the right-hand operand when the left-hand operand is null or undefined. Otherwise, it returns the left-hand operand
// < returns true if the left-hand operand is less than the right-hand operand
// > returns true if the left-hand operand is greater than the right-hand operand
//Equality (==) returns true if the operands are equal
//Equality and type (===) returns true if the operands are equal and of the same type

//conditional operators are used to perform different actions based on different conditions
//examples are if, else, else if, switch
//if statement executes a block of code if the condition is true
//else statement executes a block of code if the condition is false
//else if statement executes a block of code if the condition is true
//switch statement is used to select one of many code blocks to be executed
// if (condition) {block of code}else if (condition) {block of code}else {block of code}

myAge = 27;
if (myAge > 18) {
    console.log('You are an adult!');
} else if (myAge < 18) {
    console.log('You are a minor!');
} else {
    console.log('You are a teenager!');
}
if (4<7) {
    console.log('4 is less than 7');
}else if (4>7){
    console.log('4 is greater than 7');
}
else {
    console.log('4 is equal to 7');
}