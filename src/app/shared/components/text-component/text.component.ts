import { Component, Input, OnInit } from '@angular/core';
import { Text } from './models/text';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
@Input() public text!: Text
  constructor() {
    this.text = {
        fontFamily: "Times New Roman, Times, serif",
        fontSize: '1.2rem',
        fontWeight: '400',
        color: 'black',
        textDecoration: 'none',
        textTransform: 'none',
        textAlign: 'justify',
        lineHeight: '1.3',
  }
   }

  ngOnInit(): void {
  }

}
