const nameInput = document.querySelector('#enter-name');
const classInput = document.querySelector('#class-number');
const flagInput = document.querySelector('#country-select');

const displayArea = document.querySelector('#display-container');
const badgeContainer = document.querySelector('#badge-container');
const form = document.querySelector('#form-container');

// MEMBER DATA
const formSubmissions = []; // Stores all user objects

// ------------------------------
// SORT + UPDATE DOM
// ------------------------------
function sortUsersAndUpdateDOM() {
  // Sort users by number of badges (descending)
  formSubmissions.sort((a, b) => b.badges.length - a.badges.length);

  // Clear the display area
  displayArea.innerHTML = "";

  // Re-append each user’s DOM element in new order
  formSubmissions.forEach(user => {
    displayArea.appendChild(user.domElement);
  });
}

// ------------------------------
// FORM SUBMISSION
// ------------------------------
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;

  // Get checked checkboxes
  const checkboxes = document.querySelectorAll('input[name="thing"]:checked');
  const badgeIDs = Array.from(checkboxes).map(c => c.id); // store badge IDs

  // ------------------------------
  // CREATE DOM NODES FOR USER
  // ------------------------------
  const nameInputValue = nameInput.value;
  const classInputValue = parseFloat(classInput.value);
  const flagInputValue = flagInput.value;

  // MAIN USER ROW DOM ELEMENT
  const newParagraph = document.createElement('div');
  const combinedText = nameInputValue.toUpperCase() + ' ' + classInputValue + ' ' + flagInputValue;
  newParagraph.textContent = combinedText;
  newParagraph.classList.add('appended-items');

  displayArea.appendChild(newParagraph);

  // DELETE BUTTON
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "☠";
  deleteBtn.classList.add('delete-button');
  newParagraph.appendChild(deleteBtn);

  // ------------------------------
  // CREATE USER DATA OBJECT
  // ------------------------------
  const tslMemberdata = {
    name: nameInputValue,
    classNumber: classInputValue,
    country: flagInputValue,
    badges: badgeIDs,
    domElement: newParagraph // store DOM reference for reordering
  };

  // Add to storage array
  formSubmissions.push(tslMemberdata);

  // ------------------------------
  // BADGE RENDERING (unchanged from your version)
  // ------------------------------
  badgeIDs.forEach(id => {
    const listItem = document.createElement('div');
    listItem.classList.add('appended-badges');
    listItem.textContent = id;

    // IMAGE LOGIC
    const badgeImages = {
      coin: "coin-100x100.png",
      ancestry: "ancestry.png",
      angler: "Angler-Badge.png",
      archery: "Archery-Badge.png",
      art: "Artist-Badge.png",
      astronomer: "Astronomer-Badge.png",
      backyardchef: "Backyard-Chef-Badge.png",
      backyardfarmer: "Backyard-Farmer-Badge.png",
      barbell: "Barbell-Badge.png",
      biography: "Biography-Badge-1.png",
      citizenship: "Citizenship-Badge.png",
      classics: "Classics-Badge.png",
      communityservice: "Community-Service-Badge.png",
      craftsman: "Craftsman-Badge.png",
      easyrider: "Easyrider-Badge.png",
      emergency: "Emergency-Prepping-Badge.png",
      entreprenuership: "Entrepreneurship-Badge.png",
      fighter: "Fighter-Badge.png",
      fire: "Firebuilding-Badge.png",
      firstaid: "First-Aid-Badge.png",
      frogman: "Frogman-Badge.png",
      gearhead: "Automotive-Maintenance-Badge.png",
      scholar: "Gentleman-Scholar-Badge.png",
      hacker: "Hacker-Badge.png",
      handyman: "Handyman-Badge.png",
      host: "Host-Badge.png",
      hunting: "Hunter-Badge.png",
      infosec: "Infosecurity-Badge.png",
      journaling: "Journaling-Badge.png",
      kissthechef: "Kiss-the-Chef-Badge.png",
      knot: "Knotmanship-Badge-1.png",
      letter:"Letter-Writing-Badge.png",
      lumberjack: "Lumberjack-Badge.png",
      lock: "Lock-Picking-Badge.png",
      microadventure: "Microadventure-Badge.png",
      monk: "Monk-Badge-Web.png",
      ranger: "Mountain-Ranger-Badge.png",
      music: "Musician-Badge.png",
      orator: "Orator-Badge.png",
      outdoorsman: "All-Around-Outdoorsman-Badge.png",
      family: "Paterfamilia-Badge.png",
      penmanship: "Penmanship-Badge.png",
      finance: "Personal-Finance-Badge.png",
      polyglot: "Foreign-Language-Badge-Web.png",
      roughrider: "Roughrider-Badge.png",
      rucking: "Ruck-Badge.png",
      sales: "Salesmanship-Badge.png",
      sartorialist: "Sartorialist-Badge.png",
      scout: "Scout-Badge.png",
      sharpshooter: "Sharpshooter-Badge.png",
      shaving: "Shaving-Badge.png",
      sheepdog: "Sheepdog-Badge.png",
      social: "Social-Dynamo-Badge.png",
      tracker: "Tracking-Badge.png",
      virtue: "Virtue-Badge.png",
      wilderness: "Wilderness-Survival-Badge.png",
      agons: "agons.png"
    };

    if (badgeImages[id]) {
      listItem.style.backgroundImage = `url("images/tsl_badges/${badgeImages[id]}")`;
    }

    newParagraph.appendChild(listItem);

    listItem.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });

  // ------------------------------
  // DELETE BUTTON REMOVE FUNCTION
  // ------------------------------
  deleteBtn.addEventListener("click", function () {
    newParagraph.remove();

    // remove from data array too
    const index = formSubmissions.indexOf(tslMemberdata);
    if (index > -1) formSubmissions.splice(index, 1);

    sortUsersAndUpdateDOM();
  });

  // ------------------------------
  // SORT USERS AFTER ADDING
  // ------------------------------
  sortUsersAndUpdateDOM();

  // Reset form
  document.querySelector('#form-container').reset();
});
