
/* ================================
         Task 1 : anaToVori
=================================== */ 

function anaToVori(ana){
    if((typeof ana != 'number') || ana <= 0){
        console.log("Please Insert Valid Input to check Vor")
        return false;
    }
    else if(ana == 0 || ana >= 0 ){
        result = ana * 0.0625
        // console.log(result);
    }
    else{
        console.log("Please Insert Valid Input to check Vor")
        return false;
    }
    return result;
    
}
const vori = anaToVori(16);
// console.log(vori)

/* ================================
     Task 2 : pandaCost
=================================== */
function pandaCost(shingara,shomocha,zilapi){
if((typeof shingara === 'number' && typeof shomocha === 'number' && typeof zilapi === 'number') && (shingara >=0 && shomocha >=0 && zilapi >=0) ){

    shingaraTotal = shingara * 7;
    shomochaTotal = shomocha * 10;
    zilapiTotal = zilapi * 15;
     
    Total = shingaraTotal + shomochaTotal + zilapiTotal;
    
    // console.log(Total)
}
else if(shingara <=0 && shomocha <=0 && zilapi <=0){
    console.log("Please Insert Valid Input to check pandaCost")
    return false;
} else{
    console.log("Please Insert Valid Input to check pandaCost")
    return false;
 }
 return Total;

}

const totalOrder = pandaCost(1,1,1);
// console.log(totalOrder)


/* ================================
     Task 3 : picnicBudget
=================================== */
function picnicBudget(persons){
if(typeof persons != 'number' ){
    console.log("Please Insert Valid Input to check pandaCost")
    return false;
}
else if(persons > 0 && persons <= 100){
    personsTotal = persons * 5000;  
    Total = personsTotal;

    // console.log(Total)
}
else if(persons > 100 && persons <= 200){
    personsTotal = persons * 4000;  
    Total = personsTotal;

    // console.log(Total)
}
else if(persons >= 201){
    personsTotal = persons * 3000;  
    Total = personsTotal;

    // console.log(Total)
}
else{
    console.log("Please Insert Valid Input to check pandaCost")
    return false;
 }
 return Total;
}

const totalCost = picnicBudget(100);
// console.log(totalCost)


/* ================================
     Task 4 : oddFriend
=================================== */

function oddFriend(friendName){
let oddsName = '';

if(typeof friendName === 'object' ){
    for(friend of friendName){
     text = friend.length;
        if(text %2 ==1){
            oddsName = friend;
            break;
        }
    }
}
else{
    console.log("Please insert a Name of Array please")
}
    return oddsName;

}
const oddName = oddFriend(['Farhan','tasnova','fairooz','mahi','razel']);
// console.log(oddName)
