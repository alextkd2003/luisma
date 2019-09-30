import React, { Component } from 'react'

export default class Home extends Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            carousel_images: [],
        }
    }

    render() {
        return (
            <div>
                <h3>HOME</h3>
            </div>
        )
    }
}
