console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const liItems = 3 // number of li items in ul

/*
// ------------ Without structure above -------------------
// ----------------- Creating ul --------------------------
const navSection = document.querySelector('nav')

const text1 = document.createTextNode('Without structure:')
document.body.insertBefore(text1, navSection)

const ul = document.createElement('ul')
navSection.insertBefore(ul, null)
// --------------------------------------------------------

// ------------ Creating three li in ul -------------------
const ulSection = document.querySelector('ul')
for (let i = 0; i < liItems; i++) {

    const li = document.createElement('li')
    ulSection.insertBefore(li, null)

}
// --------------------------------------------------------

// ------------ Create a for li items ---------------------
const liSection = document.querySelectorAll('li')
for (let i = 0; i < liItems; i++) {

    const a = document.createElement('a')
    liSection[i].insertBefore(a, null)

}
// --------------------------------------------------------

// ------ Create attributes for a in li elements ----------
const aSection = document.querySelectorAll('a')
aSection[0].innerText = 'home'
aSection[0].setAttribute('href', '/')

aSection[1].innerText = 'gallery'
aSection[1].setAttribute('href', '/gallery')

aSection[2].innerText = 'contact'
aSection[2].setAttribute('href', '/contact')
// --------------------------------------------------------
*/

// ------------- With structure above ---------------------
const navSection = document.querySelector('nav')
const text2 = document.createTextNode('With structure:')
document.body.insertBefore(text2, navSection)

const ul = document.createElement('ul')
navSection.insertBefore(ul, null)

menuItems.forEach(function (item) {
    const li = document.createElement('li')
    const a = document.createElement('a')

    li.appendChild(a)
    ul.appendChild(li)

    a.innerText = item.text
    a.href = item.url

})