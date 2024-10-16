let firstSpaceFlightYear = 1961;
let leapYearCount = 0;
let iterationsForFirstFlight = 0;
let iterationsForLeapYears = 0;

for (let year = 1800; year <= 2020; year++) {
    // Проверка на первый полет человека в космос
    iterationsForFirstFlight++    
    if (year === firstSpaceFlightYear) {
        console.log(iterationsForFirstFlight++);
    }

    // Проверка на високосный год
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapYearCount++;
    }
    
    iterationsForLeapYears++;
}
console.log(leapYearCount++);