
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as formCustomer from '../state/customer.reducer';


const getCustomerFeatureState = createFeatureSelector<formCustomer.CustomerState>("customers")

export const getCustomers = createSelector(
    getCustomerFeatureState,
    formCustomer.customerAdapter.getSelectors().selectAll
)

export const getCustomerLoading = createSelector(
    getCustomerFeatureState,
    (State: formCustomer.CustomerState) => State.loading
)

export const getCustomersLoaded = createSelector(
    getCustomerFeatureState,
    (State: formCustomer.CustomerState) => State.loaded
)

export const getCustomersError = createSelector(
    getCustomerFeatureState,
    (State: formCustomer.CustomerState) => State.error
)

export const getCustomerCurrentId = createSelector(
    getCustomerFeatureState,
    (State: formCustomer.CustomerState) => State.selectedCustomerId
)

export const getCurrentCustomer = createSelector(
    getCustomerFeatureState,
    (State: formCustomer.CustomerState) => State.entities[State.selectedCustomerId]
)