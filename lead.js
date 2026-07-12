let menu = document.querySelectorAll(".menu_item");

menu.forEach(function(item){
    item.addEventListener("click", function(){
        alert(item.innerText);
    });
});