import React from 'react';
import AbilityScores from '../5e_set_ability_scores/5e_set_ability_scores';
import './5e_create_barbarian.css';

export default class CreateBarbarian5E extends React.Component {
    state = {
        class: 'Barbarian',
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
        maximum_hit_points: null,
        current_hit_points: null,
        inspiration: false,
        proficiency_bonus: null,
        proficiencies: [],
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
            
        },
        step: 1
    };

    renderCreate5EBarbarian = (step) => {
        switch(step) {
            case 1:
                return(
                    <form>

                    </form>
                );
            default:
                break;
        };
    };

    renderDescribeRace = (race) => {

    }

    render() {
        return(
            <div
                className='5e-create-barbarian'
            >

            </div>
        )
    };
};