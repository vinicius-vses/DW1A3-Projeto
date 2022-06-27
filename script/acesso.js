function Login() {
  let usuario = document.querySelector('#email')

  let senha = document.querySelector('#senha')

  let listaUser = []

  let userValid = {
    nome: '',
    email: '',
    senha: ''
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser.forEach((item) => {
    if (usuario.value == item.emailCad && senha.value == item.senhaCad) {

      userValid = {
        nome: item.nomeCad,
        email: item.emailCad,
        senha: item.senhaCad
      }

    }
  })

  if (usuario == userValid.email && senha == userValid.senha) {
    window.location.href = 'indexlog.html'

    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    alert('Dados incorretos')

  }

}



