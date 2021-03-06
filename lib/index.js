import $ from 'jquery';
import select2 from 'select2';

const cities = [
  "Amsterdam", 
  "Bali", 
  "Barcelona", 
  "Belo Horizonte", 
  "Berlin", 
  "Bordeaux", 
  "Brussels", 
  "Buenos Aires", 
  "Casablanca", 
  "Chengdu", 
  "Copenhagen", 
  "Kyoto", 
  "Lausanne", 
  "Lille", 
  "Lisbon", 
  "London", 
  "Lyon", 
  "Marseille", 
  "Melbourne", 
  "Mexico", 
  "Milan", 
  "Montréal", 
  "Nantes", 
  "Paris", 
  "Rio de Janeiro", 
  "São Paulo", 
  "Shanghai", 
  "Shenzhen", 
  "Tel Aviv", 
  "Tokyo"
];

const initSelect2 = () => {
  $('#select2').select2({
    data: cities,
    width: '100%'
  });  
};

const updateCityInput = (event) => {
  const cityName = event.target.value
  $('#select2').val(cityName).trigger('change')
}

initSelect2()

document.getElementById('changeling')
        .addEventListener('keyup', updateCityInput)