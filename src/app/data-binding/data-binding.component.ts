import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  textColor : string[] = ["red", "blue", "yellow", "green", "pink", "orange"];
  activeColor : string = "";
   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loopColor(100);
   }

   loopColor(time:number) {
    setInterval(() => {
      this.activeColor = this.textColor[this.getRandomInt(this.textColor.length)]
    }, time);
   }
   getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
}
