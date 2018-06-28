import * as React from "react";
import { connect } from "react-redux";

import { addAction } from "../actions/addAction";
import { subtractAction } from "../actions/subtractAction";

class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
    }

    add() {
        this.props.add(1);
    }

    subtract() {
        this.props.subtract(1);
    }

    render() {
        return (
            <div>
                <button onClick={this.subtract}>-</button>{this.props.result}<button onClick={this.add}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: num => dispatch(addAction(num)),
        subtract: num => dispatch(subtractAction(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);