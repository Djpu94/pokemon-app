import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetPokemonsResponse, GetPokemonsResult} from '../Interfaces/GetPokemonI'
import { GetPokemonByNameResponse} from '../Interfaces/GetPokemonByNameI'

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  private searchTermSubject = new BehaviorSubject<string>('');
  private selectedPokemonSubject = new BehaviorSubject<GetPokemonByNameResponse | null>(null);

  constructor(private http: HttpClient) {}

  get searchTerm$(): Observable<string> {
    return this.searchTermSubject.asObservable();
  }

  getPokemons(): Observable<GetPokemonsResponse> {
    return this.http.get<GetPokemonsResponse>(`${this.apiUrl}?limit=1302`);
  }

  getPokemonByName(name: string): Observable<GetPokemonByNameResponse> {
    return this.http.get<GetPokemonByNameResponse>(`${this.apiUrl}/${name}`);
  }

  getSelectedPokemonData(): Observable<GetPokemonByNameResponse | null> {
    return this.selectedPokemonSubject.asObservable();
  }

  setSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }

  setSelectedPokemonData(pokemonData: GetPokemonByNameResponse): void {
    this.selectedPokemonSubject.next(pokemonData);
  }

  
}
