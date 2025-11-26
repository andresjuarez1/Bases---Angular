import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  // Inyeccion de dependencias tradicional
  // constructor(public DragonballService: DragonballService) {}
  // Inyeccion de dependencias tradicional

  // Inyeccion de dependencias con inject actual
  public DragonballService = inject(DragonballService);
  // Inyeccion de dependencias con inject actual
}
