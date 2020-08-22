import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends React.Component {
    state = {
        characters: [],
        notes: []
    };

    renderCharacterList = (characters) => {
        if(characters.length === 0 || !characters) {
            return(
                <p
                    className='home-no-characters-message'
                >
                    No characters to display.
                </p>
            );
        };
    };

    renderNoteList = (notes) => {
        if(notes.length === 0 || !notes) {
            return(
                <p
                    className='home-no-notes-message'
                >
                    No notes to display.
                </p>
            );
        };
    };

    componentDidMount() {
        if(this.props.user.characters.length >= 1) {
            this.setState({
                //replace this with an API call when live
                characters: this.props.user.characters
            });
        };

        if(this.props.user.notes >= 1) {
            this.setState({
                //replace this with an API call when live
                notes: this.props.user.notes
            });
        };
    };

    //Render note form on this page but have character creation seperate

    //Set up system prompt on button as modal for future-proofing character creation
    render() {
        return(
            <div
                className='home'
            >
                <section
                    className='home-character-list'
                >
                    {this.renderCharacterList(this.state.characters)}
                </section>
                <section
                    className='home-character-create'
                >
                    <Link
                        to={'/character_creation'}
                    >
                        <button>
                            New Character
                        </button>
                    </Link>
                </section>
                <section
                    className='home-note-list'
                >
                    {this.renderNoteList(this.state.notes)}
                </section>
                <section
                    className='home-note-create'
                >
                    <button>
                        New Note
                    </button>
                </section>
            </div>
        );
    };
};