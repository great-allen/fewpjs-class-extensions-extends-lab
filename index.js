// Your code here
class Polygon{
    constructor(side){
        this.side =side
        this.count=side.length;
    }
    get countSides(){
        return this.side.length;
    }
    get perimeter() {
        let sum = 0;
        for (let i=0; i<this.side.length; i++) {
          sum += this.side[i];
        }
        return sum
      }

    }
    class Triangle extends Polygon{
        get isValid(){
            let sideOne = this.side[0];
            let sideTwo = this.side[1];
            let sideThree = this.side[2];
            if (sideOne + sideTwo > sideThree && sideOne + sideThree>sideTwo && sideTwo + sideThree > sideOne){
                return true;
            }
            return false;
        }
    }

    class Square extends Polygon{
        get isValid (){
            let countOne = this.side[0];
            let countTwo = this.side[1];
            let countThree = this.side[2];
            let countFour = this.side[3];
            if(countOne===countTwo && countOne===countThree && countOne===countFour){
                return true;
            }
            return false;
        }
        get area(){
            let side1 = this.side[0];
            return side1*side1;
        }
    }
