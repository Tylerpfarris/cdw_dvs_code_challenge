export const fetchUser = async (userQuery) => {

      const res = await fetch(`https://api.github.com/users/${userQuery}`);
      const user = await res.json();
      
   return ({
      status: res.status,
      id: user.id,
      login: user.login ,
      html_url: user.html_url ,
      _name: user.name || 'N/A',
      public_repos: user.public_repos ,
      public_gists: user.public_gists ,
      followers: user.followers ,
      following: user.following ,
      created_at: user.created_at ,
   })
 
}