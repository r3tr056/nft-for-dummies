// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    mapping(uint256 => uint256) private _tokenPrices;

    constructor() ERC721("RaiNexusNFT", "RAIN") {}

    function createToken(string memory tokenURI, uint256 price) public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _tokenPrices[newTokenId] = price;

        return newTokenId;
    }

    function getTokenPrice(uint256 tokenId) public view returns (uint256) {
        return _tokenPrices[tokenId];
    }

    function buyToken(uint256 tokenId) public payable {
        require(_exists(tokenId), "Token does not exist");
        require(msg.value >= _tokenPrices[tokenId], "Insufficient funds");

        address payable seller = payable(ownerOf(tokenId));
        _transfer(seller, msg.sender, tokenId);
        seller.transfer(msg.value);
    }
}