import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

const selectEl = document.querySelector('select');



form.addEventListener('submit', async e => {
      // prevent default
    e.preventDefault();

    // get the name and family id from the form
    const data = new FormData(form); //eats the form! 
     
    // use createBunny to create a bunny with this name and family id
    await createBunny ({
        name: data.get('bunny-name'), // right is family-id is the name of the input in html //left is column name in SB 
        family_id: data.get('family-id'), //right family-id is the name of the input in html // left is column name in SB
    });     

    form.reset();

});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase

    // grab the select HTML element from the DOM=

    // go get the families from supabase
    const families = await getFamilies();

    // for each family
    for (let family of families) {
        // create an option tag
        const newOption = document.createElement('option');
        // set the option's value and text content
        newOption.textContent = family.name; //right is column in SB?
        newOption.value = family.id;// right is column in SB? 

    // newOption.textContent = await getFamilies();

    // and append the option to the select
        selectEl.append(newOption);
    }
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
