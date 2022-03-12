
function showMenu(){
    var e = document.getElementById("hidden-menu");
    var t = document.getElementById("options-t");
    var x = document.getElementById("options-x");
    if(e.className==="menu"){
        e.className+=" show";
        t.className+=" hide";
        x.className="options";
    }else{
        e.className="menu";
        t.className="options"
        x.className+=" hide"
    }
    
}