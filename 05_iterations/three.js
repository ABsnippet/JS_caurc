let arr = [1,2,3,4,5,6,7,8,9,0]

// for (const ele of arr) {
//     console.log(ele)
// }

// let str = "My Name is AMit"

// for (const element of str) {
//     console.log(element);
    
// }

//Maps   : unique values are stored

const map = new Map()
map.set('in','91')
map.set('fr','92')
map.set('uk','91')
map.set('uk','91')

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myobj = {
    'game_1':'nfs',
    'game_2':'gta'
}

for (const key of myobj) {
    console.log(key,`:-`,value);
    
}//objects are not iteratable by for of loops