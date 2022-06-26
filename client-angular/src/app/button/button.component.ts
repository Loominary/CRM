import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    
    @Input() label = '';
  constructor() { }

  ngOnInit(): void {
  }

  btnClick(){
    console.log('this button was clicked');
    
  }

}
