//default param
let l = (str, log_key="LOG") =>{console.log(log_key+":: "+str);};


//class
class Car{
    show() {
        l(this.name, "CAR CLASS");
    }
    constructor(car) {
        this.name = car;
    }

}



// inheritance
class RunCar extends Car{
    show(){
        l(this.name, "I'm Running ");
    }
}

export {Car, RunCar, l};
// export default l;

// module.exports = {
//     l, Car, RunCar
// };