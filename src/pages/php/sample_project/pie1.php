<?php
include_once 'headeruser.php';
?>
<section class="main-container">
    <div class="main-wrapper">

        <h2 align="centre"> google pie cheart</h2>


        <script type="text/javascript" src="loader.js"></script>
        <script type="text/javascript">
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {

                var data = google.visualization.arrayToDataTable([
                    ['Task', 'Hours per Day'],
                    ['Work',     11],
                    ['Eat',      2],
                    ['Commute',  2],
                    ['Watch TV', 2],
                    ['Sleep',    7]
                ]);

                var options = {

                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                chart.draw(data, options);
            }
        </script>
        <div id="piechart" style="width: 900px; height: 500px;"></div>
    </div>

</section>
<?php
include_once 'footer.php';
?>
