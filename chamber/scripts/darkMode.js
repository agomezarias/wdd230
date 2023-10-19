const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("Dark Mode 🌑")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		body.style.background = "#000";
		body.style.color = "#fff";
		// main.style.color = "#8fc3cb";
		modeButton.textContent = "🌕 Light Mode";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
		body.style.background = "#fff";
		body.style.color = "#000";

		// main.style.color = "#004466";
		modeButton.textContent = "Dark Mode 🌑";
	}
});