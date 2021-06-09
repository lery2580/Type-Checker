const sentenceTag = document.querySelector('input[type="text"]')

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