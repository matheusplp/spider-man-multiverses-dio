document.addEventListener("DOMContentLoaded", addEventListenersCards, false);

function addEventListenersCards()
{
  const cardElements = document.getElementsByClassName('s-card');
  
  for (let index = 0; index < cardElements.length; index++)
  {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)
  }
}

function handleMouseEnter()
{
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave()
{
  this.classList.remove('s-card--hovered');
  document.body.id = ``;
}