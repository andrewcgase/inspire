(function () {

	//Get your QuoteService
	var qc = this
	var quoteService = new QuoteService();

	new Vue({
		el: '#quote',
		data: {
			quote: {}

		},
		mounted: function () {
			quoteService.getQuote(this.setQuote)
		},
		methods: {
			setQuote: function (quote) {
				this.quote = quote
			},


		},
		computed: {
			displayQuote: function () {
				if (this.quote) {
					return {
						quote: this.quote.quote,
						author: this.quote.author
					}
				}
				return { quote: 'loading' }
			}
		}
	})


} ())
