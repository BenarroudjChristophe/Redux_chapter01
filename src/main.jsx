// == Imports
import { randomHexColor, generateSpanColor } from "./utils/color";
import store from "./store";
import "./styles/index.scss";
import {
	CHANGE_ALL_COLORS,
	CHANGE_FIRST_COLOR,
	CHANGE_LAST_COLOR,
	CHANGE_TO_LEFT,
	CHANGE_TO_RIGHT,
	angleChange,
} from "./store/reducers/gradientReducer";

// == State

// DISPATCH = demander au store de faire une action

store.dispatch({ type: "MON_ACTION" });

// == Rendu dans le DOM
function renderNbColors() {
	const { nbColors } = store.getState().gradient;

	document.querySelector(".nbColors").innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
	const { direction, firstColor, lastColor } = store.getState().gradient;

	document.querySelector(".gradient").style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
	const { firstColor, lastColor } = store.getState().gradient;

	const firstSpan = generateSpanColor(firstColor);
	const lastSpan = generateSpanColor(lastColor);

	const result = `${firstSpan} - ${lastSpan}`;

	document.querySelector(".colors").innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

store.subscribe(() => {
	renderNbColors();
	renderGradient();
	renderColors();
});
// == Controls
document.getElementById("randAll").addEventListener("click", () => {
	// debug
	console.log("Random all colors");
	// data
	store.dispatch(CHANGE_ALL_COLORS());

	// ui
});

document.getElementById("randFirst").addEventListener("click", () => {
	// data
	store.dispatch(CHANGE_FIRST_COLOR());
	// ui
});

document.getElementById("randLast").addEventListener("click", () => {
	// data
	store.dispatch(CHANGE_LAST_COLOR());
	// ui
});

document.getElementById("toLeft").addEventListener("click", () => {
	// data
	store.dispatch(CHANGE_TO_LEFT());
	// ui
});

document.getElementById("toRight").addEventListener("click", () => {
	// data
	store.dispatch(CHANGE_TO_RIGHT());
	// ui
});

document.getElementById("to45").addEventListener("click", () => {
	// data
	// const change45 = angleChange("45deg");
	store.dispatch(angleChange("45deg"));
	// ui
});
document.getElementById("to135").addEventListener("click", () => {
	// data
	// const change135 = angleChange("135deg");
	store.dispatch(angleChange("135deg"));
	// ui
});
document.getElementById("to225").addEventListener("click", () => {
	// data
	// const change225 = angleChange("225deg");
	store.dispatch(angleChange("225deg"));
	// ui
});
document.getElementById("to315").addEventListener("click", () => {
	// data
	// const change315 = angleChange("315deg");
	store.dispatch(angleChange("315deg"));
	// ui
});
