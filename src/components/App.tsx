import * as React from "react";
import { connect } from "react-redux";

import addAction from "../actions/addAction";
import subtractAction from "../actions/subtractAction";

class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
    }

    add() {
        this.props.add(this.props.result, 1);
    }

    subtract() {
        this.props.subtract(this.props.result, 1);
    }

    render() {
        return (
            <div className="container">
                <div className="box"><button onClick={this.subtract}>-</button></div>
                <div className="box"><label className={this.props.lableStyle}>{this.props.result}</label></div>
                <div className="box"><button onClick={this.add}>+</button></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lableStyle: state.result >= 0 ? "boxPos" : "boxNeg",
        result: state.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (currentResult, num) => dispatch(addAction(currentResult, num)),
        subtract: (currentResult, num) => dispatch(subtractAction(currentResult, num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);