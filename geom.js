class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if (this.length === this.width) {
      console.log('True');
    } else {
      console.log('False');
    }
  }
  area() {
    let squareArea = this.length * this.width
    console.log(`The area is ${squareArea}`)
  }
  perimeter() {
    let squarePerimeter = (2 * this.width) + (2 * this.length);
    console.log(`The perimeter is ${squarePerimeter}`)
  }
}

let rectangleOne = new Rectangle(4, 2);
let rectangleTwo = new Rectangle(4, 4);
let rectangleThree = new Rectangle(6,5);

rectangleOne.perimeter();
rectangleOne.isSquare();



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if(this.sideA === this.sideB && this.sideA === this.sideC){
      console.log('true');
    } else {
      console.log('false');
    }
  }
  isObtuse(){
    if(Math.pow (this.sideC, 2)> Math.pow (this.sideA, 2) + Math.pow (this.sideB, 2) ){
      console.log('Obtuse triangle: true');
    } else {
      console.log('Obtuse triangle: false');
    }
    
  }
  isIsoceles(){
    if(this.sideA === this.sideB){
      console.log('Isoceles triangle: true');
    } else {
      console.log('Isoceles triangle: false')
    }
  }
  area(){
    let s = (this.sideA + this.sideB + this.sideC)/2
    let triangeleArea = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    console.log(`The are of the triangle is ${triangleArea}`)
  }
}

let triangleOne = new Triangle(2,4,6)
let triangleTwo = new Triangle(3,1,5)
triangleOne.isObtuse();
triangleTwo.isObtuse();
triangleOne.area();
triangleTwo.area();



class LineSegment {
  constructor (x1, y1, x2, y2){
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
  }
  length (){
    let x1Y1 = Math.pow((this.x1 - this.y1), 2);
    let x2Y2 = Math.pow((this.x2 - this.y2), 2);
    let length = Math.sqrt(x1Y1 + x2Y2);
    console.log(`Length = ${length}`);
    
  }
}

let lineSegmentOne = new LineSegment(4,5,6,7)
let lineSegmentTwo = new LineSegment(7,6,2,3)
let lineSegmentThree = new LineSegment(17,6,22,3)

lineSegmentOne.length();
lineSegmentTwo.length();
lineSegmentThree.length();

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
