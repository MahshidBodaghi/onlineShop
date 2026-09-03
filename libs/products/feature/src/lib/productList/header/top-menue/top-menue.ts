import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';

import { AuthDialog } from '../auth-dialog/auth-dialog';


@Component({
  selector: 'top-menue',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatDialogModule,
    
  ],
  templateUrl: './top-menue.html',
  styleUrl: './top-menue.css',
})
export class TopMenue {
  favoriteCount = 3;

  constructor(private dialog: MatDialog,) {}

  openAuthDialog(): void {
    this.dialog.open(AuthDialog, {
      width: '360px',
      maxWidth: '90vw',
    });
  }
}

