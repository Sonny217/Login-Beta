/*∆∆∆∆∆∆∆∆ Show Hidden - Password ∆∆∆∆∆∆∆∆∆*/
const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass);
        iconEye = document.getElementById(loginEye)
    
    iconEye.addEventListener('click', () => {
        //Change password to text
        if(input.type === 'password'){
            //Switch to text
            input.type = 'text'

            // Icon Change
            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-fill')
         } else{
            // Chage to password
            input.type = 'password'

            // Icon Change
            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-fill')
         }
    })    
}


showHiddenPass('login-pass', 'login-eye')