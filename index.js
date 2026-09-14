"use strict";

const mainMessage = document.getElementById("main-message");
const subMessage = document.getElementById("sub-message");
const clock = document.getElementById("clock");

const messages = [
    "INITIALIZING",
    "SIGNAL ACTIVE",
    "SYSTEM ONLINE",
    "OBSERVE",
    "PROCESSING",
    "SIGNAL LOCKED"
];

const subMessages = [
    "DIGITAL SIGNAL ACTIVE",
    "CRT INTERFACE RUNNING",
    "VISUAL CHANNEL OPEN",
    "DATA STREAM ACTIVE",
    "ANALOG EMULATION ONLINE",
    "3x0c3t_L4B"
];

let messageIndex = 0;

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

function changeMessage() {
    messageIndex = (messageIndex + 1) % messages.length;

    mainMessage.querySelector("span").textContent =
        messages[messageIndex];

    subMessage.textContent =
        subMessages[messageIndex];
}

function randomGlitch() {
    const intensity = Math.random();

    if (intensity < 0.35) {
        mainMessage.style.transform =
            `translate(${(Math.random() - 0.5) * 3}px, ${(Math.random() - 0.5) * 2}px)`;

        setTimeout(() => {
            mainMessage.style.transform = "";
        }, 80);
    }
}

updateClock();

setInterval(updateClock, 1000);
setInterval(changeMessage, 5000);
setInterval(randomGlitch, 650);
