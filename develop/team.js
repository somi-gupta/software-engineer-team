
generateHtml(data, githubDetails){
    console.log(data);
    const {role, employeeName, id, email, officeNumber, school} = data
    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <title>Document</title>
</head>
<body>
<div class="card">
<div class="card-header text-center" style="background-color: gray;">My Team</div>
<div class="card-body">
<div class="row">

<div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                        <div class="card-title text-center border" style="background-color: rgba(0, 0, 255, 0.781);">Jared
                        </br>
                        <p class="card-title">  <i class="fas fa-coffee"></i> Manager</p>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
</div>
</div>
</div>
</body>
</html>
    `
}