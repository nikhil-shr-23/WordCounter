function atleasttwochar(text){
    const letters = text.match(/[a-z]/gi) || [];

    console.log(letters)

    return letters.length >= 2;

}




function abscencethree(text){
    for (const character of text){
        const occurences = Array.from(text).filter(very => very == character).length


        if (occurences >= 3){
            return false;
        }
     }

     return true;
    
}



const checks = [atleasttwochar,abscencethree];
const textInput = document.querySelector(".text-input")
const wordInput = document.querySelector(".word-input")
const letterInput = document.querySelector(".letter-input")
const spaceInput = document.querySelector(".space-input")

document.addEventListener('DOMContentLoaded', () => {
    const checks = [atleasttwochar, abscencethree];
    const textInput = document.querySelector(".text-input");
    const wordInput = document.querySelector(".word-input");
    const letterInput = document.querySelector(".letter-input");
    const spaceInput = document.querySelector(".space-input");

    if (!textInput || !wordInput || !letterInput || !spaceInput) {
        console.error("One or more required elements are missing from the DOM");
        return;
    }

    textInput.addEventListener("input", () => {
        const split = textInput.value.trim().split(/[\s-]/);
        const lettercount = (textInput.value.match(/[a-z]/gi) || []).length;
        const spacecount = (textInput.value.match(/\s+/g) || []).length;
        let wordCount = 0;

    outer:
        for (const text of split) {
            for (const check of checks) {
                if (!check(text)) {
                    continue outer;
                }
            }
            wordCount++;
        }
        
        // Update the DOM elements with the new counts
        wordInput.textContent = wordCount;
        letterInput.textContent = lettercount;
        spaceInput.textContent = spacecount;
    });
});



