(function() {
    var answer = prompt("Which Number should I end Fizz Buzz with.");
    number = parseInt(answer);
    if (number >= 1) {
        for (var i = 1; i <= number; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                document.write("FizzBuzz");
            } else if (i % 3 == 0) {
                document.write("Fizz");
            } else if (i % 5 == 0) {
                document.write("Buzz");
            } else {
                document.write(i);
            }
        }
    } else {
        alert("You must enter a number greater than 1 with no decimal points to begin the fizz buzz challenge.")
    }
})();
