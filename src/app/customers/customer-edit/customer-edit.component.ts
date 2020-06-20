import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as formCustomer from '../state/customer.reducer'
import { Observable } from 'rxjs';
import { Customer } from '../customer.model';
import  * as CustomerActions from '../state/customer.actions';
import * as customerSeletor from '../state/customer.selector';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup
  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {

    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      membership: ['', Validators.required],
      id: null
    })

    //const customer$: Observable<Customer> = this.store.select(formCustomer.getCurrentCustomer)
    const customer$: Observable<Customer> = this.store.select(customerSeletor.getCurrentCustomer)
    
    customer$.subscribe(currentCustomer =>{
      console.log(currentCustomer)
      if(currentCustomer) {
        this.customerForm.patchValue({
          name: currentCustomer.name,
          phone: currentCustomer.phone,
          address: currentCustomer.address,
          membership: currentCustomer.membership,
          id: currentCustomer.id
        })
      }
    })
  }

  updateCustomer() {
     const updatedCustomer: Customer = {
       name: this.customerForm.get('name').value,
       phone: this.customerForm.get('phone').value,
       address: this.customerForm.get('address').value,
       membership: this.customerForm.get('membership').value,
       id: this.customerForm.get('id').value,
     }

     this.store.dispatch(new CustomerActions.UpdateCustomer(updatedCustomer))
  }

 

}
