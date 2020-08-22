import React from 'react';
import { Link } from 'react-router-dom';
import './CreateCharacter.css';

export default class CreateCharacter extends React.Component {
    state = {
        class: null,
        level: null,
        race: null,
        background: null,
        ability_scores: {
            strength: null,
            dexterity: null,
            constitution: null,
            intelligence: null,
            wisdom: null,
            charisma: null
        },
        saving_throws: {
            strength: null,
            dexterity: null,
            constitution: null,
            intelligence: null,
            wisdom: null,
            charisma: null
        },
        skills: {
            acrobatics_dex: null,
            animal_handling_wis: null,
            arcana_int: null,
            athletics_str: null,
            deception_cha: null,
            history_int: null,
            insight_wis: null,
            intimidation_cha: null,
            medicine_wis: null,
            nature_int: null,
            perception_wis: null,
            performance_cha: null,
            persuassion_cha: null,
            religion_int: null,
            sleigh_of_hand_dex: null,
            stealth_dex: null,
            survival_wis:null
        },
        inspiration: false,
        proficiency_bonus: null,
        armor_class: null,
        initiative: null,
        speed: null,
        hit_dice: null,
        death_saves: {
            success: 0,
            fail: 0
        },
        equipment: {

        },
        inventory: {
            
        }
    };

    render() {
        return(
            <div
                className='character-creation'
            >

            </div>
        );
    };
};