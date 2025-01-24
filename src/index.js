import JSConfetti from 'js-confetti'
import './index.css';
import babeImage from '../babe.jpeg';

const imgElement = document.createElement('img');
imgElement.src = babeImage; // Dynamically assign the Webpack-processed path
imgElement.alt = 'sucre';
const imgContainer = document.querySelector('.img');
imgContainer.innerHTML = '';
document.querySelector('.img').appendChild(imgElement);

const jsConfetti = new JSConfetti()

const rewardContainer = document.getElementById('reward-container')
document.getElementById("celebrate-button").addEventListener("click", fireConfetti, getRandomNumber)
const rewardButton = document.getElementById("reward-button").addEventListener("click", function() {
    rewardContainer.style.display = "none"
    const timeHide = setTimeout(function() {
        return rewardContainer.style.display = "block"
    }, 1000)
    reward.textContent = getRandomNumber();
    
})
let reward = document.getElementById('show-reward')
function fireConfetti() {
    jsConfetti.addConfetti({
        confettiRadius: 4,
        confettiColors: [
            '#FE486C', '#1BCA8D', '#AEBCCD'
        ],
        confettiNumber: 100,
        emojis: ['🌐', '💘❤', '⚗️', '☄️','🍻🎉', '💍'],
        emojiSize: 25,
    })
}

function getRandomNumber() {
    return (Math.random() * 3).toFixed(2);
}