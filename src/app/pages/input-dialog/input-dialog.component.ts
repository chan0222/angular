import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-input-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule,FormsModule,MatInputModule ],
  templateUrl: './input-dialog.component.html',
 
})
export class InputDialogComponent {
  userName: string = '';
}
