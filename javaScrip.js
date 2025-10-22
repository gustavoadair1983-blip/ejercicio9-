function mostrarReceta(idReceta) {
    const panel = document.getElementById(idReceta);
    if (panel) {
      panel.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
    }
  }
  
  function cerrarReceta(idReceta) {
    const panel = document.getElementById(idReceta);
    if (panel) {
      panel.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
  
  // Cierra el modal al hacer clic fuera del contenido
  document.addEventListener('click', function(e) {
    const modal = document.querySelector('.info-receta');
    if (modal && modal.style.display === 'flex' && e.target === modal) {
      cerrarReceta(modal.id);
    }
  });
  