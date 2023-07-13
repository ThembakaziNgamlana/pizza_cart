const counter1 = Counter();
const counter2 = Counter();
const counter3= Counter();
// add the counter
counter1.increment();
counter1.increment();
counter1.increment();

counter2.increment();
counter2.increment();

counter3.increment();
counter3.increment();

// prints 1
console.log(counter1.count);

//prints 2
console.log(counter2.count);