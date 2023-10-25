// import router from "./router.js";

// document.addEventListener("click", e => {
//     e.preventDefault()
//     if(!e.target.classList.contains("spa-link")){
//         return false
//     }

//     URLRouts(e)

// })

// function URLRouts(event){
//     window.history.pushState({}, "", event.target.href)
//     locationHandler()
// }

// async function locationHandler(){
//     const loc = window.location.pathname
//     const route = router[loc]
//     const html = await fetch(route.template).then(res => res.text())
//     document.querySelector("#page-content").innerHTML = html
// }