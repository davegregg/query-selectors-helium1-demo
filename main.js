let userSelectedTheme = "dark-mode"

// h2:hover {
//    font-size: 3em;
// }
let h2 = document.querySelector("h2")
let paragraphs = Array.from(document.querySelectorAll("p")) // NodeList -> Array

for (let index = 0; index < paragraphs.length; index += 1) {
    let p = paragraphs[index]
    p.style.outline = "3px dotted black"
}

if (userSelectedTheme === "dark-mode") {
    h2.style.color = "white"
    h2.style.backgroundColor = "black"
    // h2.classList.add("dark-mode")
    // console.log(h2)
}

let thirdParagraph = document.querySelector(".third")
console.log(thirdParagraph)
thirdParagraph.style.fontWeight = "bold"

let rootElement = document.querySelector("html")
console.log(rootElement)

// kebab case: font-size
// camel case: fontSize
