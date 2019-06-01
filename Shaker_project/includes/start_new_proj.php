<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>start mew project</title>
</head>

<body>
<h1>Your project information accepted</h1>
<h2>your project name is:  <?php echo $_GET["projName"]; ?></h2>
<h3>
your department is: <?php echo $_GET["myDep"]; ?><br>
additional info: <?php echo $_GET["addInfo"]; ?><br>
you searching in : <? foreach ($_GET['depSearch'] as $value)
{  echo $value . ' '; }  ?> <br>
</h3>
<?php echo "<a href= 'http://shenkar.html5-book.co.il/2018-2019/web1/dev_206/index.html'"."'>Back to Shaker   </a>"; ?>
</body>
</html>
