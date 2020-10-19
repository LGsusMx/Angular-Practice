import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  @Input() user: IUser;
  @Output() outUser: EventEmitter<IUser> = new EventEmitter <IUser>();
  constructor() { }

  ngOnInit(): void {
  }

  onSendData(): void{
    this.outUser.emit(this.user);
  }
}
