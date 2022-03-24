interface Move {
	name: string;
	url: string;
}

interface Decrease {
	change: number;
	move: Move;
}

interface Move2 {
	name: string;
	url: string;
}

interface Increase {
	change: number;
	move: Move2;
}

interface AffectingMoves {
	decrease: Decrease[];
	increase: Increase[];
}

interface Decrease2 {
	name: string;
	url: string;
}

interface Increase2 {
	name: string;
	url: string;
}

interface AffectingNatures {
	decrease: Decrease2[];
	increase: Increase2[];
}

interface Characteristic {
	url: string;
}

interface MoveDamageClass {
	name: string;
	url: string;
}

interface Language {
	name: string;
	url: string;
}

interface Name {
	language: Language;
	name: string;
}

export interface Stat {
	affecting_moves: AffectingMoves;
	affecting_natures: AffectingNatures;
	characteristics: Characteristic[];
	game_index: number;
	id: number;
	is_battle_only: boolean;
	move_damage_class: MoveDamageClass;
	name: string;
	names: Name[];
}
