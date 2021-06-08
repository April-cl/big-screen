const {clientWidth, clientHeight} = document.documentElement
window.pageWidth = (clientWidth / clientHeight) > (16 / 9) ? clientHeight * (16 / 9) : clientWidth
const pageHeight = pageWidth / (16 / 9)
const initFontSize = `<style>html{font-size: ${pageWidth / 100}px}</style> `

document.write(initFontSize)
root.style.width = pageWidth + 'px'
root.style.height = pageHeight + 'px'
root.style.marginTop = (clientHeight - pageHeight) / 2 + 'px'