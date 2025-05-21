function actualizarMetodoPago() {
  const metodo = document.getElementById('metodoPago').value;
  document.getElementById('seccionTransferencia').classList.toggle('oculto', metodo !== 'transferencia');
  document.getElementById('seccionEfectivo').classList.toggle('oculto', metodo !== 'efectivo');
}

function mostrarVistaPrevia(event) {
  const archivo = event.target.files[0];
  const vista = document.getElementById('vista-previa');
  vista.innerHTML = '';
  if (archivo) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(archivo);
    vista.appendChild(img);
  }
}

function enviarWhatsApp() {
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const direccion = document.getElementById('direccion').value.trim();
  const referencia = document.getElementById('referencia').value.trim();
  const metodo = document.getElementById('metodoPago').value;
  const cantidadEfectivo = document.getElementById('cantidadEfectivo').value.trim();

  if (!nombre || !apellido || !direccion || !referencia || !metodo) {
    alert('Por favor completa todos los campos requeridos.');
    return;
  }

  let mensaje = `*Pedido para Cocina Nelsy*\n\n👤 *Nombre:* ${nombre} ${apellido}\n📍 *Dirección:* ${direccion}\n📌 *Referencia:* ${referencia}\n💰 *Método de pago:* ${metodo.toUpperCase()}`;

  if (metodo === 'transferencia') {
    mensaje += `\n💳 *Cuenta:* 4027 6658 4368 2825\n📷 *Se envió comprobante en el formulario.*`;
  } else if (metodo === 'efectivo') {
    mensaje += `\n💵 *Pagará con:* $${cantidadEfectivo}`;
  }

  const url = `https://wa.me/529992236981?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

