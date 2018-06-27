import * as React from "react";
import { connect } from "react-redux";

class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.subtract}>-</button>{this.props.number}<button onClick={this.props.add}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        number: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch({ type: "ADD", payload: 1 }),
        subtract: () => dispatch({ type: "SUB", payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);