import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-practice2',
  standalone: true,
  imports: [MatInputModule,],
  templateUrl: './practice2.component.html',
 
})
export class Practice2Component {
  constructor(private dialog:MatDialog){}// MatDialog 서비스를 주입합니다. 
  openInputDialog(): void {
    const dialogRef = this.dialog.open(InputDialogComponent, { width: '300px' });
    dialogRef.afterClosed().subscribe(result => { console.log('입력된 이름:', result) });
}
}
