const { expect } = require('chai')
const { ethers } = require('hardhat')

const addresses = require('../addresses')

describe('PriceFeed', function () {
  it('Should return the latest price', async function () {
    const PriceFeed = await ethers.getContractFactory('PriceFeed')

    const ETHUSD = addresses.fuji['ETH/USD']

    const priceFeed = await PriceFeed.deploy(ETHUSD)
    await priceFeed.deployed()

    const price = await priceFeed.getLatestPrice()

    expect(price).to.equal(1000)
  })
})
