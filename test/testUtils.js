import checkPropTypes from 'check-prop-types'
import {createStore, applyMiddleware} from 'redux'; 
import rootReducer from '../src/reducers'
import {middlewares} from '../src/configureStore'
export const storeFactory  = (initalState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    //create a store factory which creates a store for testing that uses reducers from the actual app.
    return createStoreWithMiddleware(rootReducer, initalState); 
}


export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)


export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes, 
        conformingProps, 
        'prop',
        component.name
        )
        expect(propError).toBeUndefined();
}