function getAreaOfCircle (radius) {
    let area = Math.PI * Math.pow(radius, 2);
    return `The area of a circle with radius of ${radius} is ${area}`
}
console.log(getAreaOfCircle(3));

function getCircumferenceOfCircle (radius) {
    let circumference = Math.PI * (radius * 2);
    return `The circumference of a circle with radius of ${radius} is ${circumference}`;
}
console.log(getCircumferenceOfCircle(4));

function getAreaOfSquare (side) {
    let area = side * side;
    return `The area of a square with side ${side} is ${area}`
}
console.log(getAreaOfSquare(5));

function getAreaOfTriangle (base, height) {
    let area = (base * height) / 2;
    return `The area of a triangle with base ${base} and height ${height} is ${area}`
}
console.log(getAreaOfTriangle(5,6))