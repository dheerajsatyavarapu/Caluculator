import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  currentSign = "+";
  val1;
  val2;
  ans;
  constructor(private db: AngularFireDatabase) {

  }
  save() {
    this.db.list('calculator').push({
      val1: this.val1,
      sign: this.currentSign,
      val2: this.val2,
      ans: this.ans
    })
  } 
  add() {
    if(!(this.val1 == "") || !(this.val2 == "")) {
      this.ans = this.val1 + this.val2;this.save()
    } else {
      alert('please enter a value')
    }
  }
  minus() {this.ans = this.val1 - this.val2;this.save()}
  multiply() {this.ans = this.val1 * this.val2;this.save()}
  divide() {this.ans = this.val1 / this.val2;this.save()}

}
