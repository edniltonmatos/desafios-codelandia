const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=tema]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--dark"),
    bgaaPanel: getStyle(html, "--dark-200"),
    colorHeadings: getStyle(html, "--gray-light"),
    color: getStyle(html, "--light"),
}
const darkMode = {
    bg: "#ffffff",
    bgPanel: "#c4c4c4",
    colorHeadings: "#151515",
    colorText: "#121212"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()



const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})