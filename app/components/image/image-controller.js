(function () {

	//Your ImageService is a global constructor function what can you do here if you new it up?
	var ic = this
	var imageService = new ImageService()

	imageService.getImage(function (image) {

		new Vue({
			el: '#image',
			data: {
				image: ''
			},
			mounted: function () {
				imageService.getImage(this.setImage)
			},
			methods: {
				setImage: function (image) {
					this.image= image.url 
				}
			}
		})

	})
} ())

