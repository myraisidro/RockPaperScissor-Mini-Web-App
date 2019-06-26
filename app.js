// Initialize Github constructor
const github = new Github;
// Init UI constructor from ui.js
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', e => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // console.log(userText);
        github.getUsers(userText)
        .then(data => {
            // console.log(data);
            if (data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else{
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        ui.clearProfile();
    }
});