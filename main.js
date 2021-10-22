const linksSocialMedia = {
  github: 'kermitcosta',
  linkedin: 'kermit-costa',
  facebook: 'kermitcosta',
  instagram: 'kermitc',
  twitter: 'CostaKermit'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userPicture.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
