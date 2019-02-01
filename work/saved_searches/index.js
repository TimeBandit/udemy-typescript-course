console.log("Loading SavedSearches... 🏃");
export class SavedSearches {
    static get userId() {
        return SavedSearches._userId;
    }
    static set userId(id) {
        SavedSearches._userId = id;
    }
    // create a settings key in local storage if one not found
    static init() {
        if (!localStorage.settings) {
            localStorage.settings = "[]";
        }
    }
    // return settings object if present or create it
    static get all() {
        if (localStorage.settings) {
            try {
                return JSON.parse(localStorage.settings);
            }
            catch (error) {
                console.log("Error decoding settings key in localStorage", error);
                return {};
            }
        }
        else {
            SavedSearches.init();
            return {};
        }
    }
    // create a new user object using the stored userId in the class
    static newSettings() {
        if (!SavedSearches.userId) {
            throw "Need a userId to create a new user";
        }
        else {
            return {
                "saved-searches": []
            };
        }
    }
    // TODO: add a timestamp to each item when creating
    // save a search to local storage
    static saveSearch(searchId, type) {
        let settings;
        let currentUserSavedSearches;
        try {
            if (!SavedSearches.userId)
                throw "No userId set";
            settings = SavedSearches.all;
            // filter out the new search object if present
            if (settings.hasOwnProperty(SavedSearches.userId)) {
                currentUserSavedSearches = settings[SavedSearches.userId]["saved-searches"].filter(search => {
                    return searchId !== search.searchId;
                });
                // place new search object at the head
                currentUserSavedSearches.unshift({ searchId, type });
                // restrict the number of searches saed to 10
                if (currentUserSavedSearches.length > 10)
                    currentUserSavedSearches.pop();
                // write the new settings back to local storage
                settings[SavedSearches.userId]["saved-searches"] = currentUserSavedSearches;
                localStorage.settings = JSON.stringify(settings);
            }
            else {
                // create a new user and re-try the save
                const userSettings = SavedSearches.newSettings();
                settings[SavedSearches.userId] = userSettings;
                localStorage.settings = JSON.stringify(settings);
                SavedSearches.saveSearch(searchId, type);
            }
        }
        catch (error) {
            console.log("Woops! ", error);
        }
    }
}
// declaration getters/setters for userid
SavedSearches._userId = "";
