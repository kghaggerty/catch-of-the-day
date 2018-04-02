import React from 'react';
import { getFunName } from "../helpers";
class StorePicker extends React.Component {
    myInput = React.createRef();
    goToStore = (event) => {
        //stop form from submitting
        event.preventDefault();
        //get text from that input
        console.log(this.myInput);
        //change the page/store whatever they entered
    }

    render() {
        return (
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input type="text" required placeholder="Store Name" ref={this.myInput} defaultValue={ getFunName() } />
            <button type="submit">Visit Store</button>
        </form>
        )
    }
}

export default StorePicker;
