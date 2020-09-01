var username = document.getElementById('username')
var password = document.getElementById('password')

username.addEventListener('focusin', () => {
    username.style.width = '33rem'
    username.style.borderColor = '#92ff92'
})
username.addEventListener('focusout', () => {
    username.style.width = '25rem'
    username.style.borderColor = '#005db4'
})

password.addEventListener('focusin', () => {
    password.style.width = '33rem'
    password.style.borderColor = '#92ff92'
})
password.addEventListener('focusout', () => {
    password.style.width = '25rem'
    password.style.borderColor = '#005db4'
})