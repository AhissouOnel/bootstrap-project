window.onload = () => {
    console.log("hello world");

    var connexion = document.querySelector('.btn .btn-success .logout');
    var inscription = document.querySelector('.login');
    //var modalInscription = document.querySelector('.modal .modal-inscription');
    const modalInscription = new bootstrap.Modal(document.querySelector('.modal-inscription'))


    /*inscription.addEventListener('click', (event) => {
        event.preventDefault()
        modalInscription.style.display = "block"
    })*/
}