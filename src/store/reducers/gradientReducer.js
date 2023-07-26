import { randomHexColor } from "../../utils/color";

const initialState = {
	firstColor: "#e367a4",
	lastColor: "#48b1f3",
	direction: "90deg",
	nbColors: 0,
};
export function angleChange(angle) {
	return {
		type: "CHANGE_TO_ANGLE",
		payload: angle,
	};
}

// à la création du store, configureStore
//  va appeler tous les reducers de tous les states en ne leur passant aucun argument, c'est donc les arguments par défaut des reducers qui vont être utilisés pour initialiser les states

// l'action par défaut prend un type
//  qui n'existe pas dans notre switch pour tomber intentionnellement dans le case par défaut
export default function gradientReducer(
	// toutes les actions du reducer (les cases) doivent obligatoirement
	//  retourner un state (= un objet qui sera considéré comme la nouvelle valeur du state)

	state = initialState,
	action = { type: "INIT" }
) {
	// le reducer fait un switch sur la propriété "type" de l'objet "action"
	//  qu'il reçoit en paramètre depuis le dispatch(action)
	switch (action.type) {
		// TODO : changer la valeur de firstColor (#fff)
		case "CHANGE_FIRST_COLOR": {
			//ou en un ligne
			return {
				...state,
				firstColor: randomHexColor(),
				nbColors: state.nbColors + 1,
			};
		}

		case "CHANGE_LAST_COLOR": {
			return {
				...state,
				lastColor: randomHexColor(),
				nbColors: state.nbColors + 1,
			};
		}

		case "CHANGE_ALL_COLORS": {
			return {
				...state,
				firstColor: randomHexColor(),
				lastColor: randomHexColor(),
				nbColors: state.nbColors + 2,
			};
		}

		case "CHANGE_TO_LEFT": {
			return {
				...state,
				direction: "270deg",
			};
		}

		case "CHANGE_TO_RIGHT": {
			return {
				...state,
				direction: "90deg",
			};
		}
		case "CHANGE_TO_ANGLE": {
			return {
				...state,
				direction: action.payload,
			};
		}
		// case par default qui retourne le state tel quel, va nous servir à initialiser le store
		default:
	}
	return state;
}

export const CHANGE_FIRST_COLOR = () => {
	return { type: "CHANGE_FIRST_COLOR" };
};
export const CHANGE_LAST_COLOR = () => {
	return { type: "CHANGE_LAST_COLOR" };
};
export const CHANGE_ALL_COLORS = () => {
	return { type: "CHANGE_ALL_COLORS" };
};
export const CHANGE_TO_LEFT = () => {
	return { type: "CHANGE_TO_LEFT" };
};
export const CHANGE_TO_RIGHT = () => {
	return { type: "CHANGE_TO_RIGHT" };
};
export const CHANGE_TO_ANGLE = () => {
	return { type: "CHANGE_TO_ANGLE" };
};
