// Code your solution in this file!
function distanceFromHqInBlocks(distance1){
    let hq=42;

    if (distance1 < hq) {
       return hq-distance1  
    }
    else {
        return distance1-hq
    }        
    }
// console.log(distanceFromHqInBlocks(70))

function distanceFromHqInFeet(x){
    return distanceFromHqInBlocks(x)*264
}

// console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(a,b){
    if (b>a){
        return (b-a)*264
    }
    else { return (a-b)*264}
    
}
// console.log(distanceTravelledInFeet(34,28))

function calculatesFarePrice(x, y){
    

    if (distanceTravelledInFeet(x,y) <=400){
        return 0
    }
    else if (distanceTravelledInFeet(x,y)>400 && distanceTravelledInFeet(x,y)<=2000){
        return 0.02*(distanceTravelledInFeet(x,y)-400)
    }
    else if (distanceTravelledInFeet(x,y) >2000 && distanceTravelledInFeet(x,y) <=2500){
        return 25*(distanceTravelledInFeet(x,y)-400)

    }
    else if (distanceTravelledInFeet(x,y)>2500){
        return 'cannot travel that far'
    }
}

console.log(calculatesFarePrice(34,32))