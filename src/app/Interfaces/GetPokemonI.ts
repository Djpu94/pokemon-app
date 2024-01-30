export interface GetPokemonsResponse {
    count:    number;
    next:     null;
    previous: null;
    results:  GetPokemonsResult[];
}

export interface GetPokemonsResult {
    name: string;
    url:  string;
}