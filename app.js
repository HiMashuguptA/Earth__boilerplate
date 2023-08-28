//body
var bodyvar=document.body
//four button
var climatevar=document.getElementById("climate")
console.log("climate",climate)
var consumptionvar=document.getElementById("consumption")
console.log("consumption",consumption)
var resourcesvar=document.getElementById("resources")
console.log("resources",resources)
var peoplevar=document.getElementById("people")
console.log("people",people)
//save text
var savevar=document.getElementById("save")
//frame
var frame=document.getElementById("frame")
//variable declareation Done------------

consumptionvar.onclick=()=>{
    //background 
    bodyvar.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png)"
    bodyvar.style.backgroundSize="100% 100%"

    //frame
    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    //text
    savevar.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers."
    //buttons
    consumptionvar.style.background="#27AE60"
    //consumptionvar.style.transform="0.2s"
    //consumptionvar.style.opacity=".2"
    peoplevar.style.background = "transparent"
    resourcesvar.style.background ="transparent"
    climatevar.style.background="transparent"
    
}
resourcesvar.onclick=()=>{
    bodyvar.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png)"
    bodyvar.style.backgroundsize="100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savevar.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle."
    resourcesvar.style.background="#EB9455"
    peoplevar.style.background ="transparent"
    climatevar.style.background="transparent"
    consumptionvar.style.background="transparent"
}


climatevar.onclick=()=>{
    bodyvar.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png)"
    bodyvar.style.backgroundsize="100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savevar.innerHTML=" Do your bit! Save trees, use renewable energy sources and prefer to travel green."
    climatevar.style.background="#367EFE"
    // climateVar.style.background ="#367EFE"
    resourcesvar.style.background ="transparent"
    peoplevar.style.background="transparent"
    consumptionvar.style.background="transparent"
}

peoplevar.onclick=()=>{
    bodyvar.style.background="url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png)"
    bodyvar.style.backgroundSize="100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savevar.innerHTML=" Do your bit! Never waste  food.Rather offer it to people or animals who are in need."
    peoplevar.style.background="#DF4855"
    resourcesvar.style.background ="transparent"
    climatevar.style.background="transparent"
    consumptionvar.style.background="transparent"
    

}