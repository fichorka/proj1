const app = document.getElementById('app')

const stars = []
let details

positionStar(createStar(), [10, 10])
positionStar(createStar(), [80, 10])
positionStar(createStar(), [20, 50])
positionStar(createStar(), [30, 30])
positionStar(createStar(), [50, 40])
positionStar(createStar(), [90, 40])
positionStar(createStar(), [60, 50])
positionStar(createStar(), [10, 60])
positionStar(createStar(), [30, 70])
positionStar(createStar(), [80, 70])
positionStar(createStar(), [50, 80])
positionStar(createStar(), [70, 90])
positionStar(createStar(), [20, 80])

stars.forEach(s => app.appendChild(s))

function createStar() {
    const star = document.createElement('div')
    star.classList.add('star')
    stars.push(star)
    star.addEventListener('click', e => {
        showDetails()
    })
    return star
}

function starCoords(star) {
    return [parseFloat(star.style.left), parseFloat(star.style.top)]
}

function positionStar(star, coords) {
    star.style.left = coords[0] + '%'
    star.style.top = coords[1] + '%'
}

function showDetails() {
    details = document.createElement('div')
    details.classList.add('details')
    details.addEventListener('click', () => {
        hideDetails()
    })
    app.appendChild(details)
}

function hideDetails() {
    app.removeChild(details)
}
