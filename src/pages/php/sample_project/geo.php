
<?php
include_once 'headeruser.php';
?>
<section class="main-container">
    <div class="main-wrapper">
        <h2 align="centre" >GEO CHART</h2>


<script type="text/javascript" src="loader.js"></script>
<script type="text/javascript">
    google.charts.load('current', {
        'packages':['geochart'],

        'mapsApiKey': 'AIzaSyC8VDod9pN7x7H49PDPG9VrguxgMjFVcZc'
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['Russia', 700],
            ['India',900]
        ]);

        var options = {

        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
    }
</script>
        <div id="regions_div" style="width: 1028px; height: 650px;"></div>
    </div>

</section>
<?php
include_once 'footer.php';
?>
