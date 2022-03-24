"use strict";

// DOM MANIPULATION
const btnChange = document.querySelector(".change");
const btnGo = document.querySelector(".go");
const btnBanzai = document.querySelector(".bushidobtn");
const btnAddCard = document.querySelector(".add__card");

const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");

const lifePoints1 = document.getElementById("points--1");
const lifePoints2 = document.getElementById("points--2");
const atkEl = document.getElementById("ATK");
const atkDefEl = document.getElementById("ATK/DEF");

const containerBushido = document.querySelector(".accumulo");
const containerCarte = document.querySelector(".container__carte");
let lifepoints = 0;
let atk = 0;
let atkDef = 0;

// Cambio giocatore attivo

btnChange.addEventListener("click", function () {
    player1.classList.toggle("active");
    player2.classList.toggle("active");
});

// DAMAGE STEP

btnGo.addEventListener("click", function () {
    atk = Number(atkEl.value);
    atkDef = Number(atkDefEl.value);

    if (player1.classList.contains("active")) {
        lifepoints = Number(lifePoints2.textContent) - (atk - atkDef);
        lifePoints2.textContent = lifepoints;
    } else {
        lifepoints = Number(lifePoints1.textContent) - (atk - atkDef);
        lifePoints1.textContent = lifepoints;
    }
});

// function damageStep(LP, atk, atkDef){

// }

// BUSHIDO

containerBushido.innerHTML = "";
btnBanzai.addEventListener("click", function () {
    const html = `<img
    src="img/bushido.jpg"
    alt="Segnalino bushido"
    class="segnalino"
    height="45rem"
/>
`;

    containerBushido.insertAdjacentHTML("beforeend", html);
});

containerBushido.addEventListener("click", function () {
    containerBushido.removeChild(document.querySelector("img"));
});

// btnAddCard.addEventListener("click", function () {
//     const nomeCarta = prompt("Nome carta");
//     const html = `<p>${nomeCarta}<p/>

// `;
//     containerBushido.insertAdjacentHTML("beforeend", html);
// });

player1.addEventListener("click", function () {
    if (player2.classList.contains("active")) {
        changePlayer();
    }
});

player2.addEventListener("click", function () {
    if (player1.classList.contains("active")) {
        changePlayer();
    }
});

function changePlayer() {
    player1.classList.toggle("active");
    player2.classList.toggle("active");
}
