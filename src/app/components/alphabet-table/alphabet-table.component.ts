import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-alphabet-table',
  templateUrl: './alphabet-table.component.html',
  styleUrl: './alphabet-table.component.css',
})
export class AlphabetTableComponent implements OnInit {
  pokemonList: string[] = [];
  dataTable: { letter: string; amount: number }[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe((data) => {
      this.pokemonList = data.results.map(
        (pokemon: { name: string; url: string }) => {
          return pokemon.name;
        }
      );

      this.dataTable = this.contarIniciales(this.pokemonList);
    });
  }

  contarIniciales(arr: string[]): { letter: string; amount: number }[] {
    const contador: { [inicial: string]: number } = {};
    arr.forEach((str) => {
      const inicial = str.charAt(0).toUpperCase();
      contador[inicial] = (contador[inicial] || 0) + 1;
    });

    const resultado = Object.entries(contador).map(([letter, amount]) => ({
      letter,
      amount,
    }));

    resultado.sort((a, b) => a.letter.localeCompare(b.letter));
    return resultado;
  }
}
