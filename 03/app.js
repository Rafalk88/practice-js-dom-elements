console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

function prependBtn(container, element) {
    for (let property in buttonSettings) {
        if (property = 'attr') {
            element.setAttribute('class', buttonSettings[property]['className'])
            element.setAttribute('title', buttonSettings[property]['title'])
        }

        if (property = 'css') {
            element.style.border = buttonSettings[property]['border']
            element.style.padding = buttonSettings[property]['padding']
            element.style.color = buttonSettings[property]['color']
        }

        if (property = 'text') {
            element.innerText = buttonSettings[property]
        }
    }  
    container.insertBefore(element, null)
}

const container = document.querySelector('.parent-for-button')

const button = document.createElement('button')

prependBtn(container, button)