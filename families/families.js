import { checkAuth, deleteBunny, getFamilies, logout } from '../fetch-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');



logoutButton.addEventListener('click', () => {
    logout();
});




// this function will render families and their bunnies 
async function fetchAndDisplayFamilies() {

    // fetch families from supabase
    const families = await getFamilies(); 

    // clear out the familiesEl
    familiesEl.textContent = '';

    for (let family of families) {
        const wholeFamilyEl = document.createElement('div');
        const familyNameEl = document.createElement('h3');
        const bunniesEl = document.createElement('div');
    
        wholeFamilyEl.classList.add('family');
        familyNameEl.textContent = family.name;
        
        wholeFamilyEl.append(familyNameEl, bunniesEl);

        familiesEl.append(wholeFamilyEl);

        for (let bunny of family.fuzzy_bunnies) {
            const bunnyEl = document.createElement('p');
            bunnyEl.textContent = bunny.name;
            bunniesEl.append(bunnyEl);
            wholeFamilyEl.append(bunniesEl, familyNameEl);
            familiesEl.append(wholeFamilyEl);
        }

    }
   
}
       
    



        // for (let bunny of family.fuzzy_bunnies) {
        //     const carl = family.fuzzy_bunnies;
        //     console.log(carl);
            // const bunnyEl = document.createElement('p');
            // bunnyEl.textContent = bunny.name;
            // console.log(bunnyEl);
            // bunnyEl.append(bunny);
            // bunniesEl.append(bunnyEl);
            // wholeFamilyEl.append(bunniesEl, familyNameEl);
            // familiesEl.append(wholeFamilyEl);
            
            // bunnyEl.append(bunny);
            // console.log(bunnyEl);
            // bunnyEl.textContent = bunny.name;
            // console.log(bunnyEl);
            // bunniesEl.append(bunnyEl);
            // console.log(bunniesEl);
            // wholeFamilyEl.append(bunniesEl, familyNameEl);
            // familiesEl.append(wholeFamilyEl);
    //         // console.log(familiesEl);
    //     }
    
    //     // familyNameEl.textContent = family.name;
    //     // console.log(familyNameEl);
    // }




        // wholeFamilyEl.append(family);
        // familyNameEl.append(family.name);
        // bunniesEl.append(family.bunnies);
        // console.log(bunniesEl);
        
        // const bunniesEl = document.createElement('div'); // making a div because it will have children
        
        // wholeFamilyEl.classList.add('family');
        // bunniesEl.classList.add('bunnies');

        // familyNameEl.textContent = family.name;

        // for (let bunny of family.fuzzy_bunnies) {
        //     const bunnyEl = document.createElement('p');
        //     bunnyEl.classList.add('bunny');
        //     bunnyEl.textContent = bunny.name;


        //     // bunnyEl.addEventListener('click', async () => {

        //     //     await deleteBunny();

        //     //     displayFamilies(); 
                
        //     //     // append this bunnyEl to the bunniesEl
        //     //     bunniesEl.append(bunnyEl);

        //     // });
        
        //     // append the bunniesEl and nameEl to the familyEl
        //     wholeFamilyEl.append(familyNameEl, bunniesEl);

        //     // append the familyEl to the familiesEl
//         //     familiesEl.append(wholeFamilyEl);

//         //     // console.log(familiesEl);
//         // }
    
//     }

// }


//this event listener will display bunnies 

window.addEventListener('load', async () => {

    const families = await getFamilies();

    fetchAndDisplayFamilies(families);

});