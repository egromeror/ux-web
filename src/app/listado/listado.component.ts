import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [MatButtonToggleModule,MatCheckboxModule,MatButtonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoComponent {
  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update(value => !value);
  }
}
