const { assert } = chai;
import { SavedSearches } from "../index.js";

describe(SavedSearches.name, function() {
	beforeEach(() => {
		localStorage.clear();
	});

	it("should not have a setting key", function() {
		// assert
		assert.doesNotHaveAnyKeys(localStorage, ["settings"]);
	});

	it("should create setting key if not present", () => {
		// setup
		SavedSearches.init();
		// assert
		assert.hasAnyKeys(localStorage, ["settings"]);
	});

	it("should create the default settings object", () => {
		// setup
		SavedSearches.init();
		// assert
		const settings = JSON.parse(localStorage.settings);
		assert.isArray(settings);
	});

	it.only("should store a search against a user", () => {
		// setup
		SavedSearches.init();
		SavedSearches.saveSearch("i", "Item");
		const settings = JSON.parse(localStorage.settings);
		console.log("TEST ", settings);
		assert.deepInclude(settings, { userId: "wakanda" });
	});
});

// {
//   "settings": [
//     {
//       "userId": "",
//       "customer-projects": [
//         {
//           "code": "wahdakhdjkwah",
//           "saved-searches": [
//             {
//               "id": "itemId | designCode | importCode",
//               "type": "SavedSearchType(Item, Design, Import)"
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }
