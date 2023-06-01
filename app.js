// Initiate Github
let github = new Github();

// Initiate Ui
let ui = new Ui();

// Search Users
const searchProfile = document.getElementById("searchProfile");

searchProfile.addEventListener("keyup", (e) => {
  let userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message == "Not Found") {
        // Have to show alert top the webpage
        ui.showAlert('User Not Found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  }else{
    // Have to clear the existing profile
    ui.clearProfile();
  }
});
