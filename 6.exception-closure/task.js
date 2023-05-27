function parseCount (number) {
    if(Number.isNaN(Number.parseFloat(number))) {
        throw new Error('Невалидное значение');
    }else {
        return Number.parseFloat(number);
    }
}

function validateCount (number) {
    try {
        return parseCount(number);
    }catch (error) {
        return error
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if(a + b < c || b + c < a || a + c < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        this._perimeter = this.a + this.b + this.c;
        return this._perimeter;
    }

    get area() {
        let halfP = this.perimeter / 2;
        this._area = Number(Math.sqrt((halfP) * (halfP - this.a) * (halfP - this.b) * (halfP - this.c)).toFixed(3));
        return this._area;
    }
 
}

function getTriangle(a, b, c){
    try{
        return new Triangle(a ,b, c);
    }catch(error) {
        return {
           get area() {return 'Ошибка! Треугольник не существует'},
           get perimeter() {return 'Ошибка! Треугольник не существует'}
        }
    }
}

// const triangle = new Triangle(2,5,5);
// console.log(triangle.perimeter)
// console.log(triangle.area)

console.log(validateCount("ыфва"));

// const triangle = getTriangle(1,3,100);

// triangle.perimeter = "неправильное значение";
// triangle.area = "неправильное значение";
//  console.log(triangle.area)
//  console.log(triangle.perimeter)
