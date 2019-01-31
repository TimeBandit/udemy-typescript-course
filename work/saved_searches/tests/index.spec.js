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
 it("should create the user if not present", () => {
  // setup
  SavedSearches.userId = "harry";
  SavedSearches.saveSearch("id123", "Item");
  SavedSearches.userId = "larry";
  SavedSearches.saveSearch("id456", "Design");
  // assert
  assert.deepInclude(JSON.parse(localStorage.settings)[0], { userId: "harry" });
  assert.deepInclude(JSON.parse(localStorage.settings)[1], { userId: "larry" });
 });
 it("should store a search against a user", () => {
  // setup
  SavedSearches.userId = "harry";
  SavedSearches.saveSearch("id123", "Item");
  SavedSearches.userId = "larry";
  SavedSearches.saveSearch("id456", "Design");
  // assert
  assert.deepInclude(
   JSON.parse(localStorage.settings)[0]["customer-projects"][0]["saved-searches"][0],
   { searchId: "id123", type: "Item" }
  );
  assert.deepInclude(
   JSON.parse(localStorage.settings)[1]["customer-projects"][0]["saved-searches"][0],
   { searchId: "id456", type: "Design" }
  );
 });
 it.only("should move a search to the head of the list if already present", () => {
  // setup
  SavedSearches.userId = "harry";
  SavedSearches.saveSearch("id123", "Item");
  SavedSearches.saveSearch("id456", "Design");
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
