function sound() {
    console.log('Play music....')
    var audio = new Audio('door.mp3');
    audio.play();
}

function ShowMessage(inputName) {
    Swal.fire({
        title: inputName + ' você é previlegiada(o).',
        width: 600,
        padding: '3em',
        background: 'white',
        backdrop: `
          #FFD70080
          left top
          no-repeat  `
    })
}

function loadData() {
    var form = document.getElementById('formCOMP');
    var formData = new FormData(form)
    var inputName = formData.get("inputName");
    var inputRent = Number(formData.get("inputRent"));
    var inputGenre = formData.get("inputGenre")
    var inputColor = Number(formData.get('inputColor'));
    if (inputName && inputRent >= 4 && inputColor >= 4 && inputGenre != 'O') {
        ShowMessage(inputName);
        sound();
    }
    form.reset();
}