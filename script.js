const ob = new IntersectionObserver((es) => {
    es.forEach(e => {
        if(e.isIntersecting){
            e.target.classList.add("show")
        }
    })
})

let h_el = document.querySelectorAll(".hidden")
h_el.forEach(el => {
    ob.observe(el)
})