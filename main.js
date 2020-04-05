function sequence(startNumber = 0, step = 1) {
    let number = startNumber;
    return function generator() {
        let value = number; 
        number += step; 
        return value;
        
    }
    
}
let generator = sequence(10, 3);
console.log(generator()); // 10
console.log(generator()); // 13
let generator2 = sequence(7, 1);
console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); //8
console.log(generator2()); // 9
let generator3 = sequence(5,5);
console.log(generator3());
console.log(generator3());
console.log(generator3());
console.log(generator3());
let generator4 = sequence(4,8);
console.log(generator4());
console.log(generator4());
console.log(generator4());
console.log(generator4());
