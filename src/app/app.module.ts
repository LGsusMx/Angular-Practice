import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { ComponenteComponent } from './componente/componente.component';
import { UserComponent } from './user/user.component';
import { MyPipePipe } from './pipes/my-pipe/my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ComponenteComponent,
    UserComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
