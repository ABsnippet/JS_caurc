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


### proj - 3

```javascript
const clock = document.getElementById('clock')

let date = new Date()
// console.log(date.toLocaleTimeString())

setInterval(function(){
  clock.innerHTML = date.toLocaleTimeString()
},1000)
````