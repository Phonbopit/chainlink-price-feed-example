// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "./interfaces/AggregatorV3Interface.sol";

contract PriceFeed {
    AggregatorV3Interface internal priceFeed;

    constructor(address _address) {
        priceFeed = AggregatorV3Interface(_address);
    }

    function decimals() public view returns (uint8) {
        return priceFeed.decimals();
    }

    function getLatestPrice() public view returns (int256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();
        return price;
    }
}
