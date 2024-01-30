import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonSearchPipe } from '../../pipes/pokemon-search.pipe';
import { PokemonService } from '../../services/pokemon.service';
import {GetPokemonByNameResponse} from '../../Interfaces/GetPokemonByNameI'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnDestroy {
  pageSize = 7; 
  currentPage = 1; 
  pokemonList: GetPokemonByNameResponse[] = [];
  searchTerm = ''; 
  totalPokemons: number = 0 ;
  private searchTermSubscription: Subscription = new Subscription();

  constructor(
    private pokemonService: PokemonService,
    private pokemonSearchPipe: PokemonSearchPipe,
  ) {}

  ngOnInit(): void {
    this.getPokemons();
    this.subscribeToSearchTerm();
  }

  ngOnDestroy(): void {
    this.searchTermSubscription.unsubscribe();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe(data => {
      data.results.forEach((pokemon: any) => {
        this.pokemonService.getPokemonByName(pokemon.name).subscribe((res: any) => {
          this.pokemonList.push(res)
        })
      });
    this.totalPokemons = this.pokemonList.length
    });
  }

  getPokemonId(url: string): number {
    const parts = url.split('/');
    return +parts[parts.length - 2];
  }

  onPokemonSelected(pokemoName: string): void {
    this.pokemonService.getPokemonByName(pokemoName).subscribe((res) => {
      this.pokemonService.setSelectedPokemonData(res);
    })
  }

  subscribeToSearchTerm(): void {
    this.searchTermSubscription = this.pokemonService.searchTerm$.subscribe(term => {
      this.searchTerm = term;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    let filteredList = this.pokemonList;

    if (this.searchTerm) {
      filteredList = this.pokemonSearchPipe.transform(this.pokemonList, this.searchTerm);
    }
  }

}
