console.log('JS script working');

let btn = document.querySelector('.submit-button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('you clicked submit');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const pass = document.querySelector('#password');
    const p_text = document.querySelector('.p_');
    if (username.value.length <= 3) {
        const error_msg = document.querySelector('.error-box');
        error_msg.classList.add('error-style');
        error_msg.innerHTML = 'Username must contain atleast 4 characters';
        try {
            error_msg.classList.remove('removeerrormsg');
        } catch {
            pass;
        }
        /*
        STUFF NOT WORKING
        // error_msg.insertAdjacentElement("afterbegin", "Username must contain atleast 4 characters");
        // var error_display_node = document.querySelector('.error-box');
        // error_display_node.appendChild(document.createTextNode('Username must contain atleast 4 characters'));
        // const error_msg_text = document.querySelector('#errortext');
        // error_msg_text.innerHTML = 'Username must contain atleast 4 characters';
        // error_msg.appendChild(document.createElement('div')).textContent = 'Username must contain atleast 4 characters';
        */
        p_text.classList.add('p_invisible');
        const error_form = document.querySelector('.form-div');
        error_form.classList.add('error-form-div');
        console.log('username is not long enough.');
        // setTimeout(() => error_msg.remove(), 3000); //This is making JS lose the reference.
        setTimeout(() => error_msg.classList.add('removeerrormsg'), 3000);
        setTimeout(() => p_text.classList.remove('p_invisible'), 3000);
    }
});