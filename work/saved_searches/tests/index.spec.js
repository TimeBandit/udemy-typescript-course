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
  const ches = SavedSearches.get();
  console.log(ches);

  ches.init();
  // assert
  assert.hasAnyKeys(localStorage, ["settings"]);
 });

 it("should create the default settings object", () => {
  // setup
  SavedSearches.get().init();
  // assert
  const settings = JSON.parse(localStorage.settings);
  assert.isArray(settings);
 });
 it("should create the user if not present", () => {
  // setup
  const instance = SavedSearches.get();
  instance.userId = "harry";
  instance.saveSearch("id123", "Item");
  instance.userId = "larry";
  instance.saveSearch("id456", "Design");
  // assert
  assert.hasAllKeys(JSON.parse(localStorage.settings), ["larry", "harry"]);
 });
 it("should store a search against a user", () => {
  const instance = SavedSearches.get();
  // setup
  instance.userId = "harry";
  instance.saveSearch("id123", "Item");
  instance.userId = "larry";
  instance.saveSearch("id456", "Design");
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
  const instance = SavedSearches.get();
  instance.userId = "harry";
  instance.saveSearch("id123", "Item");
  instance.saveSearch("ida", "Design");
  instance.saveSearch("idb", "Design");
  instance.saveSearch("idc", "Design");
  instance.saveSearch("idd", "Design");
  instance.saveSearch("ide", "Design");
  instance.saveSearch("id123", "Item"); // add this one again
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
  const instance = SavedSearches.get();
  // setup
  instance.userId = "harry";
  instance.saveSearch("id1", "Item");
  instance.saveSearch("id2", "Design");
  instance.saveSearch("id3", "Design");
  instance.saveSearch("id4", "Design");
  instance.saveSearch("id5", "Design");
  instance.saveSearch("id6", "Design");
  instance.saveSearch("id7", "Design");
  instance.saveSearch("id8", "Design");
  instance.saveSearch("id9", "Design");
  instance.saveSearch("id10", "Design");
  instance.saveSearch("id11", "Item"); // add this one again
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
