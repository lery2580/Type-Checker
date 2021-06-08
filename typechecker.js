const sentenceTag = document.querySelector('input[type="text"]')

const outputTag = document.querySelector("section.output")

// when i type in my sentence tag, update the output tag accordingly

sentenceTag.addEventListener("keyup", function(){
    outputTag.innerHTML = sentenceTag.value
})