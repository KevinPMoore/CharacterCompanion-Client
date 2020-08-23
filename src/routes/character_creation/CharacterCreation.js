import React from 'react';
import { Link } from 'react-router-dom';
import DND5ESRD from '../../utilities/5E_API';
import Barbarian5e from '../../components/5e/5e_create_barbarian/5e_create_barbarian';
import './CharacterCreation.css';

export default class CharacterCreation extends React.Component {
    state = {
        system: null,
        step: 1,
        character_class: null
    };

    updateSystem = (e) => {
        this.setState({
            system: e.target.value
        });
    };

    updateClass = (e) => {
        this.setState({
            character_class: e.target.value
        });
    };

    handleAdvanceForm = (e) => {
        e.preventDefault();
        this.setState({
            step: this.state.step + 1
        });
    };

    //Not sure why second form is defaulting to Barbarian?
    //Working on 5e Barbarian path
    renderCreationForm = () => {
        if(this.state.step === 1) {
            return(
                <form
                    className='character-creation-system'
                    onSubmit={this.handleAdvanceForm}
                >
                    <label htmlFor='system-select'>What game are you playing?</label>
                    <select
                        id='system-select'
                        className='system-select'
                        onChange={this.updateSystem}
                        required
                    >
                        <option
                            value=''
                            defaultValue
                        >
                            -- Please choose a system --
                        </option>
                        <option
                            value='5e'
                        >
                            Dungeons and Dragons 5th Edition
                        </option>
                    </select>
                    <button
                        className='character-creation-next'
                        type='submit'
                    >
                        Next
                    </button>
                    <button
                        className='character-creation-back'
                    >
                        Back
                    </button>
                </form>
            );
        } else if (this.state.step === 2 && this.state.system === '5e') {
            return(
                <form
                className='character-creation-class'
                onSubmit={this.handleAdvanceForm}
            >
                <label htmlFor='class-select'>Select a character class</label>
                <select
                    id='class-select'
                    className='class-select'
                    onChange={this.updateClass}
                    required
                >
                    <option
                        value=''
                        defaultValue
                    >
                        -- Please choose a class --
                    </option>
                    <option
                        value='barbarian'
                    >
                        Barbarian
                    </option>
                    <option
                        value='bard'
                    >
                        Bard
                    </option>
                    <option
                        value='cleric'
                    >
                        Cleric
                    </option>
                    <option
                        value='druid'
                    >
                        Druid
                    </option>
                    <option
                        value='fighter'
                    >
                        Fighter
                    </option>
                    <option
                        value='monk'
                    >
                        Monk
                    </option>
                    <option
                        value='paladin'
                    >
                        Paladin
                    </option>
                    <option
                        value='ranger'
                    >
                        Ranger
                    </option>
                    <option
                        value='rogue'
                    >
                        Rogue
                    </option>
                    <option
                        value='sorcerer'
                    >
                        Sorcerer
                    </option>
                    <option
                        value='warlock'
                    >
                        Warlock
                    </option>
                    <option
                        value='wizard'
                    >
                        Wizard
                    </option>
                </select>
                <button
                    className='character-creation-next'
                    type='submit'
                >
                    Next
                </button>
                <button
                    className='character-creation-back'
                >
                    Back
                </button>
            </form>
            );
        } else if(this.state.step === 3 && this.state.system === '5e' && this.state.class === 'barbarian') {
            return(
                <Barbarian5e/>
            );
        };
    };

    //works except theres no description in the JSON object
    renderClassDescription5E = (character_class) => {
        switch(character_class) {
            case 'barbarian':
                console.log(DND5ESRD.getClassByName(character_class))
                break;
            default:
                break;
        }
    };

    render() {
        return(
            <div
                className='character-creation'
            >
                <section
                    className='character-creation-form'
                >
                    {this.renderCreationForm(this.state.step)}
                </section>
                <section
                    className='character-creation-description'
                >
                    {this.renderClassDescription5E(this.state.character_class)}
                </section>
            </div>
        );
    };
};