import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pueblo',
  templateUrl: './card-pueblo.component.html',
  styleUrls: ['./card-pueblo.component.css']
})
export class CardPuebloComponent implements OnInit {
  @Input() pueblo;
  constructor() { }

  ngOnInit(): void {
  }

}
