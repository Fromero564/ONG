let submitButton = document.querySelector('form.formCreate');
let description = document.querySelector('.description');
let nombre = document.querySelector('input.form-input');
let category = document.querySelector('.category');
let imagen = document.querySelector('.imagenForm');
let precio = document.querySelector('.priceForm');


submitButton.addEventListener('submit', function(e) {
    e.preventDefault();
   
    if (nombre.value.length < 5) {
        alert('Colocar nombre');
        return;
    }if (category.value !== '1' && category.value !== '2' && category.value !== '3') {
        alert('Por favor seleccione una categoría válida');
  return;
    }  

    if (imagen.files.length === 0) {
      alert('Por favor seleccione una imagen');
      return;
    }

 
    if (description.value.length < 20) {
        alert('Colocar descripción de alc menos 20 caracteres');
        return;
    } 

     if (!precio.value) {
      alert('Por favor ingrese un precio al producto');
      return;
    }
    form.submit();
});


