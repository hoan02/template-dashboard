import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from '@dashboard/feature';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutsModule, FontAwesomeModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'dashboard';
}
