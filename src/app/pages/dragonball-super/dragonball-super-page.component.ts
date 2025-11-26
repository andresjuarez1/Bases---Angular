import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import type { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent],
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

  addCharacter() {
    console.log(this.name(), this.power());

    if (!this.name() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((currentCharacters) => [
      ...currentCharacters,
      newCharacter,
    ]);

    // this.characters.update((currentCharacters) => [
    //   ...currentCharacters,
    //   {
    //     id: Math.max(...currentCharacters.map((c) => c.id)) + 1,
    //     name: this.name(),
    //     power: this.power(),
    //   },
    // ]);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
