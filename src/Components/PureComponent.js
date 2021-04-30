import React from 'react';

const PureComponent = (props) => {




    // componentDidUpdate = (prevProps) => {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.count !== prevProps.count) {
    //         this.fetchData(this.props.userID);
    //     }
    // }


    return (
        <div>
            <h4>
                Title:  {props.count}
            </h4>
        </div>
    );
};

export default PureComponent;