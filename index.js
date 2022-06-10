function getCompliment(){
    let newCompliment = document.getElementById("compliment");
    let compliments = [];
    compliments[0] = "You look good today";
    compliments[1] = "You have style";
    let i = Math.floor(Math.random() * compliments.length);
    newCompliment.innerHTML =  compliments[i];
}