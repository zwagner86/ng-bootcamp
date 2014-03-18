function MyController($scope) {
	$scope.name = 'Zach';
}

function ParentController($scope) {
	$scope.parentName = 'Parent';
}

function ChildController ($scope) {
	$scope.childName = $scope.parentName + 'Child';
}