import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Customer } from '../customer.model'

export enum customerActionTypes {
    LOAD_CUSTOMERS =  '[Customer] Load Customers',
    LOAD_CUSTOMERS_SUCCESS = '[Customer] Load Customers Success',
    LOAD_CUSTOMERS_FAILS = '[Customer] Load Customers Fails',
    LOAD_CUSTOMER =  '[Customer] Load Customer',
    LOAD_CUSTOMER_SUCCESS = '[Customer] Load Customer Success',
    LOAD_CUSTOMER_FAILS = '[Customer] Load Customer Fails',
    CREATE_CUSTOMER =  '[Customer] Create Customer',
    CREATE_CUSTOMER_SUCCESS = '[Customer] Create Customer Success',
    CREATE_CUSTOMER_FAILS = '[Customer] Create Customer Fails',
    UPDATE_CUSTOMER =  '[Customer] Update Customer',
    UPDATE_CUSTOMER_SUCCESS = '[Customer] Update Customer Success',
    UPDATE_CUSTOMER_FAILS = '[Customer] Update Customer Fails',
    DELETE_CUSTOMER =  '[Customer] Delete Customer',
    DELETE_CUSTOMER_SUCCESS = '[Customer] Delete Customer Success',
    DELETE_CUSTOMER_FAILS = '[Customer] Delete Customer Fails'
}

export class LoadCustomers implements Action {
    readonly type = customerActionTypes.LOAD_CUSTOMERS
}

export class LoadCustomersSuccess implements Action {
    readonly type = customerActionTypes.LOAD_CUSTOMERS_SUCCESS

    constructor(public payload: Customer[]) {}
}

export class LoadCustomersFail implements Action {
    readonly type = customerActionTypes.LOAD_CUSTOMERS_FAILS

    constructor(public payload: string) {}
}

export class LoadCustomer implements Action {
    readonly type = customerActionTypes.LOAD_CUSTOMER

    constructor(public payload: number) {}
}

export class LoadCustomerSuccess implements Action {
    readonly type = customerActionTypes.LOAD_CUSTOMER_SUCCESS

    constructor(public payload: Customer) {}
}

export class LoadCustomerFail implements Action {
    readonly type = customerActionTypes.LOAD_CUSTOMER_FAILS

    constructor(public payload: string) {}
}

export class CreateCustomer implements Action {
    readonly type = customerActionTypes.CREATE_CUSTOMER

    constructor(public payload: Customer) {}
}

export class CreateCustomerSuccess implements Action {
    readonly type = customerActionTypes.CREATE_CUSTOMER_SUCCESS
    
    constructor(public payload: Customer) {
        console.log("ndhdh")
    }
}

export class CreateCustomerFail implements Action {
    readonly type = customerActionTypes.CREATE_CUSTOMER_FAILS

    constructor(public payload: string) {}
}

export class UpdateCustomer implements Action {
    readonly type = customerActionTypes.UPDATE_CUSTOMER
    constructor(public payload: Customer) {}
}

export class UpdateCustomerSuccess implements Action {
    readonly type = customerActionTypes.UPDATE_CUSTOMER_SUCCESS

    constructor(public payload: Update<Customer>) {}
}

export class UpdateCustomerFail implements Action {
    readonly type = customerActionTypes.UPDATE_CUSTOMER_FAILS

    constructor(public payload: string) {}
}
export class DeleteCustomer implements Action {
    readonly type = customerActionTypes.DELETE_CUSTOMER
    constructor(public payload: number) {}
}

export class DeleteCustomerSuccess implements Action {
    readonly type = customerActionTypes.DELETE_CUSTOMER_SUCCESS

    constructor(public payload: number) {}
}

export class DeleteCustomerFail implements Action {
    readonly type = customerActionTypes.DELETE_CUSTOMER_FAILS

    constructor(public payload: string) {}
}


export type action = LoadCustomers |
                     LoadCustomersSuccess | 
                     LoadCustomersFail |
                     LoadCustomer |
                     LoadCustomerSuccess |
                     LoadCustomerFail |
                     CreateCustomer |
                     CreateCustomerSuccess | 
                     CreateCustomerFail |
                     UpdateCustomer |
                     UpdateCustomerSuccess |
                     UpdateCustomerFail |
                     DeleteCustomer |
                     DeleteCustomerSuccess |
                     DeleteCustomerFail
                     ;