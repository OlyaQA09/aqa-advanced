function divide(numerator, denominator) {
    if (denominator === 0 || typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Введені некоректні дані");
    }
    else { return numerator / denominator };
}

try {
    let numerator = "Hello";
    let denominator = 5;
    console.log(divide(numerator, denominator));
} catch (error) {
    console.log(error);
} finally {
    console.log("Робота завершена");
}

try {
    let numerator = 10;
    let denominator = 0;
    console.log(divide(numerator, denominator));
} catch (error) {
    console.log(error);
}
finally {
    console.log("Робота завершена");
}

try {
    let numerator = 10;
    let denominator = "Hi";
    console.log(divide(numerator, denominator));
} catch (error) {
    console.log(error);
}
finally {
    console.log("Робота завершена");
}

try {
    let numerator = 10;
    let denominator = 5;
    console.log(divide(numerator, denominator));
} catch (error) {
    console.log(error);
}
finally {
    console.log("Робота завершена");
}
