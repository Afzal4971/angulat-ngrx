import * as CustomerActions from './customer.actions';
import * as fromRoot from '../../state/app-state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Customer } from '../customer.model';


export interface CustomerState extends EntityState<Customer> {
    selectedCustomerId: number | null,
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState {
   customers: CustomerState
}

export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const defaultCustomer: CustomerState = {
    ids: [],
    entities: {},
    selectedCustomerId: null,
    loading: false,
    loaded: false,
    error: ""

}

export const initialState = customerAdapter.getInitialState(defaultCustomer)
  


export function customerReducer(state = initialState, action: CustomerActions.action ) {
    switch(action.type) {
    //     case CustomerActions.customerActionTypes.LOAD_CUSTOMERS: {
    //     return {
    //         ...state,
    //         loading: true 
    //     };
    // }
      case CustomerActions.customerActionTypes.LOAD_CUSTOMERS_SUCCESS: {

        return customerAdapter.addAll(action.payload, {
            ...state,
            loading: false,
            loaded: false
        })
        //    return {
        //        ...state,
        //        loading: false,
        //        loaded: true,
        //        customers: action.payload
        //    }
      }

      case CustomerActions.customerActionTypes.LOAD_CUSTOMERS_FAILS: {
          return {
              ...state,
              entities: {},
              loading: false,
              loaded: false,
              error: action.payload
          }
      }

      case CustomerActions.customerActionTypes.LOAD_CUSTOMER_SUCCESS: {

        return customerAdapter.addOne(action.payload, {
            ...state,
            selectedCustomerId: action.payload.id
        })
      }

      case CustomerActions.customerActionTypes.LOAD_CUSTOMER_FAILS: {
          return {
              ...state,
              error: action.payload
          }
      }

      case CustomerActions.customerActionTypes.CREATE_CUSTOMER_SUCCESS: {
        console.log(action.payload)
        return customerAdapter.addOne(action.payload, state)
      }

      case CustomerActions.customerActionTypes.CREATE_CUSTOMER_FAILS: {
          return {
              ...state,
              error: action.payload
          }
      }

      case CustomerActions.customerActionTypes.UPDATE_CUSTOMER_SUCCESS: {

        return customerAdapter.updateOne(action.payload, state)
      }

      case CustomerActions.customerActionTypes.UPDATE_CUSTOMER_FAILS: {
          return {
              ...state,
              error: action.payload
          }
      }
      case CustomerActions.customerActionTypes.DELETE_CUSTOMER_SUCCESS: {

        return customerAdapter.removeOne(action.payload, state)
      }

      case CustomerActions.customerActionTypes.DELETE_CUSTOMER_FAILS: {
          return {
              ...state,
              error: action.payload
          }
      }
      
     default: {
         return state
     };
    }
}

// const getCustomerFeatureState = createFeatureSelector<CustomerState>("customers")

// export const getCustomers = createSelector(
//     getCustomerFeatureState,
//     customerAdapter.getSelectors().selectAll
// )

// export const getCustomerLoading = createSelector(
//     getCustomerFeatureState,
//     (State: CustomerState) => State.loading
// )

// export const getCustomersLoaded = createSelector(
//     getCustomerFeatureState,
//     (State: CustomerState) => State.loaded
// )

// export const getCustomersError = createSelector(
//     getCustomerFeatureState,
//     (State: CustomerState) => State.error
// )

// export const getCustomerCurrentId = createSelector(
//     getCustomerFeatureState,
//     (State: CustomerState) => State.selectedCustomerId
// )

// export const getCurrentCustomer = createSelector(
//     getCustomerFeatureState,
//     (State: CustomerState) => State.entities[State.selectedCustomerId]
// )