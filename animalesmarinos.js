const nombreInput = document.getElementById('nombre');
const colorInput = document.getElementById('color');
const alimentoInput = document.getElementById('alimento');
const boton = document.getElementById('boton');
const resultado = document.getElementById('resultado');


boton.addEventListener('click', (event) => {
  event.preventDefault(); 
    const nombre = nombreInput.value;
  const color = colorInput.value;
  const alimento = alimentoInput.value;
  const animal = calcularAnimal(nombre, color, alimento);
  resultado.textContent = `Eres un ${animal}.`;
});

function calcularAnimal(nombre, color, alimento) {
    let animal;
    if (nombre.length % 2 == 0) {
      animal = 'delfín';
    } else {
      animal = 'tiburón';
     
    }
    if (color.toLowerCase() == 'azul') {
      animal += ' azul';
     
    }
    else{
      animal += ' negro';
      
    }
    if (alimento.toLowerCase() == 'pescado') {
      animal += ' que come pescado';
    } else {
      animal += ' que no come pescado';
    }
    return animal;
  }
  