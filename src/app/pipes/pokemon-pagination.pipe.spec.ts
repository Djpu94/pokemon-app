import { PokemonPaginationPipe } from './pokemon-pagination.pipe';

describe('PokemonPaginationPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonPaginationPipe();
    expect(pipe).toBeTruthy();
  });
});
