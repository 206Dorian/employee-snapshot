function writefinalHtml(data) {

  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">

    <title> DREAM TEAM</title>
  </head>
  
  <body>

  <h1 class="title is-1 has-text-centered has-background-info-dark">WELCOME TO MY DREAM TEAM PAGE</h1>
  <br>

${createCards(data)}

  </body>
  </html>
  `
}

function createCards(dreamTeam) {
  const individuals = []
  dreamTeam.forEach(member => {
    if (member.getRole() == "Manager") {
      individuals.push(managerCard(member.name, member.id, member.email, member.office))
    }
    if (member.getRole() == "Engineer") {
      console.log(member.github)
      individuals.push(engineerCard(member.name, member.id, member.email, member.github))
    }
    if (member.getRole() == "Intern") {
      console.log(member.school)
      individuals.push(internCard(member.name, member.id, member.email, member.school))
    }
  });
  console.log(individuals)
  return individuals.join("")
}

function managerCard(name, id, email, office) {
  return`<div class="card has-background-primary">
  <header class="card-header>
  <p class="card-header-title>
MANAGER
  </p>
  <div class="card-content">
    <div class="content">
      Name: ${name}
<br>
      ID: ${id}
<br>
      Email : ${email}
<br>
      Office : ${office}
    </div>
  </div>
</div>`
}

function engineerCard(name, id, email, github) {
  return `<div class="card has-background-info">
  <header class="card-header>
  <p class="card-header-title>
ENGINEER
  </p>
  <div class="card-content">
    <div class="content">
      name: ${name}
<br>
      ID: ${id}
<br>
      Email : ${email}
<br>
      Github : ${github}
    </div>
  </div>
</div>`
}

function internCard(name, id, email, school) {
  return `<div class="card has-background-link">
  <header class="card-header>
  <p class="card-header-title>
INTERN
  </p>
  <div class="card-content">
    <div class="content">
      name: ${name}
<br>
      ID: ${id}
<br>
      Email : ${email}
<br>
      School : ${school}
    </div>
  </div>
</div>`
}

module.exports = writefinalHtml


