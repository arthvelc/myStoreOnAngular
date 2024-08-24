import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from "../../../products/components/product/product.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;


  constructor(){
    //Este método se ejecuta siempre antes del render del contenido del comoponente.
    console.log("constructor");
    console.log("-".repeat(25));
  }

  ngOnChanges(changes: SimpleChanges): void{ //Evalua los cambios una vez que se inicia el componente.
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    //Este método se ejecuta antes y durante la renderización del contenido de nuestro componente.

    console.log("Se está renderizano el componente?");
    console.log("-".repeat(25));
    console.log(changes);

    const duration = changes['duration'];

    if(duration && duration.previousValue !== duration.previousValue){
      this.doSomething()
    }


  }

  ngOnInit(): void { //Evalua los cambios pero solo al inicializarse
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //Solo corre una vez después de que se ha renderizado el componente, es perfecto para cosas async
    console.log('ngOnInit :D');
    console.log('-'.repeat(25));

    console.log("La duración es: ", this.duration);
    console.log("La duración es: ", this.message);
    const aviso = 'Se corrió el intervalo:D'

    this.counterRef = window.setInterval(()=>{
      if(this.counter() >= 1){
        console.log(aviso + ' again');
      }else {
        console.log(aviso);
      }

      this.counter.update(statePrev => statePrev + 1);
    } ,1000)

  }

  ngAfterViewInit(){
    // sucede después del render
    // nos ayuda a ver si los hijos del padre ya fueron "pintados"
    console.log("ngAfterViewInit :D")
    console.log('-'.repeat(25));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //sucede una vez que el componente se destruye!
    console.log('ngOnDestroy');
    console.log("".repeat(25));

    //¿cómo se destruye un componente?
    //Se puede con un ngIf, en este caso porque tenemos la capacidad de condicionar en que momento aparece y en que momento no el componente.

    //window.clearInterval(this.counterRef);
  }

  //METODO QUE DETECTA CADA QUE CAMBIE ALGO SOBRE EL COMPONENTE Y HACER ALGO

  doSomething(){
    console.log('change duration, se ejecutó desde el método doSomething()');
  }
}
