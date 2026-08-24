import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';

import { SignUpSheet } from '../sign-up-sheet/sign-up-sheet';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatSnackBarModule,
  ],
  templateUrl: './auth-dialog.html',
  styleUrl: './auth-dialog.css',
})
export class AuthDialog {
  private readonly bottomSheet = inject(MatBottomSheet);
  private readonly dialogRef = inject(MatDialogRef<AuthDialog>);
  private readonly snackBar = inject(MatSnackBar);

  openSignUp(): void {
    const sheetRef = this.bottomSheet.open(SignUpSheet, {
      panelClass: 'sign-up-sheet',
    });
    sheetRef.afterDismissed().subscribe((result) => {
      if (result?.success) {
      
        this.dialogRef.close(result);

  
        const userName = result.user?.name ? ` ${result.user.name}` : '';
        this.snackBar.open( 'success🎉', 'ok', {
          duration: 3500,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
    });
  

    sheetRef.afterDismissed().subscribe((result) => {
      if (result?.success) {
        console.log('ثبت‌نام با موفقیت انجام شد');
        this.dialogRef.close(result);
      }
    });
  }
  openSignIn(): void {
    this.snackBar.open('این قسمت در حال تکمیله :)', 'ok', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
