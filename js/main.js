$('#photo-gallery').lightGallery(); 

const $searchBar = $(".search-input");
const $imgs = $("img")

$searchBar.on("keyup",function(){
    const filterValue = $searchBar.val().toLowerCase(); 
    $imgs.parent().show();
    for(let i = 0; i < $imgs.length; i += 1){
        var titles = $imgs[i].getAttribute("title");
        if(titles.includes(filterValue)){
            $imgs.not(`[title*="${filterValue}"]`).parent().hide();
        }
    }
})