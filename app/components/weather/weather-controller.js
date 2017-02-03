(function () {

	var wc = this;
	var weatherService = new WeatherService();


	new Vue({
		el: '#weather',
		data: {
			weather: {},
			f: true
		},
		mounted: function () {
			weatherService.getWeather(this.setWeather)
		},
		methods: {
			setWeather: function (weather) {
				this.weather = weather;
			},
			toggleUnit: function(){
				this.f = !this.f 
			}
		},
		computed: {
			displayWeather: function () {
				if (this.weather.main && this.f) {
					return { temp: Math.round((9 / 5) * this.weather.main.temp - 459.67) + ' F' }
				} else if(this.weather.main && !this.f) {
					return {temp: Math.round(this.weather.main.temp - 273.15) + ' C'}
				}
				return { temp: 'loading' }
			}, 
			displayQuote : function(){
				if (this.quote) {
					return {
						quote: this.quote.quote
					}
					return {quote: 'loading'}
				}
			}
		}
	})
} ())