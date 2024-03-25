<template>
  <div class="today_highlights">
    <h3>today highlights</h3>
    <div class="divone">
      <div class="air_quality">
        <h6>air quality index</h6>
        <div class="air_quality_details">
            <i class="bi bi-wind"></i>
          <ruby>3.9<rt>PM25</rt></ruby>
          <ruby>7.75<rt>SO2</rt></ruby>
          <ruby>33.6<rt>NO2</rt></ruby>
          <ruby>38.6<rt>O3</rt></ruby>
          
        </div>
      </div>
      <div class="sunrise_sunset">
        <h6>sunrise & sunset</h6>
        <div class="sunrise_sunset_details">
            <div class="sunrise">
                <i class="bi bi-sun"></i>
                <ruby>6:46aM<rt>sunrise</rt></ruby>

            </div>
            <div class="sunset">
                <i class="bi bi-moon"></i>
                <ruby>5:39PM<rt>sunset</rt></ruby>

            </div>

        </div>
      </div>
    </div>
    <div class="divtwo">
      <div class="all humidity">
        <h6>humidity</h6>
        <div class="humidity_details">
            <i class="bi bi-moisture"></i>
            <ruby>
                82%
            </ruby>
        </div>
      </div>
      <div class="all pressure">
        <h6>pressure</h6>
        <div class="pressure_details">
            <i class="bi bi-water"></i>
             <ruby>
                1025hPa
            </ruby>
        </div>
      </div>
      <div class="all visibility">
        <h6>visibility</h6>
        <div class="visibility_details">
            <i class="bi bi-eye"></i>
             <ruby>
                10km
            </ruby>
        </div>
      </div>
      <div class="all">
        <h6>feels like</h6>
        <div class="feels_like_details">
            <i class="bi bi-thermometer-half"></i>
             <ruby>
                2°C
            </ruby>
        </div>
      </div>
    </div>
  </div>

  <p>Heavy Rain</p>
</template>

<script>
export default {};
</script>

<style>
</style>