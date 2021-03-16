const input = document.querySelector('input')
const button = document.querySelector('.bnt')



 
 button.onclick = function(){
    const Nome = input.value.replace(/\s/g, '');
    console.log(Nome)
    
  axios.get(`http://api.github.com/users/${Nome}?tab=repositories`)
    .then(req => {
        user = req;
        console.log(user)
        
        getUserGitHub()
        
    })
    .catch(function(error){
        console.error(error);
    })
    


}

function getUserGitHub(){
   
    const contener = document.querySelector('#contener')
    const img = document.querySelector('.foto-avatar')
    const name = document.querySelector('.name')
    const long = document.querySelector('.long')
    const bio = document.querySelector('.bio')
    const repositorio = document.querySelector('.repositor')
    const linkRepositorio = document.querySelector('.link')

    img.src = user.data.avatar_url
    name.innerHTML = user.data.name
    long.innerHTML = user.data.login
    bio.innerHTML = user.data.bio
    repositorio.innerHTML = user.data.public_repos
    linkRepositorio.href = user.data.html_url


}
