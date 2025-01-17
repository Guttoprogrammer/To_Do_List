const form = document.getElementById('formLogin')
const emailInput = document.getElementById('user_email')
const senhaInput = document.getElementById('user_password')

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const  email = emailInput.value.trim();
        const password = senhaInput.value.trim();
        
        if (email === '' || password === ''){
            alert("Os valores não podem ser vazios")
        }else{
            alert("Sucesso")
        }
    });