const num = [1,2,3]

// const n = num.reduce(function(Acc,currval){
//     console.log(`acc: ${Acc}`);
//     console.log(`currval: ${currval}`);

    
//     return Acc+currval;
// },1)

const m = num.reduce((acc,val)=>acc+val,1)

console.log(m);
