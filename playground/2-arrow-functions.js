// const square = function(x) {
//     return x*x;
// }

// const square = (x) => x*x;

// console.log(square(4));

const event = {
    name: 'Site Launch',
    devs: ['Brian', 'Bobby', 'Cary'],
    printDevList() {
        console.log('Dev list for ' + this.name );

        this.devs.forEach((dev)=>{
            console.log(dev + ' is attending ' + this.name);
        })
    }
}

event.printDevList();