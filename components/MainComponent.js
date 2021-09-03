import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { BEACHES } from '../shared/beaches';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beaches: BEACHES
        };
    }

    render() {
        return <Directory beaches={this.state.beaches} />;
    }
}

export default Main;