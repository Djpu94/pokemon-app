import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { GetPokemonByNameResponse } from '../../Interfaces/GetPokemonByNameI';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  selectedPokemonData: any | null = null;
  pokemonData: GetPokemonByNameResponse | null = null;
  

  constructor(private PokemonService: PokemonService,) {}

  ngOnInit(): void {
    this.subscribeToPokemonSelection();
  }

  private subscribeToPokemonSelection(): void {
    this.PokemonService.getSelectedPokemonData().subscribe((pokemonData) => {      
      if (pokemonData) {
        this.pokemonData = pokemonData
      }
    });
  }

}
