import React from 'react';
import Button from './component/Button';

class Welcome extends React.Component {
    render () {
        return (
            <div>
                <h1 className="header">
          Hello World from React boilerplate with Redux store
                </h1>
                <br />
                <Button />
            </div>
        );
    }
}

export default Welcome;
