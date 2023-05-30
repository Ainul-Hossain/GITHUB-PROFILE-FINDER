class Github{
    constructor(){
        this.clientId = '04a697908c9ceb71fd1b';
        this.clientSecret = '0d0767c6a3746d3f8d213a9fd11a7bbea4f0cff6';
    }

    async getUser(user){
        let profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        let profileData = await profileResponse.json();

        return {
            profile: profileData
        }
    }

}