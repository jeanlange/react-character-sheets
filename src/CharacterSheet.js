import React, { Component} from 'react';
// import character sheet css?

class CharacterSheet extends Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.allStats.name}, the fearsome</h1>
                <h2>Str: {this.props.allStats.strength}</h2>
            </div>
        )
    }
}

export default CharacterSheet;
