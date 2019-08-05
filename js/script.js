
// 1.
function divisibleByThreeAndFive(a, b, c) {
    let n = "";
    if (a % 3 === 0 && a % 5 === 0)
        n += a + " ";
    if (b % 3 === 0 && b % 5 === 0)
        n += b + " ";
    if (c % 3 === 0 && c % 5 === 0)
        n += c + " ";

    return n;
}

// 2.
function canFormTriangle(a, b, c) {
    if ((a + b) < c || (a + c) < b || (b + c) < a) {
        return 0;
    } else {
        if (a === b && a === c)
            return "Bərabərtərəfli";
        else if (a === b || a === c || c === b)
            return "bərabəryanlı";
        else
            return "müxtəliftərəfli";
    }
}

// 3.
function divisibleBySixAndNine() {
    let six = 0, nine = 0;
    for (let i = 10; i < 100; i++) {
        if (i % 6 == 0) {
            // console.log(i);
            six++;
            if (i % 9 == 0) {
                nine++
                // console.log(i);
            }
        }
    }
    return "iki rəqəmli ədədlərin " + six + " ədədi 3ə və 6ya bölünür, bunların " + nine + " ədədi həmçinin 9a da bölünür"
}

// 1.
function divisibleByEight(a, b) {
    function hmm(k, s){
        let result = "";
        if (k % 2 === 0) {
            result += s + " ədədi 2yə";
            if (k % 4 === 0) {
                result += ", 4ə";
                if (k % 8 === 0) {
                    result += ", 8ə"
                }
            }
            result += " bölünür"
        } else
            result = s + " ədədi 2yə və 4ə bölünmür"
        return result;
    }
    

    return hmm(a,"a") + "\n" + hmm(b,"b");
}

// 2.
function threeDigitPrimes() {
    for (let i = 100; i < 1000; i++) {
        let k = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0)
                k = false;
        }
        if (k)
            console.log(i)
    }
}

// 3.
function anotherFunction() {
    let n = 1, count = 0;
    for (let i = 5; i < 40; i += 2) {
        n *= i * 25
        count++;
    }
    return Math.pow(n, 1 / count);
}

