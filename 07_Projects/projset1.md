# Project related to DOM 
## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

```javascript
console.log(Project1)
const buttons=document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    switch(e.target.id){
      case 'grey':
       body.style.backgroundColor=e.target.id;
       break;
      case 'white':
       body.style.backgroundColor=e.target.id;
       break;
      case 'blue':
       body.style.backgroundColor=e.target.id;
       break;
      case 'yellow':
       body.style.backgroundColor=e.target.id;
       break;
    }
  })
})




```

## project 2 

``` javascript

const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  const weightGuide = document.querySelector('#weight-guide');

  
if(height===''||height<0||isNaN(height)){
 results.innerHTML = `Please Enter a valid data ${height}`;
}
else if(weight===''||height<0||isNaN(weight)){
 results.innerHTML = `Please Enter a valid data ${weight}`;
}
else{
const bmi = (weight/((height*height)/10000)).toFixed(2)
results.innerHTML = `<span>${bmi}</span>`
if(bmi<=18.7){
  weightGuide.innerHTML =`your bmi is ${bmi} and u r underweight`
}else if(bmi<24.9||bmi>18.7){
  weightGuide.innerHTML =`your bmi is ${bmi} and u r underweight`
}
else{
  weightGuide.innerHTML =`your bmi is ${bmi} and u r overweight`
}

}
```


## Project  3


```javascript
const clock = document.getElementById('clock')

let date = new Date()
// console.log(date.toLocaleTimeString())

setInterval(function(){
  clock.innerHTML = date.toLocaleTimeString()
},1000)
````
## Project  4
```javascript
let randomnum=console.log(parseInt(Math.random()*100 + 1));

const submit=document.querySelector('#subt');

const userinput  = document.querySelector('#guessField');

const guesslot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');


const startover = document.querySelector('.resultParas'); 

const p = document.createElement('p');

let prevguess= [];

let numofguess= 1;

let playgame = true;

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  })
}

function validateguess(guess){
  //
  if(isNaN(guess)){
    alert('Enter a valid number');
   } else if(guess<1){
      alert('Enter a valid +ve number');
    }
  else if(guess>100){
      alert('Enter a valid number less than 100');
    }
  else{
      prevguess.push(guess);

      if(numofguess === 11){
        displayguess(guess)
        displaymessg(`Game Over Randomnumber was ${randomnum}`)
        endgame()
      }else{
        displayguess(guess);
        checkguess(guess);
        
      }
      
    }

  }

function checkguess(guess){
//
if (guess === randomnum){
  displaymessg(`you guessed it right`)
  endgame();
}
else if(guess< randomnum) {
  displaymessg(`you guessed num is too low`);
}
else if(guess>randomnum){
  displaymessg(`your guessed num is too high`);
}

}
function displayguess(guess){
//
userinput.value = '';
guesslot.innerHTML += `${guess} `;
numofguess++;
remaining.innerHTML = `${11-numofguess}`; 
}
function displaymessg(message){
//
lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame(){
  userinput.value = '';
  userinput.setAttribute('disabled','');
  p.classList.add('#button')
  p.innerHTML = `<h2 id="newgame">Start new game </h2>`;  
  startover.appendChild(p);
  playgame = false;
  newgame();
}
function newgame(){
const newgamebutt = document.querySelector('#newgame');
newgamebutt.addEventListener('click',function(e){
   randomnum = parseInt(Math.random()*100 + 1);
   prevguess = []
   numofguess = 1
   guesslot.innerHTML = ''
   remaining.innerHTML = `${11-numofguess}`; 
   userinput.removeAttribute('disabled');
   startover.removeChild(p);
   playgame = true;
})
}
```
## Project 5

```javascript
const insert=document.getElementById('insert');

window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
  <div classs="color">
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  
  `
})

```

## Project-6
```javascript
//generate a random color 

const randomcolor = function(){
  const hex = "0123456789ABCDEF"
  let color = "#"
  for(let i=0; i<6 ; i++)
  {
     color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
}
let intervalid;

const startchangecolor = function(){
   intervalid=setInterval(changebg,2000)
function changebg(){
  document.body.style.backgroundColor = randomcolor();
  
}

};


const stopchangecolor = function(){
  clearInterval(intervalid)
  intervalid = null;
}





document.querySelector('#start').addEventListener('click',startchangecolor)


document.querySelector('#stop').addEventListener('click',stopchangecolor)

```