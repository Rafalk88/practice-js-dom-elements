console.log('DOM');

const ul = document.querySelectorAll('a')
let attribute

for (let i = 0; i < ul.length; i++) {
    if (ul[i].getAttribute('data-url')) {
        attribute = ul[i].getAttribute('data-url')
        ul[i].setAttribute('href', attribute)
    }
}