const body = document.querySelector("body"),
sidebarOpen = document.querySelector(".sidebarOpen"),
searchToggle = document.querySelector("#searchToggle"),
siderbarClose = document.querySelector(".siderbarClose"),
contUser = document.querySelector("#contUser"),
nav = document.querySelector('#nav-bar');

// Sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
  });
  
  body.addEventListener("click" , e =>{
    let clickedElm = e.target;
  
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
  });
// search
searchToggle.addEventListener("click" , () =>{
  console.log('desde click');
  searchToggle.classList.toggle("activo");
});
// user
contUser.addEventListener("click" , () =>{
  console.log('desde click');
  contUser.classList.toggle("activo");
});
// Elimina la clase de active en un tamaño de tablet o mayores
window.addEventListener('resize', function() {
    const anchoPantalla = document.body.clientWidth;

    if(anchoPantalla >= 768) {
        nav.classList.remove('active');
    }
});

