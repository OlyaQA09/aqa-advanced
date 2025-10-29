const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: "2024"
};

const car2 = {
    brand: "BMW",
    model: "M5",
    owner: "Olya"
};

const car3 = { ...car1, ...car2 };
console.log(car3);
