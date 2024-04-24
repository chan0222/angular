import { Component } from '@angular/core';
import { SimpleDialogComponent } from '../simple-dialog/simple-dialog.component';
import { MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-practice1',
  standalone: true,
  imports: [],
  templateUrl: './practice1.component.html',

})
export class Practice1Component {
  constructor(public dialog: MatDialog) { }
  openSimpleDialog(): void {
    this.dialog.open(SimpleDialogComponent, { width: '250px' });
  }
}
