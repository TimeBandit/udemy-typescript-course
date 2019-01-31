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
                return [];
            }
        }
        else {
            SavedSearches.init();
            return [];
        }
    }
    // search for a user in the settings object, return its position if found
    static userIndex(currentUserId, settings) {
        if (!localStorage.settings) {
            SavedSearches.init();
            return -1; // same as what findIndex would return if it fails
        }
        else if (!settings.length) {
            return -1;
        }
        else {
            return settings.findIndex(user => {
                return user.userId === currentUserId;
            });
        }
    }
    // create a new user object using the stored userId in the class
    static makeNewUser() {
        if (!SavedSearches.userId) {
            throw "Need a userId to create a new user";
        }
        else {
            return {
                userId: SavedSearches.userId,
                "customer-projects": [
                    {
                        code: "userSettings",
                        "saved-searches": []
                    }
                ]
            };
        }
    }
    // TODO: create a method for fetching the saved searches of desired user
    // TODO: add a timestamp to each item when creating
    // save a search to local storage
    static saveSearch(searchId, type) {
        let settings;
        try {
            if (!SavedSearches.userId)
                throw "No userId set";
            settings = SavedSearches.all;
            const position = SavedSearches.userIndex(SavedSearches.userId, settings);
            console.log(`${SavedSearches.userId} found at `, position);
            if (position > -1) {
                // TODO come back to the type warning later, not a problem now
                settings[position]["customer-projects"][0]["saved-searches"].unshift({ searchId, type });
                // TODO create a store() method for this
                localStorage.settings = JSON.stringify(settings);
            }
            else {
                console.log("Creating a new user...");
                const newUser = SavedSearches.makeNewUser();
                console.log("new user created =>", newUser);
                settings.push(newUser);
                console.log("settings are now =>", settings);
                localStorage.settings = JSON.stringify(settings);
                SavedSearches.saveSearch(searchId, type); // try saving again
            }
        }
        catch (error) {
            console.log("Woops! ", error);
        }
    }
}
// declaration getters/setters for userid
SavedSearches._userId = "";
