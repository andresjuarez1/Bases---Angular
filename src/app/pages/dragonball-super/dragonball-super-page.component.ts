import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import type { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  // Ejemplo de implementación de estilos para variables especificas con ngClass y computed
  powerClasses = computed(() => {
    return {
      'text-red-500': true,
    };
  });

  addCharacter(Character: Character) {
    this.characters.update((list) => [...list, Character]);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
