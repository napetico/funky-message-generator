// Plot: I grew up in a loving and quite peculiar family that was always eager to give me the most weird advice in the form of funky sayings.

// Message components as arrays inside and object

const messageComponents = {
    randomFeeling: ['feeling sad', 'being lazy', 'being dishonest', 'holding anger', 'acting like a jerk', 'felling like giving up'],
    familyMember: ['grandpa', 'grandma', 'dad', 'mom', 'dog'],
    sayingPartOne: ['Any job worth doing', 'When the going gets tough', 'If it ain\'t broke', 'What\'s good for the goose', 'The squeaky wheel', 'A bird in the hand'],
    sayingPartTwo: [' spoil the gravy.', ', is a penny earned', ' leave no stone unturned.', ' before they\'ve hatched.', ' is another man\'s treasure.', ' flock together.']
};
//Test >> console.log(messageComponents.randomFeeling[3]);

// Loop over the arrays in the object and create a new array with final message components

let messageArray = [];

for (let componentsArray in messageComponents) {
    let randNumber = Math.floor(Math.random() * messageComponents[componentsArray].length);
    messageArray.push(messageComponents[componentsArray][randNumber]);
    }
    if (messageArray[1] === 'dog') {
        messageArray[2] = 'Woof, woof, arf';
}
// Test >> console.log(messageArray);
