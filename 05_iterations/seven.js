const nm = [10,20,30,4,0,5,6,23]

const n = nm.map((num) => num*10 )
            .map((num)=>num+1)
            .filter((num)=>num>40)


console.log(n);
