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
	id: string;
	type: SearchType;
}

export interface UserSettings {
	code: string;
	"saved-searches": SavedSearch[] | [];
}

export interface CusomerProjectSettings {
	userId: string;
	"customer-projects": UserSettings[] | [];
}

export interface StoredSettings {
	settings: CusomerProjectSettings[] | [];
}
