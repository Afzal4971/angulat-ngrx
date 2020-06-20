import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as CustomerActions from '../state/customer.actions';
import * as fromCustomer from '../state/customer.reducer';
import { Observable } from 'rxjs';
import { Customer } from "../customer.model";
import * as customerSeletor from '../state/customer.selector';
 
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Observable<Customer[]>;
  error$: Observable<string>;

  constructor( public store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new CustomerActions.LoadCustomers());
    // this.customers = this.store.pipe(select(fromCustomer.getCustomers));
    // this.error$ = this.store.pipe(select(fromCustomer.getCustomersError));
    this.customers = this.store.pipe(select(customerSeletor.getCustomers));
    this.error$ = this.store.pipe(select(customerSeletor.getCustomersError));
  }

  editCustomer(customer: Customer) {
    console.log(customer)
    this.store.dispatch(new CustomerActions.LoadCustomer(customer.id));
  }

  deleteCustomer(customer: Customer) {
    if(confirm('Are you sure want to delete customer?')) {
      this.store.dispatch(new CustomerActions.DeleteCustomer(customer.id))
    }
   
  }


}
