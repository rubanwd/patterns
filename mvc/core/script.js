/* ------------------------------------ Begin View ----------------------------------- */

	var view = {

		showNumber: function (n) {
			var el = document.getElementById("showResult");
			el.innerHTML = n;
		}

	};

/* ------------------------------------ End View ----------------------------------- */


/* ------------------------------------ Begin Model ----------------------------------- */

	var model = {
		number: 0,

		calculate: function ( x, y ) {
			this.number = x * y;
			var result = this.number;

			view.showNumber(result);
		}
	};

/* ------------------------------------ End Model ----------------------------------- */


/* ------------------------------------ Begin Controller ----------------------------------- */

	var controller = {
		
		handleClick: function () {
			model.calculate( 3, 6 );
		}

	};

/* ------------------------------------ End Controller ----------------------------------- */


/* ------------------------------------ anonymous initialize function ----------------------------------- */

	(function() {
		var app = {
			init: function () {
				this.main();
				this.event();
			},
			main: function () {

			},
			event: function () {
				var el = document.getElementById("calcUser")
				el.onclick = controller.handleClick;
			}
		};
		app.init();
	}());