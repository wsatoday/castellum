<template>
	<div class="contact">
		<div class="map" id="js-map"></div>
		<section class="block block--contacts">
			<div class="contact__info">
				<h2 class="block__title">New Business</h2>
				<p class="block__desc">Marcos Correia</p>
				<p class="block__desc">Director Geral</p>
				<p class="block__desc"><a href="tel:351917857480">m: 351 917 857 480</a></p>
				<p class="block__desc"><a href="mailto:mc@castellum.pt">mc@castellum.pt</a></p>
			</div>
			<div class="contact__info">
				<h2 class="block__title">General Enquires</h2>
				<p class="block__desc"><a href="tel:351917857480">t: 351 917 857 480</a></p>
				<p class="block__desc"><a href="mailto:mc@castellum.pt">geral@castellum.pt</a></p>
			</div>
			<div class="contact__info">
				<h2 class="block__title">Visit</h2>
				<p class="block__desc">Alameda da Música 29b</p>
				<p class="block__desc">1750-044 Lisboa</p>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		metaInfo () {
			return {
				title: 'Contactos | Castellum - Asset Management, Engineering &amp; Consulting.'
			}
		},
		mounted() {
			let _this = this;
			_this.init();
			google.maps.event.addDomListener(window, 'load', _this.renderMap('38.7760239', '-9.1528713'));
		},
		methods: {
			removeLoader() {
				let loader = document.getElementById('js-loader');
				loader.classList.remove('is--visible');
				loader.classList.add('is--hidden');
			},
			init() {
				let _this = this;
				_this.$nprogress.done();
			},
			renderMap(thisLat, thisLong) {
				let _this = this;
				var styles = [{
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#bcc4c9" //#f5f5f5
				      }
				    ]
				  },
				  {
				    "elementType": "labels.icon",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#616161"
				      }
				    ]
				  },
				  {
				    "elementType": "labels.text.stroke",
				    "stylers": [
				      {
				        "color": "#bcc4c9" //#f5f5f5
				      }
				    ]
				  },
				  {
				    "featureType": "administrative.land_parcel",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#bdbdbd"
				      }
				    ]
				  },
				  {
				    "featureType": "poi",
				    "elementType": "geometry",
				    "stylers": [
				      {
				      	 "visibility": "off",
				        "color": "#eeeeee"
				      }
				    ]
				  },
				  {
				    "featureType": "poi",
				    "elementType": "labels.text",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "poi",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				      	 "visibility": "off",
				        "color": "#757575"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.business",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.park",
				    "elementType": "geometry",
				    "stylers": [
				      {
				      	"visibility": "off",
				        "color": "#e5e5e5"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.park",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				      	"visibility": "off",
				        "color": "#9e9e9e"
				      }
				    ]
				  },
				  {
				    "featureType": "road",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#cccecf"//#ffffff
				      }
				    ]
				  },
				  {
				    "featureType": "road",
				    "elementType": "labels.icon",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "road.arterial",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#b3bbc0" //#757575
				      }
				    ]
				  },
				  {
				    "featureType": "road.arterial",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#757575" //#757575
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#b3bbc0"
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#616161"
				      }
				    ]
				  },
				  {
				    "featureType": "road.local",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#9e9e9e"
				      }
				    ]
				  },
				  {
				    "featureType": "transit",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "transit.line",
				    "elementType": "geometry",
				    "stylers": [
				      {
				      	 "visibility": "off",
				        "color": "#e5e5e5"
				      }
				    ]
				  },
				  {
				    "featureType": "transit.station",
				    "elementType": "geometry",
				    "stylers": [
				      {
				      	 "visibility": "off",
				        "color": "#eeeeee"
				      }
				    ]
				  },
				  {
				    "featureType": "water",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#c9c9c9"
				      }
				    ]
				  },
				  {
				    "featureType": "water",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#9e9e9e"
				      }
				    ]
				  }];

				var styledMap = new google.maps.StyledMapType(styles,{name:'map'});
				var mapOptions = {
					center: new google.maps.LatLng(thisLat,thisLong),
					zoom:16,
					scrollwheel:false,
					draggable: true,
					disableDefaultUI:true,
					panControl: true,
			        zoomControl: false,
			        zoomControlOptions: {
		    			style: google.maps.ZoomControlStyle.SMALL,
		    			position: google.maps.ControlPosition.TOP_LEFT
		  			},
			        scaleControl: true,
			        mapTypeControl: false,
			       	mapTypeControlOptions: {
			        	style: google.maps.MapTypeControlStyle.DEFAULT,
	            		mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			       	}
				};
				var map = new google.maps.Map(document.getElementById('js-map'), mapOptions);
				map.mapTypes.set('map_style', styledMap);
				map.setMapTypeId('map_style');
				//var image = '/frontend/images/icons/marker-dark-24x24.png';
				var marker = new google.maps.Marker({
					position: map.getCenter(),//map.getCenter(),
					map: map,
					title: 'Find on Google Maps',
					icon: '',
					draggable: false
				});
				setTimeout(function(){
					marker.setAnimation(google.maps.Animation.BOUNCE);
					setTimeout(function() {
			        	marker.setAnimation(null)
			    	}, 500);
		    	}, 2000);

		    	google.maps.event.addDomListener(window, 'resize', function() {
		        	var newCenter = map.getCenter();
		        	google.maps.event.trigger(map, 'resize');
		        	map.setCenter(newCenter);
		    	});

			}
		}
	}
</script>