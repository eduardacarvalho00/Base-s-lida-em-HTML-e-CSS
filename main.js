let btn = document.querySelector('.eye-icon');
btn.addEventListener('click', function() {
    let input = document.querySelector('password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});