let form = document.querySelector("form")
let nam = document.querySelector("#name")
let position = document.querySelector("#position")
let fb = document.querySelector("#fb")
let git = document.querySelector("#github")
let insta = document.querySelector("#insta")
let x = document.querySelector("#x")
let n1 = document.querySelector(".name")
let title = document.querySelector(".title")
let ins=document.querySelector("#ins")
let face=document.querySelector("#face")
let github=document.querySelector("#git")
let twi=document.querySelector("#twi")
let pfp=document.querySelector("#pfp")
let img=document.querySelector(".img-fluid")
let button = document.querySelector("button")




const data = (event) => {
    event.preventDefault()
    
    if(nam.value!=""){
        n1.innerHTML=nam.value
    }
    if(position.value!=""){
        title.innerHTML=position.value
    }
    
    if(insta.value!=""){
        ins.href=insta.value
    }
    
    if(fb.value!=""){
        face.href=fb.value
    }
    if(git.value!=""){
        github.href=git.value
    }
    if(x.value!=""){
        twi.href=x.value
    }
    if(pfp.value!=""){
        img.src=pfp.value
    }
    form.reset()
}

form.addEventListener("submit",data)