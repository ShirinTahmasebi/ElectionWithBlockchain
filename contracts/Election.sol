pragma solidity ^0.4.11;

contract Election {
	// Store Candidate
	// Retrieve Candidate
	string public candidate;
	// Constructor
	function Election () public {
		candidate = "Candidate 1";
	}
}