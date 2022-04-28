import { Pipe, PipeTransform } from '@angular/core';

/*
 * Affiche le nom correspondant au niveau de rareté du pokémon.
*/
@Pipe({name: 'pokemonTypeRarity'})
export class PokemonTypeRarityPipe implements PipeTransform {


  transform(level: number): string {
    let name: string;
  
    switch (level) {
      case 1:
        name = '1 star';
        break;
      case 2:
        name = '2 stars';
        break;
      case 3:
        name = '3 stars';
        break;
      case 4:
        name = '4 stars';
        break
      case 5:
        name = '5 stars';
        break
      default:
        name = '1 star';
        break;
    }
    return name;
  }
}
