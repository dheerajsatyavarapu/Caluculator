import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: [ './history.component.css' ]
})
export class HistoryComponent  {
  name = 'Calculator History';
  colors = [];
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.items = db.list('calculator').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    )
    this.genColors();
  }
  genColors() {
    for(let i = 0; i <= 200; i+=5) {
      let r = i + Math.floor(Math.random()*Math.floor(255));
      let g = i + Math.floor(Math.random()*Math.floor(255));
      let b = i + Math.floor(Math.random()*Math.floor(255));
      let rgb = `rgb(${r},${g},${b})`
      this.colors.push(rgb);
    }
  }
  delete(key) {
   this.db.object('/calculator/' + key).remove();
  }
}
