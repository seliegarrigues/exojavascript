/* Afficher les nombres de 1 à 20 et  à remplacer tout nombre divisible par trois par le mot « fizz », et tout nombre divisible par cinq par le mot « buzz », et tout nombre divisible par trois et cinq par le mot « fizzbuzz » */
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



for (let i = 1; i <= 20; i++) {
    let output = "";
    switch (true) {
        case (i % 3 === 0 && i % 5 === 0):
            output = "FizzBuzz";
            break;
        case (i % 3 === 0):
            output = "Fizz";
            break;
        case (i % 5 === 0):
            output = "Buzz";
            break;
        default:
            output = i;
    }
    console.log(output);
}

/* respecter cet ordre sinon cela ne fonctionnera pas */