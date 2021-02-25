import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CartService} from '../cart.service';
import {Company} from '../company';
import {Display} from './display';

@Component({
  selector: 'app-app-overview',
  templateUrl: './app-overview.component.html',
  styleUrls: ['./app-overview.component.css']
})
export class AppOverviewComponent implements OnInit {

  constructor(private cartService: CartService) { }
  @Input()
  newApp: string = "";
  @Output()
  getChange: EventEmitter<string> = new EventEmitter<string>();

  items: Company[] = [];
  display:Display = Display.Yes;
  Display = Display;
  username: string = "Jo";

  ngOnInit(): void {
    let mi = new Company("Microsoft");
    let app = new Company("Apple");
    let google = new Company("Google");
    let am = new Company("Amazon");
    let fa = new Company("Facebook");
    let apn = new Company(this.newApp);

    this.items.push(mi);
    this.items.push(app);
    this.items.push(google);
    this.items.push(am);
    this.items.push(fa);
    this.items.push(apn);
  }
  click(): void{
    if(this.display === Display.Yes)
       this.display = Display.No;
    else
      this.display = Display.Yes;
    this.getChange.emit(this.newApp);
    console.log(this.cartService.getItems());
  }
}
