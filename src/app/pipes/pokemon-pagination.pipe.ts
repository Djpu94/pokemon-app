import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonPagination',
})
export class PokemonPaginationPipe implements PipeTransform {
  transform(value: any[], page: number, pageSize: number): any[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return value.slice(startIndex, endIndex);
  }
}
