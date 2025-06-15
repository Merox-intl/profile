function openLink(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.social-button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    setInterval(() => {
        let bg = `linear-gradient(${getRandomAngle()}, ${getRandomLightRGBA()}, ${getRandomLightRGBA()}, ${getRandomLightRGBA()})`;
        document.body.style.backgroundImage = bg;
    }, 2000);
});

function getRandomLightRGBA() {
    const r = Math.floor(150 + Math.random() * 95);
    const g = Math.floor(150 + Math.random() * 95);
    const b = Math.floor(150 + Math.random() * 95);
    const a = Math.random().toFixed(2);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function getRandomAngle() {
    const rAngle = Math.floor(Math.random() * 360);
    return `${rAngle}deg`;
}