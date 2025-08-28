/* custom type */
// type NumString = number | string;
// type State = 'off' | 'on';
enum State {
    On = 'on',
    Off = 'off',
}

// let test: NumString = 123;
// let test: State = 'off';
let test: State = State.Off;
// test = '456';
// test = 'on';
test = State.On;

console.log(test);
/* TS Functions */
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(1,2));

/* TS Objects */
interface Instructor {
    name: string;
    course: string;
    age?: number;
}

// const ryan: Instructor = {
//     name: 'Ryan',
//     course: 'FEExpert',
//     age: 24,
// };

// const julia: Instructor = {
//     name: 'Julia',
//     course: 'AlgoExpert',
// };

/* classes */
class AlgoExpertInstructor implements Instructor {
    name: string;
    course: string;

    constructor(name: string) {
        this.name = name;
        this.course = 'AlgoExpert';
    }
}

const ryan = new AlgoExpertInstructor('Ryan');
console.log(ryan);

/* Generics */
const arr: Array<number> = [1, 2, 3];

interface GetterSetter<Key, Value> {
    set: (key: Key, value: Value) => void;
    get: (key: Key) => Value
}

class StringNumGetterSetter implements GetterSetter<string, number> {
    map: Map<string, number> = new Map();

    set(key: string, value: number): void {
        this.map.set(key, value);
    }

    get(key: string): number {
        return this.map.get(key) ?? 0;
    }
}