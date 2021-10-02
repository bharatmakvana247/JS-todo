<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

    <title>JS-TODO</title>
</head>

<body>
    <link rel="stlesheet/css" href="/js-todo/style.css">
    <center>
        <h4>TODO - APP</h4>
    </center>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>

    <div class="mb-3 row">
        <div class="col-sm-8">
            <input type="text" value="1234" class="form-control" id="txtbox">
            <button id="submit-btn" class="btn btn-success">Submit</button>
        </div>
    </div>

    <ul id="todo-ul" class="list-group list-group-flush">

    </ul>

    <script src="/javascript/js-todo/main.js"></script>
</body>

</html>