import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
  
var config = {
    apiKey: "AIzaSyCGvbXqPPh_Fa5As68ev5BBf0sZgYB0Zhs",
    authDomain: "codeschool-9351e.firebaseapp.com",
    databaseURL: "https://codeschool-9351e.firebaseio.com",
    projectId: "codeschool-9351e",
    storageBucket: "codeschool-9351e.appspot.com",
    messagingSenderId: "127974585517"
  };


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HistoryComponent } from './history/history.component';
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HistoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
