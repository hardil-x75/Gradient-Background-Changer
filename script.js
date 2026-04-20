let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let cssCode = document.getElementById("cssCode");

function generateGradient() {
    let gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    document.body.style.background = gradient;
    cssCode.textContent = `background: ${gradient};`;

    Swal.fire({
        title: "Gradient Updated 🎨",
        text: "Your background has been changed!",
        icon: "success",
        confirmButtonColor: "#00c9ff"
    });
}

function randomGradient() {
    function randomColor() {
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    color1.value = randomColor();
    color2.value = randomColor();

    generateGradient();
}

function copyCSS() {
    navigator.clipboard.writeText(cssCode.textContent);

    Swal.fire({
        title: "Copied! 📋",
        text: "CSS copied to clipboard!",
        icon: "success",
        confirmButtonColor: "#00ff95"
    });
}