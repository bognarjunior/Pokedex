import {QueryKey} from 'react-query';

export const createPaginationKey = (offset: number): QueryKey => [
  'usePaginationList',
  offset,
];

export const createEvolutionKey = (pokemonId: number): QueryKey => [
  'useEvolution',
  pokemonId,
];
