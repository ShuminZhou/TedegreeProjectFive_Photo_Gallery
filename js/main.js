$('#photo-gallery').lightGallery(); 


const $searchBar = $(".search-input");
const $imgs = $("img");

$searchBar.on("keyup",function(){
    $imgs.show();        
    let searchVal = $searchBar.val().toLowerCase();  
    for(i=0;i<$imgs.length;i++){
        let allCaptions = $imgs[i].getAttribute("title");
        console.log(allCaptions.includes(searchVal));
       }
})

