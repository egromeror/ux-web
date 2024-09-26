import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { MenuVerticalComponent } from '../menu-vertical/menu-vertical.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [MatButtonToggleModule,MatCheckboxModule,MatButtonModule, MenuVerticalComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoComponent {
  
  constructor(private router: Router){}

  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update(value => !value);
  }

  setDetalleAlarma()
  {
    this.router.navigate([`/detalle`])
  }
}
