console.log('DOM');

const curr = document.querySelector('.js-curr');

const elementAbove = curr.parentElement

// 1
const newBtn = document.createElement('button')
newBtn.innerText = 'usuń z koszyka'

elementAbove.appendChild(newBtn)

// 2
const children = elementAbove.children

function addClass (item) {
    for (let i = 0; i < item.length; i++) {
        if (item[i] !== curr) {
            item[i].classList.add('siblings')
        }
    }
}
addClass(children)

// 3
const articleTitle = elementAbove.nextElementSibling
articleTitle.title = 'nextElementSibling'

// 4
const lastArticle = elementAbove.parentElement.lastElementChild
const btn = lastArticle.lastElementChild

const pElement = document.createElement('p')
pElement.innerText = 'Paragraf stworzony na potrzeby zadania.'
lastArticle.insertBefore(pElement, btn)

// 5
const cloneArticle = elementAbove.cloneNode(true)
cloneArticle.title = 'cloned article'
elementAbove.parentElement.insertBefore(cloneArticle, elementAbove)