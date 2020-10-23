import { Component} from '@angular/core';
import { IUser, IUserCard } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'salleAppv1';
  addClass = false;
  recurso = './../assets/images/thegame.png';
  items = [1, 2, 3, 4, 5, 6, 7];
  itemsx: IUser[] = [{name: 'owo', id: 1}, {name: 'uwu', id: 2}, {name: 'ewe', id: 3}];
  itemsc: IUserCard[] = [{name: 'Jesus Ramirez', id: 1, imagen: '../../assets/images/jesus.jpg'}, {name: 'Jonathan Muñoz', id: 2, imagen: '../../assets/images/jonathan.jpg'},
  {name: 'Daniel Torres', id: 3, imagen: '../../assets/images/Daniel.png'}, {name: 'Gerardo Cabrera', id: 4, imagen: '../../assets/images/Gerardo.jpg'}];
  onImageC(url: string): void{
    this.recurso = url;
  }
  outUserMethod(user: IUser): void{
    console.log(user);
  }
}
