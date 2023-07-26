import { configureStore } from "@reduxjs/toolkit";

import gradientReducer from "./reducers/gradientReducer";

// à la création du store, configurStore va appeler tous les reducers
// de tous les states en leur passant aucun argument, c'est donc
//  les arguments par défaut des reducers qui vont être utilisés pour initialiser les states
const store = configureStore({
	// objet reducer : contient les proprietés
	//  qui seront les differents state de notre store( ex: user, gradient, theme...)
	// dont les valeurs seront les fonctions reductrices de ces states.
	// on code les reducer à part dans des fichiers propes à chaque state
	reducer: {
		gradient: gradientReducer,
		
		banane: (
			state = { text: "miam les bananes" },
			action = { type: "INIT" }
		) => {
			switch (action.type) {
				case "CHANGE_ALL_COLORS": {
					return { text: "J'ai bien mangé" };
				}

				default:
					return state;
			}
		},
	},
});

// on exporte le store par default pour pouvoir l'importer
// et appeler les methodes (dispatch(), subscribe() et getState()
export default store;
