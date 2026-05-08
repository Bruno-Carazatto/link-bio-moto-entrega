"use strict";

/*
  Link na Bio - Moto Entrega
  JS simples, leve e fácil de manter.
*/

document.addEventListener("DOMContentLoaded", () => {
  const heroCard = document.querySelector(".hero-card");
  const actionButtons = document.querySelectorAll(".action-btn");

  // Animação inicial suave do card principal
  if (heroCard) {
    heroCard.classList.add("is-visible");
  }

  // Feedback visual rápido ao tocar/clicar nos botões
  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("is-clicked");

      setTimeout(() => {
        button.classList.remove("is-clicked");
      }, 180);
    });
  });
});