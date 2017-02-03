function QuoteService(){
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
	var apiUrl = url + encodeURIComponent(url2);
	//Do Not Edit above we have to go through the bcw-getter to access this api
	
	this.getQuote =  function(callWhenDone){
		var q = localStorage.getItem('quote');
		if (q) {
			q = JSON.parse(q);
			console.log('Quote data:', q)
			return callWhenDone(q)
		}
		$.get(apiUrl, function(res){
			console.log('Quote Data:', res)
			localStorage.setItem('quote', res)
			return callWhenDone(res)
			//Now What?
		})
	}
}
