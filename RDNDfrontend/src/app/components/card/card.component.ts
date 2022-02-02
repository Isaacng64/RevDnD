import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  inputs: ['data'] // it can be misspell since it is string
})
export class CardComponent implements OnInit {

  @Input()characther!: any;
  // decorate the property with @Input()
  // decorate the property with @Input()
// decorate the property with @Input()
 // decorate the property with @Input()
  constructor() {
   }

  ngOnInit(): void {
  console.log(this.characther);
  }

}
