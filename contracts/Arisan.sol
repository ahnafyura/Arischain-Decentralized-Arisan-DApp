// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Arisan {
    struct Participant {
        address addr;
        bool hasWon;
    }

    address public admin;
    uint public contributionAmount;
    uint public maxParticipants;
    uint public currentRound;
    bool public arisanActive;

    Participant[] public participants;
    mapping(address => bool) public isParticipant;
    mapping(uint => mapping(address => bool)) public hasPaid;
    mapping(uint => address) public winners;

    // Events
    event ArisanCreated(address indexed admin, uint amount, uint maxParticipants);
    event JoinedGroup(address indexed user);
    event PaymentReceived(address indexed user, uint amount);
    event WinnerSelected(uint indexed round, address indexed winner, uint prize);

    // Constructor = Membuat arisan
    constructor(uint _amount, uint _maxParticipants) {
        require(_amount > 0, "Contribution must be > 0");
        require(_maxParticipants > 1, "Participants must be > 1");

        admin = msg.sender;
        contributionAmount = _amount;
        maxParticipants = _maxParticipants;
        currentRound = 1;
        arisanActive = true;

        emit ArisanCreated(msg.sender, _amount, _maxParticipants);
    }

    // Join group hanya jika belum pernah join
    function joinGroup() external {
        require(arisanActive, "Arisan not active");
        require(participants.length < maxParticipants, "Group is full");
        require(!isParticipant[msg.sender], "Already joined");

        participants.push(Participant(msg.sender, false));
        isParticipant[msg.sender] = true;

        emit JoinedGroup(msg.sender);
    }

    // Bayar iuran untuk periode aktif
    function payContribution() external payable {
        require(isParticipant[msg.sender], "Not a participant");
        require(msg.value == contributionAmount, "Incorrect amount");
        require(!hasPaid[currentRound][msg.sender], "Already paid this round");

        hasPaid[currentRound][msg.sender] = true;

        emit PaymentReceived(msg.sender, msg.value);
    }

    // Mengecek apakah semua peserta sudah membayar
    function allPaid() public view returns (bool) {
        if (participants.length < maxParticipants) return false;

        for (uint i = 0; i < participants.length; i++) {
            if (!hasPaid[currentRound][participants[i].addr]) {
                return false;
            }
        }
        return true;
    }

    // Mengundi pemenang (admin memicu manual)
    function drawWinner() external {
        require(msg.sender == admin, "Only admin can draw");
        require(allPaid(), "Not all participants paid");
        require(address(this).balance == contributionAmount * participants.length, "Balance mismatch");

        // Pilih pemenang acak yang belum pernah menang
        uint winnerIndex;
        address winner;
        uint counter = 0;

        do {
            winnerIndex = uint(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, counter))) % participants.length;
            winner = participants[winnerIndex].addr;
            counter++;
        } while (participants[winnerIndex].hasWon && counter < 50);

        require(!participants[winnerIndex].hasWon, "All participants already won");

        uint prize = address(this).balance;
        payable(winner).transfer(prize);

        winners[currentRound] = winner;
        participants[winnerIndex].hasWon = true;

        emit WinnerSelected(currentRound, winner, prize);

        currentRound++;
    }

    // Mendapatkan jumlah peserta
    function getParticipantsCount() external view returns (uint) {
        return participants.length;
    }

    // Mendapatkan daftar peserta
    function getParticipants() external view returns (Participant[] memory) {
        return participants;
    }

    // Mendapatkan pemenang suatu periode
    function getWinner(uint round) external view returns (address) {
        return winners[round];
    }

    // Menutup arisan setelah semua periode selesai
    function closeArisan() external {
        require(msg.sender == admin, "Only admin can close");
        arisanActive = false;
    }
}
