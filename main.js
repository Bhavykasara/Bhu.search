var a=document.getElementById("a");

function search() {
    document.getElementById("a").href="https://www.google.com/search?q="+document.getElementById("search").value;
}

window.addEventListener("keypress",op);

function op(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed==13) {
        if (document.getElementById("search").value==""){
           console.log("null");
        }
        else {
            window.open("https://www.google.com/search?q="+document.getElementById("search").value,"_self");
        }
    }
}

function c() {
    $('#myModal').modal("show");
}