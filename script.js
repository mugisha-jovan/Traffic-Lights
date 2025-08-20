const lights = [
    document.getElementById('red'),
    document.getElementById('orange'),
    document.getElementById('green')
];
const durations = [30000, 3000, 15000]; // red: 30s, orange: 3s, green: 15s (in ms)
let current = 0;

function showLight(index) {
    lights.forEach((light, i) => {
        if (i === index) {
            light.classList.add('active');
        } else {
            light.classList.remove('active');
        }
    });
}

function nextLight() {
    showLight(current);
    setTimeout(() => {
        current = (current + 1) % lights.length;
        nextLight();
    }, durations[current]);
}

nextLight();
