import checkPropTypes from 'check-prop-types'
import {createStore} from 'redux'; 
import rootReducer from '../src/reducers'

export const storeFactory  = (initalState) => {
    //create a store factory which creates a store for testing that uses reducers from the actual app.
    return createStore(rootReducer, initalState); 
}

/**
 * @function 
 * @param {object} props  - component props specific to this setup
 * @returns {ShallowWrapper}
 */


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