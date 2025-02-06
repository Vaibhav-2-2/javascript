function addlang(langname){
    const lang = document.createElement('li')
    lang.innerHTML = `${langname}`
    const language = document.querySelector('.language')
    language.appendChild(lang)
}

// addlang('Python')
// addlang('C++')
// addlang('C#')
// addlang('C')

function optimize(langname){
    const lang = document.createElement('li')
    lang.appendChild(document.createTextNode(langname))
    document.querySelector('.language').appendChild(lang)
}
optimize('go')

// edit lang


const lang = document.querySelector("li:nth-child(2)")
// lang.innerHTML = "C++"
const newli = document.createElement('li')
newli.textContent = "go"
lang.replaceWith(newli)


// remove lang

const langsecond = document.querySelector("li:nth-child(2)")
langsecond.remove()




