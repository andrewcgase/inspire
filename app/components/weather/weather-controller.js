(function () {

	var wc = this;
	var weatherService = new WeatherService();


	new Vue({
		el: '#weather',
		data: {
			weather: {}
		},
		mounted: function () {
			weatherService.getWeather(this.setWeather)
		},
		methods: {
			setWeather: function (weather) {
				this.weather = weather;
			}
		}
	})
} ())