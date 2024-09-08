import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Este es el about message');

  constructor() {
    console.log('AboutComponent ha sido creado');
    console.log('-->'.repeat(20));
  }

  changeDuration(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.duration.set(Number(input.value));
  }

  changeMessage(event: Event){
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

}
