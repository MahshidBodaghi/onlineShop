import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-sign-up-sheet',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
  ],
  templateUrl: './sign-up-sheet.html',
  styleUrl: './sign-up-sheet.css',
})
export class SignUpSheet {
  private readonly fb = inject(FormBuilder);
  private readonly sheetRef = inject(MatBottomSheetRef<SignUpSheet>);
  maxDate = new Date();

  isLoading = false;

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]],
    birthDate: [null as Date | null, Validators.required],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    if (value.password !== value.confirmPassword) {
      this.form.controls.confirmPassword.setErrors({
        passwordMismatch: true,
      });
      this.form.controls.confirmPassword.markAsTouched();
      return;
    }

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.sheetRef.dismiss({
        success: true,
        user: {
          name: value.name,
          email: value.email,
        },
      });
    }, 800);
  }

  close(): void {
    this.sheetRef.dismiss();
  }
}
