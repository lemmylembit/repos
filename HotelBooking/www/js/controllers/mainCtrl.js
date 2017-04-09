angular
	.module('app')
	.controller('mainCtrl', function($rootScope, $scope, $state, $http ) {

		$scope.booking = {};
		
		//Bokningsdatum
		$scope.booking.dates = [];
		$scope.booking.dates.from = null;
		$scope.booking.dates.to = null;

		//Bokningens totala pris ((to-from)*price)
		$scope.booking.totalprice = 0;
		
		$scope.booking.guests = [];
		$scope.booking.guests.adults = null;
		$scope.booking.guests.children = null;

		//Här har vi allt rum relaterat, som hämtas från JSOn-filen, samt valt rum (som börjar på NULL).
		$scope.booking.rooms = []
		$http.get('rooms.json').then(function(response){
			$scope.booking.rooms = response.data.rooms;
			$scope.booking.rooms.room1 = $scope.booking.rooms[0];
			$scope.booking.rooms.room2 = $scope.booking.rooms[1];
			$scope.booking.rooms.room3 = $scope.booking.rooms[2];
			$scope.booking.rooms.room4 = $scope.booking.rooms[3];
			$scope.booking.rooms.room5 = $scope.booking.rooms[4];
			$scope.booking.rooms.room6 = $scope.booking.rooms[5];
			$scope.booking.rooms.picked = null;
		});

		//Här har vi infon på bokaren.
		$scope.booking.person = [];
		$scope.booking.person.first = null;
		$scope.booking.person.last = null;
		$scope.booking.person.mail = null;
		$scope.booking.person.phone = null;

		//Dessa funktioner bläddrar vidare bland sidorna..
		$scope.roomSelection = function() {
			$state.go('search_results');
		}
		$scope.confirmBooking = function() {
			$state.go('confirm_booking');
		}

		//Här sätter vi valt rum. Funktionen kallas när man väljer rum på ROOM SELECTION-sidan (search_results).
		$scope.setRoom = function(roomNumber) {
			$scope.booking.rooms.picked = $scope.booking.rooms[roomNumber];
		}

		//Här räknar vi ut hur många dagar bokningen är, och därmed totala priset. Funktionen kallas när man väljer rum..
		$scope.calcPrice = function(firstDate, secondDate){
	      	var date2 = new Date(secondDate);
	      	var date1 = new Date(firstDate);
	      	var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	      	$scope.days = Math.ceil(timeDiff / (1000 * 3600 * 24));

      		if ($scope.days < 1)
      			$scope.days = 1;

	      	$scope.booking.totalprice = ($scope.booking.rooms.picked.Price * $scope.days);
	 	}
	});