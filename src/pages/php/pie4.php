<?php

include_once 'headeruser.php';
?>
<section class="main-container">
    <div class="main-wrapper">
        <h2 align="centre" >PIE EXPLODE</h2>

        <script type="text/javascript" src="loader.js"></script>
        <script type="text/javascript">
            google.charts.load("current", {packages:["corechart"]});
            google.charts.setOnLoadCallback(drawChart);
            function drawChart() {
                var data = google.visualization.arrayToDataTable([
                    ['Language', 'Speakers (in millions)'],
                    ['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4],
                    ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],
                    ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],
                    ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],
                    ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],
                    ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],
                    ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]
                ]);

                var options = {

                    pieSliceText: 'label',

                    slices: {  4: {offset: 0.2},
                        12: {offset: 0.3},
                        14: {offset: 0.4},
                        15: {offset: 0.5},
                    },
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
