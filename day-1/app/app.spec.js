describe('MyController', function() {
	var controller, scope;

	beforeEach(function() {
		scope = {};
		controller = new MyController(scope);
	});

	it('should set the name property', function() {
		expect(scope.name).toBe('Zach');
	});
});