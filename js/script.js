const tabs = document.querySelectorAll('.tab')

const panels = document.querySelectorAll(".panel")

//* EVENT LISTENER

tabs.forEach((tab) => tab.addEventListener('click', onTabClick))


function onTabClick(e) {
    //* borra el borde rojo de todas las tabs

    tabs.forEach((tab) => {
        tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0')
    })

    //* escondemos todos los paneles

    panels.forEach(panel => panel.classList.add('hidden'))

    //* activamos la nueva tab en el panel , basado en el target
    e.target.classList.add('border-softRed', 'border-b-4', 'md:border-b-0')

    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden')

}

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')


btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')

    if (menu.classList.contains('flex')) {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg')
    } else {
        logo.setAttribute('src', './images/logo-bookmark.svg')
    }
}

