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

const btn_inf = document.getElementById("show-inf")
const btn_ret = document.getElementById("hide-inf")
const inf = document.getElementById("inf") 
const sections = document.querySelectorAll("section")

window.onload = () => {
    sections.forEach(section => {
        section.style.display = "block"
        inf.style.display = "none"
        btn_inf.style.display = "block"
        btn_ret.style.display = "none"
    })
}

btn_inf.addEventListener("click", () => {
    sections.forEach(section => {
        section.style.display = "none"
        inf.style.display = "block"
        btn_inf.style.display = "none"
        btn_ret.style.display = "block"
    })
})

btn_ret.addEventListener("click", () => {
    sections.forEach(section => {
        section.style.display = "block"
        inf.style.display = "none"
        btn_inf.style.display = "block"
        btn_ret.style.display = "none"
    })
})