import { Component } from '@angular/core';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { FooterComponent } from '@shared/footer/footer.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

}
