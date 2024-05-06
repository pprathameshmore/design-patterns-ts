class Counter {
    private static instance: Counter;
    number: number = 0;

    private constructor() {}

    public static getInstance(): Counter {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }
        return Counter.instance;
    }

    public count() {
        return this.number;
    }
}

const counter1 = Counter.getInstance();
const counter2 = Counter.getInstance();

console.log(counter1.count());
console.log(counter1.count());
