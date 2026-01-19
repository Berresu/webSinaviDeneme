let refsItem = document.querySelectorAll(".referansKutu");

refsItem.forEach((item, index)=>{
    item.addEventListener("click", function(){
        alert((index + 1) + ". referansımızın detay sayfasına yönlendiriliyorsunuz...");
    });

    item.style.cursor = "pointer";
});