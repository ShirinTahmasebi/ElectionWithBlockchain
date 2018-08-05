var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {

	it("Initializes with two candidates", function() {
		return Election.deployed().then(
			function(instance) {
				return instance.candidatesCount();
			}
		).then(
			function(candidatesCount){
				assert.equal(candidatesCount, 2);
			}
		);
	});

	it("Initializes candidates with correct value", function() {
		return Election.deployed().then(
			function(_instance) {
				instance = _instance;
				return instance.candidates(1);
			}
		).then(
			function(candidate) {
				assert.equal(candidate[0], 1, "Candidate 1 has correct id");
				assert.equal(candidate[1], "Candidate 1", "Candidate 1 has correct name");
				assert.equal(candidate[2], 0, "Candidate 1 has correct vote counts");
				return instance.candidates(2);
			}
		).then(
			function(candidate) {
				assert.equal(candidate[0], 2, "Candidate 2 has correct id");
				assert.equal(candidate[1], "Candidate 2", "Candidate 2 has correct name");
				assert.equal(candidate[2], 0, "Candidate 2 has correct vote counts");
				return instance.candidates(2);
			}
		);
	});

});