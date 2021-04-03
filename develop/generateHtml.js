const fs = require('fs');

function generateHtml(cardTems){
    let card = cardTems.join(' ');
    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <title>Team Roaster</title>
</head>
<body>
<div class="card">
<div class="card-header text-center" style="background-color: gray;">My Team</div>
<div class="card-body">
<div class="row">
${card}
</div>
</div>
</div>
</div>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>      
</body>
</html>`
    fs.writeFile('team.html', html, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

module.exports = { generateHtml };