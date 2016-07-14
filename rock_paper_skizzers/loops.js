// before; condition; after
var numLoops = 6;

for (var i = 1; i < numLoops; i+=2) {
  console.log(i);
}

/* stack trace
numLoops: 4
i: 1 -> 2 -> 3 -> 4
console: 1 2 3
*/

// while
var password = prompt("Please enter your passcode");
while(password !== "duck") {
  password = prompt("Please enter your passcode");
}

while (confirm("Would you like to play?")) {
  alert("Playing!");
}

var num = 0;
while (num < 10) {
  console.log(num);
  num += 2;
}

// for - for a certain number of iterations
// while - when you don't know the end
// do while - while ALWAYS run AT LEAST once

while (9 < 2) {
  console.log('while loop!');
}

do {
  console.log('do while!');
} while (9 < 2);

// noprotect