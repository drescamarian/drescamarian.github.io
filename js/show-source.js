const body = document.body
const pageContainer = document.createElement('div')
const codeInner = document.createElement('code')
const codeContainer = document.createElement('pre')

body.style.margin = '0'
pageContainer.style.padding = '2rem 0.5rem'

codeContainer.style.background = '#151515'
codeContainer.style.padding = '2rem'
codeContainer.style.color = 'white'
codeContainer.style.fontSize = '.9rem'
codeContainer.style.marginBottom = '0'

// remove this script
document.querySelector('script[src$="show-source.js"]').remove()

// get content
const content = document.documentElement.innerHTML

// add highlight.js
const highlightJSTheme = document.createElement('link')
highlightJSTheme.rel = 'stylesheet'
highlightJSTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/base16/chalk.min.css'
document.head.append(highlightJSTheme)
const highlightJS = document.createElement('script')
highlightJS.addEventListener('load', applyHighlightJS)
highlightJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js'
body.append(highlightJS)

codeContainer.innerText = content

// wrap original content
pageContainer.append(...document.querySelectorAll('body > *'))
body.append(pageContainer)
body.append(codeContainer)

// split page 50/50
body.style.display = 'grid'
body.style.gridTemplateColumns = 'repeat(auto-fit, minmax(min(423px, 100%), 1fr))'

function applyHighlightJS() {
    codeContainer.innerHTML = hljs && hljs.highlight(content, {language: 'HTML', ignoreIllegals: true}).value
    //hljs && hljs.highlightElement(codeContainer)
}

// add github link
const ghlink = document.createElement('a')
const ghStyle = ghlink.style
ghStyle.position = 'fixed'
ghStyle.bottom = '6px'
ghStyle.right = '4px'
ghStyle.background = 'url("preview/github-logo-white.png") -20px'
ghStyle.filter = 'drop-shadow(2px 3px 3px #aaa)'
ghStyle.backgroundSize = 'cover'
ghStyle.width = '5rem'
ghStyle.height = '5rem'
ghlink.href = 'https://github.com/galymax/nes-ml'
body.append(ghlink)