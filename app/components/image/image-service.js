function ImageService() {
	var url = 'https://bcw-getter.herokuapp.com/?url=';
	var url2 = 'https://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (callWhenDone) {
		// ^^^^^^^ How do you use this?
		return $.get(apiUrl, function (res) {
			console.log('Image Data:', res)
			res=JSON.parse(res)
			callWhenDone(res);
			//What are you going to do with the image that comes back?
		})
	}
}
