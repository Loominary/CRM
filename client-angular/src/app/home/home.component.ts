import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  labels =['Customers', 'Produscts', 'Orders'];
  title = 'Welcome';
  success =true;

  toggleTitleColor(){
    this.success = !this.success
    
  }

  getTitleClass():string {
    return this.success ? 'text-info' : 'text-danger';
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
