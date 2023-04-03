const nombreInput = document.getElementById('nombre');
const colorInput = document.getElementById('color');
const alimentoInput = document.getElementById('alimento');
const boton = document.getElementById('boton');
const resultado = document.getElementById('response');


boton.addEventListener('click', (event) => {
  event.preventDefault(); 
    const nombre = nombreInput.value;
  const color = colorInput.value;
  const alimento = alimentoInput.value;
  const animal = generateResponse(nombre, color, alimento);
  resultado.textContent = `Eres un ${animals}.`;
});

const animals = ["Ballena", "Delfín", "Tiburón", "Orca", "Pulpo", "Calamar", "Manta Raya", "Medusa", "Langosta", "Cangrejo", "Erizo de mar", "Pez payaso"];
const colors = ["Rojo", "Azul", "Verde", "Amarillo", "Naranja", "Morado", "Rosado", "Negro", "Blanco", "Gris", "Marrón", "Plateado"];
const comidas = ["que come pescado", "que no come pescado", "que aveces come pescado"];
function generateResponse() {
  const animalIndex = Math.floor(Math.random() * animals.length); 
  const colorIndex = Math.floor(Math.random() * colors.length); 
  const comidaIndex = Math.floor(Math.random() * comidas.length); 
  const animal = animals[animalIndex]; 
  const color = colors[colorIndex]; 
  const comida = comidas[comidaIndex]; 
  const response = `Eres un ${animal} ${color} ${comida}`; 
  
  document.getElementById("result").textContent = response; 
}
