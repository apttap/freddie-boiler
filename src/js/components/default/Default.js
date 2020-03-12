import React, { Component } from 'react';

class Thing extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <section className="intro"> 
        <h1>Freddie Boiler</h1>
        <p>
          Mental hospital moon. Flames at crazy slicing with murderer gore.
          Blood ashes tearing in drowning spooky at fanatic with murderer.
          In the deranged Halloween slice. Haunt sliced at choking cut drool.
          Creep cold graves, shadow non fear a, psychotic ashes ghost.
          Edginess anxiety tension, claw at deteriorated in, creep a tear. 
          Cat at decapitated guns. Worms wit.
        </p>
        <p>
          Guts ect. Captive Agony deteriorated, fatal or chilling is, grotesque Halloween exorcism. Virus witch demonic dripping, at werewolf psycho slice flames. Buried non guts claw and creature hair-raising decapitated at est. Cat at decapitated guns. Cat at decapitated guns. Needles at bowels alarming. Menacing nightmare zombie deranged in stabbing.
        </p>
        <p>
          Killer mental psychotic sliced. Death bruises moon torture demons devil or vampire werewolf wind. Gore at chainsaw knife crazed choking helpless. Eyeball cat silent, morbid in damp torture.
        </p>
      </section>
    );
  }
}

export default Thing;