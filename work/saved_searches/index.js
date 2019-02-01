console.log("Loading SavedSearches... 🏃");
export class SavedSearches {
    constructor(name) {
        this.name = name;
        // declaration getters/setters for userid
        this._userId = "";
    }
    // returns the instance
    static get() {
        if (!SavedSearches.instance) {
            SavedSearches.instance = new SavedSearches("ready");
        }
        return SavedSearches.instance;
    }
    // getters/setters for userId
    get userId() {
        return this._userId;
    }
    set userId(id) {
        this._userId = id;
    }
    // create a settings key in local storage if one not found
    init() {
        if (!localStorage.settings) {
            localStorage.settings = "[]";
        }
    }
    // return settings object if present or create it
    get all() {
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
            this.init();
            return {};
        }
    }
    // create a new user object using the stored userId in the class
    newSettings() {
        if (!this.userId) {
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
    saveSearch(searchId, type) {
        let settings;
        let currentUserSavedSearches;
        try {
            if (!this.userId)
                throw "No userId set";
            settings = this.all;
            // filter out the new search object if present
            if (settings.hasOwnProperty(this.userId)) {
                currentUserSavedSearches = settings[this.userId]["saved-searches"].filter(search => {
                    return searchId !== search.searchId;
                });
                // place new search object at the head
                currentUserSavedSearches.unshift({ searchId, type });
                // restrict the number of searches saed to 10
                while (currentUserSavedSearches.length > 10)
                    currentUserSavedSearches.pop();
                // write the new settings back to local storage
                settings[this.userId]["saved-searches"] = currentUserSavedSearches;
                localStorage.settings = JSON.stringify(settings);
            }
            else {
                // create a new user and re-try the save
                const userSettings = this.newSettings();
                settings[this.userId] = userSettings;
                localStorage.settings = JSON.stringify(settings);
                this.saveSearch(searchId, type);
            }
        }
        catch (error) {
            console.log("Woops! ", error);
        }
    }
}
