//1
function fiveToOneHundred(){
 for(let i = 5; i <= 100; i++){
     console.log(i);
 }
}

//fiveToOneHundred();

//2 
function MultiplesOfThree(){
    for(let i = 1; i <= 100; i++){
        if( i % 3 === 0){
            console.log(i);
        }
    }
}
//MultiplesOfThree();

//3
function multiplesOfThreeOrFive(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(i);
        }
    }
}

//multiplesOfThreeOrFive()

//4
function untilNum( end ){
    for(let i =1; i <= end; i++){
        console.log(i);
    }
}
//untilNum(20);

//5
function multiply (a , b) {
    return a * b;
    
}

//console.log(multiply(10, -5))

//6
function add(a, b){
    if(a === b){
    return (a+b)*3;
 }else 
    return a+b;
}
//console.log(add(5, 5));

//7
function negative( num ) {
    if(num < 0){
        return true 
    } else {
        return false
    }
}

//console.log(negative(-9))

//8 
function traingleArea(h, b){
    return (h*b)/2;
}

//console.log(traingleArea(6, 8))

//9
function betweenTwentyAndForty ( num ) {
    if(num > 20 && num < 100 ){
        return true
    } else 
    return false
}
 
 //console.log(betweenTwentyAndForty(869))
 
 //10
 function largest (a, b, c){
     if(a > b && a > c){
         console.log(a);
     } else if( b > a && b > c){
         console.log(b);
     } else {
         console.log(c);
     }
 }
 //largest(30, 22, 17);
 
 //BONUS
 //1