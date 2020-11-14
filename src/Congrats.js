import React from 'react'; 
import PropTypes from 'prop-types';


/**
 * @function
 * @param {object} props  - React props
 * @returns {JSX.Element} - Rendered component 
 */

    const Congrats = (props) => {
       if (props.success) {
           return (
           <div data-test="component-congrats">
           <span data-test="congrats-message">
           Congratulations! You guessed the word
           </span>
           </div>
           )
       } else {
           return (
               <div data-test="component-congrats"></div>
           )
       }
    }

    // this is how we are going to check and get the warning if its not a boolean,  adding isRequied we will get a warning
    Congrats.propTypes = {
        success: PropTypes.bool.isRequired
    }
 
export default Congrats