/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i <= 100; i++) {
    if (i > 1) { // Skip checking for 1
        let sqrt = Math.sqrt(i);
        if (Number.isInteger(sqrt)) { // Check if i is a perfect square
            console.log('First square number encountered:', i);
            break; // Stop the loop
        }
    }

    console.log(i);
}
