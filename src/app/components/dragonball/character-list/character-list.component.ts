import { Component, computed, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();

  // Ejemplo de implementación de estilos para variables especificas con ngClass y computed
  powerClasses = computed(() => {
    return {
      'text-red-500': true,
    };
  });
  // Ejemplo de implementación de estilos para variables especificas con ngClass y computed
}
