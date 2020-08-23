//This is a temporary file to test client side and should be removed when server is functional

//can be used to test 5e character creation
const character = {
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
        
    }
}

//can be used to test rendering characters on home
const characterList = [

]

//can be used to test character storage
const user = {

}

//can be used to test note storage
const note = {

}

//can be used to test rendering notes on home
const noteList = [

]

export default {
    character,
    characterList,
    user,
    note,
    noteList
};