export enum SearchType {
 "Item",
 "Design",
 "Import"
}

export enum IdType {
 "itemId",
 "designCode",
 "importCode"
}

export interface SavedSearch {
 searchId: string;
 type: SearchType;
}

export interface UserSettings {
 "saved-searches"?: SavedSearch[]; // can extend to hold other userproj data
}

// the new settings
export interface UserProjectSettings {
 [userId: string]: UserSettings;
}
export interface CusomerProjectSettings {
 userId: string;
 "customer-projects": UserSettings[] | [];
}

export interface StoredSettings {
 settings: UserProjectSettings;
}
