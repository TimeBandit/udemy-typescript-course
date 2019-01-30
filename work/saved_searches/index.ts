console.log("Loading SavedSearches... 🏃");
import { IdType, SearchType, CusomerProjectSettings } from "./src/types";
export abstract class SavedSearches {
	static init() {
		if (!localStorage.settings) {
			localStorage.settings = "[]";
		}
	}

	static getSearches(id: IdType) {}

	static userIndex(id: string, settings: CusomerProjectSettings[]): number {
		if (!localStorage.settings) {
			SavedSearches.init();
			return -1; // same as what findIndex would return if it fails
		} else if (!settings.length) {
			return -1;
		} else {
			return settings.findIndex(user => {
				return user.userId === id;
			});
		}
	}

	static makeUser(
		userId: string = "",
		id: string = "",
		type: SearchType = SearchType.Item
	): CusomerProjectSettings {
		return {
			userId,
			"customer-projects": [
				{
					code: "userSettings",
					"saved-searches": [
						{
							id,
							type
						}
					]
				}
			]
		};
	}
	static saveSearch(userId: string = "", id: string = "", type: SearchType) {
		let settings: CusomerProjectSettings[];
		try {
			settings = JSON.parse(localStorage.settings);
			const position = SavedSearches.userIndex(id, settings);
			if (position > -1) {
				localStorage.settings[position]["saved-searches"].push({ id, type });
			} else {
				const newUser = SavedSearches.makeUser(userId);
				console.log(newUser, settings);
				settings.push(newUser);
				localStorage.settings = JSON.stringify(settings);
			}
		} catch (error) {}
	}
}
