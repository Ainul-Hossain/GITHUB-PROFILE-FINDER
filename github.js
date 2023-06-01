class Github{
    constructor(){
        this.clientId = secretData.clientId;
        this.clientSecret = secretData.clientSecret;
        this.reposCount = 5;
        this.reposSort = 'created: asc';
    }

    async getUser(user){
        let profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        let reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&$sort=${this.reposSort}$client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        let profileData = await profileResponse.json();

        let reposData = await reposResponse.json();

        return {
            profile: profileData,
            repos: reposData
        }
    }

}