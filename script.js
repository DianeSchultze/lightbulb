const lightbulb = document.getElementById("lightbulb");
const toggleSwitch = document.getElementById("toggleSwitch");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

toggleSwitch.addEventListener("change", function () {
	const isOn = toggleSwitch.checked;

	// Lightbulb
	lightbulb.src = isOn ? "lightbulb_on.webp" : "lightbulb_off.webp";
	lightbulb.alt = isOn ? "Lightbulb On" : "Lightbulb Off";

	// Text
	h2.textContent = isOn ? "Lights are on" : "Lights are off";

	// Background
	document.body.style.backgroundColor = isOn ? "#ffffff" : "#1c1c1c";

	// Title color
	h1.style.color = isOn ? "#333" : "#ffffff";
});
