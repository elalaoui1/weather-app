<template>
  
  <div class="head">
        <div class="search-box">
            <i class="bi bi-geo-alt"></i>
            <input type="text" v-model="CityName" id="searchInput" @input="showSuggestions" placeholder="type you'r city">
            <ul id="suggestions">
                  <li v-for="(city, index) in suggestions" :key="index" @click="selectCity(city)">
                     {{ city.name }}, {{ city.countryName }}
                 </li>
            </ul>
            <button @click="ChangeCityName"><i class="bi bi-search"></i></button>
        </div>
        <div class="date">21 april 2023 <span> 12:00</span></div>
    </div>

</template>

<script>
export default {
data(){
    return{
        CityName:'',
        suggestions: []
    }
},
methods:{

    

    ChangeCityName(){
        this.$store.dispatch('updateCityName',this.CityName);
        // this.CityName ='';
    },


    async showSuggestions() {
            // Clear previous suggestions
            this.suggestions = [];

            // Fetch city suggestions from GeoNames API
            const url = `http://api.geonames.org/searchJSON?q=${this.CityName}&maxRows=5&username=karim12123`; // Replace 'demo' with your GeoNames username
            try {
                const response = await fetch(url);
                const data = await response.json();

                // Update suggestions
                this.suggestions = data.geonames;
            } catch (error) {
                console.error('Error fetching city suggestions:', error);
            }
        },
        selectCity(city) {
            // Handle the selection of a city (you can customize this method as per your requirement)
            // console.log('Selected city:', city.name);
            this.CityName = city.name;
            this.suggestions = [];
            this.ChangeCityName();  

        }
    


},
mounted(){
    this.CityName= this.$store.getters.getCityName;
}
}
</script>

<style scoped>
 #suggestions {
        position: absolute;
        top: 60px;
        left: 50px;
        list-style-type: none;
        padding: 0;
        margin: 0;
        background-color: rgba(77, 98, 99, 0.32);
        backdrop-filter: blur(3px);
        border-radius: 20px;

    }
    #suggestions li {
        padding: 10px;
        cursor: pointer;
    }
    #suggestions li:hover {
        background-color: #565a5aaf;
        border-radius: 8px;
       }
</style>