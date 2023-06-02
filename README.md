# funky-message-generator
In this project, I wrote a code that generates a funny message about the weird sayings a person received from their family while growing up.

## Plot:
This person grew up in a peculiar and funny family that was always dropping the weirdest bits of advice in the form of old sayings that clearly made no sense.

## Code Structure:
1. I built the components for the message in 4 different arrays (randomFeeling, familyMember, sayingPartOne, and sayingPartTwo).
2. I placed the arrays inside an object (messageComponents).
3. I wrote a function to iterate over each array.
4. On each round, the function will generate a random number, use it as the index to fetch one item from the array and push it into a new array (messageArray).
5. This new array will store the four components (a feeling, a relative, a saying intro, and a saying outro) to assemble the message.
6. I used the string interpolation and the messageArray items to put together the message in a last variable called funkyMessage.
7. Finally, print funkyMessage to the console every time we run the script.js file.

## Contribute to the code:
We can improve the code by:
+ Adding more feelings to the randomFeelings array. Just make sure they make sense with the prefix "Every time I was..."
+ Adding more family members. A cat will be fun to include. Just make sure to put a conditional that changes the saying intro to "Meow, Meow, prr"
+ Adding more intros and outros to the sayings. Outros open with a space ( ) and close with a dot (.)
+ If you include a chunk of a saying to the intros array, don't include the other chunk in the outro options (and vice-versa). We don't want to have the possibility of assembling a saying that makes sense. Remember, this family is a little nuts.

## Feedback & Contact
Thanks for taking a look at this code. Feedback is very welcome!
Find me in:
[My LinkedIn](https://www.linkedin.com/in/napoleon-bazan/)
[My Website](https://www.supervillanos.co)

*** Final note: I'll come back later to add HTML and CSS to this project to make it a funny website to generate incoherent sayings. ***
