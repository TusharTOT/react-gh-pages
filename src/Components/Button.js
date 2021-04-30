import React from 'react';

// const Button = (props) => {
//     console.log(props);
//     const { clicked, title, count23 } = props;

//     return (
{/* <div>
    <button className="btn btn-primary" onClick={clicked}>{title}</button>
</div> */}
//     );
// };


// export default Button;

// import React, { Component } from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            isChnaged: true,
        }
    }

    static getDerivedStateFromProps(props, state) {
        debugger
        if (props.count23 !== state.count) {
            return {
                isChnaged: false
            };
        }

        return null;
    }

    render() {
        return (
            <div>
                <div>
                    <button className="btn btn-primary" onClick={this.props.clicked}>{this.props.title}</button>
                </div>
                {
                    this.state.isChnaged ? <h1>HEllo</h1> : null
                }
            </div>
        );
    }
}

export default Button;