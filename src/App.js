import React, {Component} from 'react';
import CharacterSheet from './CharacterSheet';
import Input from './Input';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      characterSheet: {
        name: "",
        strength: ""
      }
    }
  }

  changeValue(event, key) {
    let newStats = this.state.characterSheet;
    newStats[key] = event.target.value;
    this.setState({
      characterSheet: newStats
    });
  }
  render() {
    return (
      <div className="header">
        <label>Name:</label>
        <CharacterSheet 
          allStats={this.state.characterSheet}
        />
        <Input label={'Name'} value={this.state.characterSheet.name} onChange={(event)=> this.changeValue(event, "name")} />
        <Input inputType={"number"} label={'Strength'} value={this.state.characterSheet.strength} onChange={(event)=> this.changeValue(event, "strength")} />
      </div>
    )
  }
}

export default App;
