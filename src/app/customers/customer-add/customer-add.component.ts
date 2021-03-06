import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store'
import * as CustomerActions from '../state/customer.actions';
import * as fromCustomer from '../state/customer.reducer'
import { Customer } from '../customer.model'

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
    customerForm : FormGroup

  constructor(private fb: FormBuilder, private store: Store<fromCustomer.AppState>) {
    
     this.customerForm = this.fb.group({
       name: ['', Validators.required],
       phone: ['', Validators.required],
       address: ['', Validators.required],
       membership: ['', Validators.required],
       id: null
     })

   }

  ngOnInit(): void {
  }

  createCustomer() {
    console.log(this.customerForm.value)
    const newCustomer: Customer =  { 
      name: this.customerForm.get('name').value,
      phone: this.customerForm.get('phone').value,
      address: this.customerForm.get('address').value,
      membership: this.customerForm.get('membership').value      
  }
  console.log(newCustomer)

     this.store.dispatch(new CustomerActions.CreateCustomer(newCustomer))

     this.customerForm.reset();
  }

}
