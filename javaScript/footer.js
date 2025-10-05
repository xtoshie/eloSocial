const footer = document.createElement('footer');

// Espaço em branco
const space = document.createElement('p');
space.innerHTML = '&nbsp;';
footer.appendChild(space);

// Descrição da ONG
const description = document.createElement('p');
description.innerHTML = '<strong>Elo Social:</strong> Conectando boas ações a grandes causas.';
footer.appendChild(description);

// Direitos autorais
const copyright = document.createElement('p');
copyright.innerHTML = '&copy; 2025 Plataforma ONGs';
footer.appendChild(copyright);

// Adiciona o footer ao final do body
document.body.appendChild(footer);