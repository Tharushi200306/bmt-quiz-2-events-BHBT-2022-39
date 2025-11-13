const container = document.getElementById('event-container');

events.forEach(event => {
  const card = document.createElement('div');
  card.classList.add('event-card');

  card.innerHTML = `
    <img src="${event.image}" alt="${event.title}">
    <h2>${event.title}</h2>
    <p><strong>Type:</strong> ${event.type}</p>
    <p><strong>Date:</strong> ${new Date(event.date).toLocaleString()}</p>
    <p>${event.description}</p>
  `;

  container.appendChild(card);
});

