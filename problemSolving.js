
/* ================================
         Task 1 : anaToVori
=================================== */ 
let ana = -0;
function anaToVori(ana){
    if((typeof ana != 'number') || ana < 0){
        console.log("Please Insert Valid Input to check Vor")
        return false;
    }
    else if( ana >= 0 ){
        result = ana * 0.0625
        // console.log(result);
    }
    else{
        console.log("Please Insert Valid Input to check Vor")
        return false;
    }
    return result;
    
}
// const vori = anaToVori(ana);
// console.log(vori)

/* ================================
     Task 2 : pandaCost
=================================== */
let shingara = 1;
let shomocha = 1;
let zilapi = 1;

function pandaCost(shingara,shomocha,zilapi){
    
    if(typeof shingara === 'number' && typeof shomocha === 'number' && typeof zilapi === 'number') {
        if (shingara >=0 && shomocha >=0 && zilapi >=0){

            shingaraTotal = shingara * 7;
            shomochaTotal = shomocha * 10;
            zilapiTotal = zilapi * 15;
            
            Total = shingaraTotal + shomochaTotal + zilapiTotal;
            
            // console.log(Total)
        }
        else if(shingara <=0 && shomocha <=0 && zilapi <=0){
            console.log("Please Insert Valid Input to check pandaCost")
            return false;
        }
        else{
            console.log("Please Insert Valid Input to check pandaCost")
            return false;
        }
}
else{
    console.log("Please Insert Valid Input to check pandaCost")
    return false;
}
 return Total;

}

// const totalOrder = pandaCost(shingara,shomocha,zilapi);
// console.log(totalOrder)


/* ================================
     Task 3 : picnicBudget
=================================== */
let persons = 101
function picnicBudget(persons){
    const fiveThousand = 5000;
    const fourThousand = 4000;
    const threeThousand = 3000;
    if(typeof persons === 'number'){
        if( persons > 0 && persons <= 100 ){
            const totalBudget =  persons * fiveThousand;
            return totalBudget;
        } else if ( persons > 100 && persons <= 200){
            const firstHundred = 100 * fiveThousand;
            const restPerson = persons - 100;
            const secondHundred =  restPerson * fourThousand;
            const totalBudget = firstHundred + secondHundred;
            return totalBudget;
        } else if(persons >= 201) {
            const firstHundred = 100 * fiveThousand;
            const secondHundred =  100 * fourThousand;
            const restPerson = persons - 200;
            const restCount = restPerson * threeThousand;
            const totalBudget = firstHundred + secondHundred + restCount;
            return totalBudget;
        }
        else {
            console.log("Please Insert Valid Input to check pandaCost")
            return false;
        }   
    } else {
        console.log("Please Insert Valid Input to check pandaCost")
        return false;
    }    

}
// const totalCost = picnicBudget(persons);
// console.log(totalCost)


/* ================================
     Task 4 : oddFriend
=================================== */

const friendName = ['farhan','tasnova','fairooz','mahi','razel']
function oddFriend(friendName){
    let oddsName = '';
    if(typeof friendName === 'object' && friendName != ""){
        for(friend of friendName){
        nameOdd = friend.length;
            if(nameOdd %2 ==1 && friend != 'number'){
                oddsName = friend;
                break;
            }
            
        }
    }
    else{
        console.log("Please insert a Name of Valid Array please")
    }
    return oddsName;
}
// const oddName = oddFriend(friendName);
// console.log(oddName)
