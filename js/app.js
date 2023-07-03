const boton = document.querySelector('#agregar');
const textfield = document.querySelector('#textfield');
const container = document.querySelector('#cont');

function agregar() {

  if (textfield.value === '') {
    alert('No puedes agregar un elemento vacío');
    return;
  }


  const row = document.createElement('div');
  row.classList.add('row', 'row-item');

  //agregamos el elemento row al elemento container
  container.appendChild(row);

  const col1 = document.createElement('div');
  col1.classList.add('col-10');

  //agregamos el elemento col1 al elemento row
  row.appendChild(col1);

  const p = document.createElement('p');
  p.classList.add('item-p');
  p.textContent = textfield.value;
  textfield.value = '';
  col1.appendChild(p);

  const col2 = document.createElement('div');
  col2.classList.add('col-1');

  const i1 = document.createElement('i');
  i1.classList.add('bi', 'bi-check-circle-fill', 'i');
  col2.appendChild(i1);
  i1.addEventListener('click', tachar)
  row.appendChild(col2);

  const col3 = document.createElement('div');
  col3.classList.add('col-1');

  const i2 = document.createElement('i');
  i2.classList.add('bi', 'bi-trash3-fill', 'i');
  col3.appendChild(i2);
  i2.addEventListener('click', eliminar)
  row.appendChild(col3);


}

textfield.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregar();
  }
});


boton.addEventListener('click', agregar);


function tachar(e) {
  if (e.target.classList.contains('bi-check-circle-fill')) {
    const p = e.target.parentElement.parentElement.children[0].children[0];
    p.classList.toggle('tachado');
  }
}

function eliminar(e) {
  if (e.target.classList.contains('bi-trash3-fill')) {
    const row = e.target.parentElement.parentElement;
    container.removeChild(row);
  }
}

function agregarEnter(e) {
  if (e.keyCode === 13) {
    agregar();
  }
}

boton.addEventListener('keyup', agregarEnter);
