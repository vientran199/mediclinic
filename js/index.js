const nav = document.getElementById('header-nav')
const lineBottom = nav.querySelector('.line-bottom')
const liNav = nav.getElementsByClassName('nav-item')
const padding = 21

lineBottom.style.width = `${liNav[0].clientWidth - 2 * padding}px`
lineBottom.style.left = padding + 'px'

for (let i = 0; i < liNav.length; i++) {
    liNav[i].addEventListener('mouseover', () => {
        let acc = 0
        for (let j = 0; j < i; j++) {
            acc += liNav[j].clientWidth
        }
        const left = acc + padding
        lineBottom.style.left = `${left}px`
        lineBottom.style.width = `${liNav[i].clientWidth - 2 * padding}px`
    })
}

nav.addEventListener('mouseout', () => {
    lineBottom.style.width = `${liNav[0].clientWidth - 2 * padding}px`
    lineBottom.style.left = padding + 'px'
})