<!DOCTYPE html>
    <html>
        <head>
            <title>forms</title>
        </head>

        <body>
            <section>
                Welcome
                <?php
                    $uname = $_GET["u_name"];
                    $fnum = $_GET["f_num"];
                    $snum = $_GET["s_num"];
                    $sum = $fnum + $snum;
                    $mul = $fnum * $snum;

                    echo "<h2> Hello " . $uname . "</h2>";
                    echo "<h4> Your first number is: " . $fnum . "</h4>";
                    echo "<h4> Your second number is: " . $snum . "</h4>";
                    
                    echo "<h5> The Sum is: " . $sum . "</h5>";
                    echo "<h5> The mul is: " . $mul . "</h5>";

                    ?>

            </section>
        </body>
    </html>