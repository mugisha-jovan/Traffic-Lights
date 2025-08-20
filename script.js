const lights = [
    document.getElementById('red'),
    document.getElementById('yellow'),
    document.getElementById('green')
];
const durations = [60000, 3000, 30000]; // red: 60s, yellow: 3s, green: 30s (in ms)
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
