


/**
 * @function 
 * @param {object} props  - component props specific to this setup
 * @returns {ShallowWrapper}
 */

// export const findByTestAttr = (wrapper, val) => {
//     wrapper.find(`[data-test="${val}"]`)
// }

export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)
