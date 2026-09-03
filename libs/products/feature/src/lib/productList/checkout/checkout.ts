import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSnackBarModule,
  ],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css'],
})
export class CheckoutComponent {
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  userInfoForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
  });

 
  shippingForm = this.fb.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    postalCode: ['', [Validators.required, Validators.minLength(5)]],
    deliveryMethod: ['standard', Validators.required],
  });


  paymentForm = this.fb.group({
    paymentMethod: ['online', Validators.required],
    cardNumber: ['', [Validators.required, Validators.minLength(16)]],
  });

 
  submitOrder(): void {
    if (this.userInfoForm.valid && this.shippingForm.valid && this.paymentForm.valid) {
      const orderData = {
        user: this.userInfoForm.value,
        shipping: this.shippingForm.value,
        payment: this.paymentForm.value,
      };

      console.log('Order Submitted:', orderData);

      this.snackBar.open('Order placed successfully!', 'Close', {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }

  @Output() backToProducts = new EventEmitter<void>();
  backToProductList(): void {
    this.backToProducts.emit();
  }
}
