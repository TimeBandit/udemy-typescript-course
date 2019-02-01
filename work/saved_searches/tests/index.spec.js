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
  assert.hasAllKeys(JSON.parse(localStorage.settings), ["larry", "harry"]);
 });
 it("should store a search against a user", () => {
  // setup
  SavedSearches.userId = "harry";
  SavedSearches.saveSearch("id123", "Item");
  SavedSearches.userId = "larry";
  SavedSearches.saveSearch("id456", "Design");
  // assert
  assert.deepInclude(JSON.parse(localStorage.settings).harry["saved-searches"][0], {
   searchId: "id123",
   type: "Item"
  });
  assert.deepInclude(JSON.parse(localStorage.settings).larry["saved-searches"][0], {
   searchId: "id456",
   type: "Design"
  });
 });
 it("should move a search to the head of the list if already present", () => {
  // setup
  SavedSearches.userId = "harry";
  SavedSearches.saveSearch("id123", "Item");
  SavedSearches.saveSearch("ida", "Design");
  SavedSearches.saveSearch("idb", "Design");
  SavedSearches.saveSearch("idc", "Design");
  SavedSearches.saveSearch("idd", "Design");
  SavedSearches.saveSearch("ide", "Design");
  SavedSearches.saveSearch("id123", "Item"); // add this one again
  // assert.
  const actual = JSON.parse(localStorage.settings).harry["saved-searches"][0];
  assert.deepEqual(
   actual,
   { searchId: "id123", type: "Item" },
   "The last item wasnt moved to the head"
  );
 });
 it("should have a maximum length of 10", () => {
  // tests that that never more than 10 recent searches are stored
  // setup
  SavedSearches.userId = "harry";
  SavedSearches.saveSearch("id1", "Item");
  SavedSearches.saveSearch("id2", "Design");
  SavedSearches.saveSearch("id3", "Design");
  SavedSearches.saveSearch("id4", "Design");
  SavedSearches.saveSearch("id5", "Design");
  SavedSearches.saveSearch("id6", "Design");
  SavedSearches.saveSearch("id7", "Design");
  SavedSearches.saveSearch("id8", "Design");
  SavedSearches.saveSearch("id9", "Design");
  SavedSearches.saveSearch("id10", "Design");
  SavedSearches.saveSearch("id11", "Item"); // add this one again
  // assert.
  const savedSearches = JSON.parse(localStorage.settings).harry["saved-searches"];
  assert.lengthOf(savedSearches, 10, "no more than ten saved searches allow for harry");
 });
});

// {
//   settings:{
//     "userid:custprojname":{
//       "saved-searchs":[],
//   }
// }

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
