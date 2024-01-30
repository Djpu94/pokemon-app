import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  pokemonList: any[] = [];
  searchTerm: string = '';


  constructor(private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.setupSearchObserver();
    this.getPokemons()
  }

  getPokemons(): void {
    this.PokemonService.getPokemons().subscribe(data => {
      data.results.forEach((pokemon: any) => {
        
          this.pokemonList.push(pokemon.name)

      });
    });
  }

  onSearch(): void {
    this.PokemonService.setSearchTerm(this.searchTerm);
  }

  private setupSearchObserver(): void {
    this.PokemonService.searchTerm$
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term: string) => {
        this.searchTerm = term;
      });
  }

}
