import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballComponent {
  name = signal('Gohan');
  power = signal(7500);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3000 },
    { id: 4, name: 'Yamcha', power: 200 },
    { id: 5, name: 'Chaos', power: 10 },
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
