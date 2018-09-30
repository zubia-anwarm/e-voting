pragma solidity ^0.4.17;

library String { // to compare a string with another string
    function equals(string _base, string parameter) internal pure returns (bool) {
        return keccak256(abi.encodePacked(_base)) ==
        keccak256(abi.encodePacked(parameter));
    }
}
contract Evoting {
    using String for string;
    
    constructor() public {
        addNIC("42101-1234567-1", "Kamil", "+921011234561", "+922001234561");
        addNIC("42101-1234567-2", "Jawwad", "+921011234562", "+922001234562");
        addNIC("42101-1234567-3", "Zubia", "+921011234564", "+922001234564");
        addNIC("42101-1234567-4", "Tahir", "+921011234563", "+922001234563");
        addNIC("42101-1234567-5", "Moiz", "+921011234565", "+922001234565");
    }
    
    function addNIC(string nic, string name, string number1, string number2) private {
        Voters storage voters = votersMap[nic];
        voters.NIC = nic;
        voters.voterName = name;
        voters.phoneNumbers[number1] = number1;
        voters.phoneNumbers[number2] = number2;
    }
    
    struct Voters {
        string NIC;
        string voterName;
        mapping(string => string) phoneNumbers;
    }
    
    struct VoterPasscode {
        string PHONE;
        bytes3 passcode;
        bool isCalled;
    }
    
    // function func() view returns (bool) {
    //     return voterPasscodeMap["asdf"].passcode == 0x0;
    // }
    
    mapping(string => VoterPasscode) voterPasscodeMap; // nic is the key
    mapping (string => Voters) votersMap; // nic is the key
    
    function registerVoter(string nic, string number) external returns (bytes3) {
        // "42101-1234567-1", "+921011234561"
        Voters storage voters = votersMap[nic];
        // VoterPasscode storage voterPasscode = voterPasscodeMap[nic];
        string memory pNumber = voters.phoneNumbers[number];
        
        require(pNumber.equals(number)); // because pNumber is already saved
        // voters.phoneNumbers[number] = number; // place it in the end OR will use it in creating users/voters
        
        VoterPasscode storage voterPasscode = voterPasscodeMap[nic];
        require(voterPasscode.PHONE.equals("") && voterPasscode.passcode == 0x0 &&
        !voterPasscode.isCalled);
        
        voterPasscode.passcode =  random(pNumber);
        voterPasscode.PHONE = number;
    }
    
    function getPasscode(string nic, string number) public view returns (bytes3) {
        VoterPasscode memory voterPasscode = voterPasscodeMap[nic];
        require( !voterPasscode.isCalled && voterPasscode.PHONE.equals(number) );
        return voterPasscode.passcode;
    }
    
    function isCalled(string nic) external {
        voterPasscodeMap[nic].isCalled = true;
    }
    
    function random(string n) private view returns (bytes3) {
        return bytes3(keccak256(abi.encodePacked(block.difficulty, now, n)));
    }
}
