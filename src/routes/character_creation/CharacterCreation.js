import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../../Store';
import './CharacterCreation.css';

export default class CharacterCreation extends React.Component {
    state = {
        system: null,
        step: 0,
        class: null
    };

    handleSelectSystem = (e) => {
        e.preventDefault();
        this.setState({
            system: e.value,
            step: this.state.step + 1
        });
    };

    renderCreationForm = (step) => {
        switch(step) {
            case 0:
                return(
                    <form
                        className='character-creation-system'
                        onSubmit={this.handleSelectSystem}
                    >
                        <label htmlFor='system-select'>Select a game system</label>
                        <select
                            id='system-select'
                            className='system-select'
                            required
                        >
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

            case 1:
                    return(
                        <p>
                            Ya did it!
                        </p>
                    )
            default:
                break;
        };
    };

    render() {
        return(
            <div
                className='character-creation'
            >
                {this.renderCreationForm(this.state.step)}
            </div>
        );
    };
};