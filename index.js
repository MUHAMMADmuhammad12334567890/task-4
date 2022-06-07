// Создаем теги
const div = document.createElement('div')
const input = document.createElement('input')
const button = document.createElement('button')
const div1 = document.createElement('div')
const total = document.createElement('b')
let i = 0;


div.className = 'class_list'
input.className = 'input_class'
button.className = 'button_class'
div1.className = 'list_class'

div1.append(total)
// Добавляем теги в body
document.body.prepend(div1)
document.body.prepend(div)
div.prepend( input, button)

// Задаем им текст
button.textContent = 'Отметить'


// Создаем функии
button.addEventListener('click', (e) => {
    if (input.value === '') return

createDeleteElements(input.value)
input.value = ''

})


function createDeleteElements(value) {
    i++
console.log(value)

const btn = document.createElement('button')
const p  = document.createElement('p')

p.className = 'class_p'
btn.className = 'btc'
div1.prepend(p)
p.textContent = input.value
btn.textContent = 'x'
p.appendChild(btn)

btn.addEventListener('click', (e) => {
i--
total.textContent = i
p.remove()
})


p.addEventListener('click', (e) => {
p.classList.toggle('p-active')

})
total.textContent = i
}


// const createElement = (value) => {
//     console.log(value)
// }

