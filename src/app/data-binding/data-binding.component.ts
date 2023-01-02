import { Component } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  availableColors : string[] = ["red", "blue", "yellow", "green", "pink", "orange"];
  chosenColors : string[] = ["black"];
  activeColor : string = "";
  userEnabled : boolean = true;

   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loopColor(200);
   }

   loopColor(time:number) {
    setInterval(() => {
      let temp = this.randomNoRepeats(this.chosenColors);
      this.activeColor = temp();
    }, time);
   }
   randomNoRepeats(arr: string[]) {
    var copy = arr.slice(0);
    return function() {
      if (copy.length < 1) { copy = arr.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }
  enableOptions(){
    this.userEnabled = false;
  }
  modifyColor(color:string){
    this.chosenColors.push(color);
  }
}
