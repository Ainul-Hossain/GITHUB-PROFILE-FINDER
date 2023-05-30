class Ui {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block d-grid mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary mt-2 mt-lg-0">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-secondary mt-2 mt-lg-0">Public Gists: ${user.public_gists}</span>
            <span class="badge bg-success mt-2 mt-lg-0">Followers: ${user.followers}</span>
            <span class="badge bg-info mt-2 mt-lg-0">Following: ${user.following}</span>
                <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos">

      </div>
    `;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert(message, className) {
    //Clearing previous alert message
    this.clearAlertMessage();

    //Making of alert
    let div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));

    //Inserting of alert inside parent container
    let parentElement = document.querySelector(".searchContainer");
    let searchBox = document.querySelector(".search");
    parentElement.insertBefore(div, searchBox);

    //Clear any alert message after 3 seconds
    setTimeout(()=>{
        this.clearAlertMessage();
    }, 3000);
  }

  //Have to clear too much alert message
  clearAlertMessage() {
    let currentAlert = document.querySelector('.alert');

    if(currentAlert){
        currentAlert.remove();
    }
  }
}
