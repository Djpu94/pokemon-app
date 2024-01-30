import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonSearch',
})
export class PokemonSearchPipe implements PipeTransform {
  transform(value: any[], term: string): any[] {
    if (!term) {
      return value;
    }

    term = term.toLowerCase();

    return value.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term)
    );
  }
}
