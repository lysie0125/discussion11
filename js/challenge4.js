document.getElementById('challenge4_form').addEventListener('submit', function(event){
    var name = document.getElementById('name').value;
    var addr = document.getElementById('addr').value;
    var nameError = document.getElementById('nameError');
    var addrError = document.getElementById('addrError');
   
    if (name === '') {
        nameError.style.display = 'block';
        event.preventDefault();
    } else {
        nameError.style.display = 'none'
    }

    if (addr === '') {
        addrError.style.display = 'block';
        event.preventDefault();
    } else {
        addrError.style.display = 'none'
    }

});




