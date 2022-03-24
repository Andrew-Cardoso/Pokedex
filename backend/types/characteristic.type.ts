interface NameUrl {
	name: string;
	url: string;
}

interface Description {
	description: string;
	language: NameUrl;
}

export interface Characteristic {
	descriptions: Description[];
	gene_modulo: number;
	highest_stat: NameUrl;
	id: number;
	possible_values: number[];
}
