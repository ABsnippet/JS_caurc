 let myHerros = ["thor","Spiderman"]

 let heropower = {
    thor : "hammer",
    Spiderman : "sling"
 }

 Object.prototype.amit = function() {
    console.log(`Amit is present in all objects`);
    
 }

//  heropower.amit();
// myHerros.amit();

Array.prototype.heyamit = function(){
    console.log(`amit says hello`);
}


// myHerros.heyamit();
// heropower.heyamit();

let anotherUsername = "ChaiaurCode     "

String.prototype.truelength = function(){
   console.log(`${this}`);

   console.log(`True length is : ${this.trim().length}`);
   
}


anotherUsername.truelength();
"amitbande".truelength();



