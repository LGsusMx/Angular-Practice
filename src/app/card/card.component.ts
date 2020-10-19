import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUserCard } from '../interfaces/user.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() user: IUserCard;
  @Output() outUser: EventEmitter<IUserCard> = new EventEmitter <IUserCard>();
  constructor() { }

  ngOnInit(): void {
  }
  onSendData(): void{
    this.outUser.emit(this.user);
  }

}
