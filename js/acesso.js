const userInput = document.querySelector("#user");
const senhaInput = document.querySelector("#senha");
const matheusSenha = 'dentinho'


const bd = [
    {
        user:'jvcorado',
        senha:'jvcorado'
    },
    {
        user:'dentinho',
        senha:'dentinho'
    },

]

function logar(){
    if(userInput.value == bd[0].user && senhaInput.value == bd[0].senha || userInput.value == bd[1].user && senhaInput.value == bd[1].senha  ){
        return window.location.href='cripto.html'
        
    }
    else{
        alert('User ou senha invalidos')
    }
}