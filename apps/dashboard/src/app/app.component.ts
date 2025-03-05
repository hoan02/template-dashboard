import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from '@dashboard/feature';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'dashboard';
}
