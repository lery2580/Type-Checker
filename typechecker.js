const sentenceTag = document.querySelector('input[type="text"]')

const typesizeTag = document.querySelector('input[name="typesize"]')

const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector('input[name="Lineheight"]')

const italicTag = document.querySelector('input[name="italic"]')

const lineheightOutput = document.querySelector("span.lineheight-output")

const outputTag = document.querySelector("textarea.output")

const originalText = outputTag.value

// when i type in my sentence tag, update the output tag accordingly
// if there's no value,
sentenceTag.addEventListener("keyup", function(){
    if(this.value){
        outputTag.value = this.value
    } else {
        outputTag.value = originalText
    }
})

// when i type in my output tag, upadte the sentence tag accordingly
outputTag.addEventListener("keyup", function(){
    sentenceTag.value = this.value
})

// when i change my typesize slider, update the text to it and 
// change the outputTag's font size

typesizeTag.addEventListener("input", function(){
    outputTag.style.fontSize = this.value + "px"
    typesizeOutput.innerHTML = this.value + "px"
})


lineheightTag.addEventListener("input", function(){
    outputTag.style.lineHeight = this.value 
    lineheightOutput.innerHTML = this.value
})

// when i change my italic checkbox, update the font style to either
// normal or italic if it's checked or not

italicTag.addEventListener("change", function(){
    if (this.checked) {
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})