import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('dragonball_characters');
  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem(
      'dragonball_characters',
      JSON.stringify(this.characters())
    );
  });

  addCharacter(Character: Character) {
    this.characters.update((list) => [...list, Character]);
  }
}
