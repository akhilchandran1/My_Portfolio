const filterContainer = document.querySelector(".portfolio_gallery_filter"),
galleryItems = document.querySelectorAll(".portfolio_gallery_item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("portfolio_filter_item")){
     // deactivate existing active 'filter-item'
     filterContainer.querySelector(".active").classList.remove("active");
     // activate new 'filter-item'
     event.target.classList.add("active");
     const filterValue = event.target.getAttribute("data-filter");
     galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
         item.classList.add("show");
      }
      else{
        item.classList.remove("show");
        item.classList.add("hide");
      }
     });
  }
});