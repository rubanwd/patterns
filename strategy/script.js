		function SortStrategy(){};
		SortStrategy.prototype.sort = function(){};

		function NameSS(){};
		NameSS.prototype = Object.create(SortStrategy.prototype)
		NameSS.prototype.sort = function(data){
			data.sort(function(a,b){
				return (a.name > b.name) ? 1 : -1;
			});
		};

		function PriceSS(){};
		PriceSS.prototype = Object.create(SortStrategy.prototype)
		PriceSS.prototype.sort = function(data){
			data.sort(function(a,b){
				return (a.price - b.price);
			});
		};


		function RatingSS(){};
		RatingSS.prototype = Object.create(SortStrategy.prototype)
		RatingSS.prototype.sort = function(data){
			data.sort(function(a,b){
				return (a.rating - b.rating);
			});
		};


		var Catalog = (function(){

			var strategy = {};

			var data = [
				{
					name: 'Кола',
					price: 60,
					rating: 2
				},
				{
					name: 'Валенки',
					price: 1500,
					rating: 4
				},
				{
					name: 'Телефон',
					price: 6000,
					rating: 1
				},
				{
					name: 'Шаурма',
					price: 150,
					rating: 5
				}
			];

			function printData(){
				$('.catalog__list').empty();
				data.forEach(function(product){
					$('.catalog__list').append(
						$('<li></li>').text(product.name + ', ' + product.price + ', ' + product.rating)
					);

				});
			};

			printData();

			return {
				sort: function() {
					strategy.sort(data);
					printData();
				},
				setStrategy: function(s) {
					strategy = s;
				}
			};
			
		}());

		$('.catalog_sort-type').change(function(){
			var val = $(this).val();
			if(val === 'name'){
				Catalog.setStrategy(new NameSS());
			} else if (val === 'price') {
				Catalog.setStrategy(new PriceSS());
			} else if (val === 'rating') {
				Catalog.setStrategy(new RatingSS());
			}
		});

		$('.catalog__exec-sort').click(function(){
			
			Catalog.sort();

		});