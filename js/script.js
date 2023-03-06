
let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function(){
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;


    text = text.trim();
    let words = text.split(" ");
    let clenlist = words.filter(function(elm){
        return elm != "";
    });
    document.getElementById("word").innerHTML = clenlist.length;
});