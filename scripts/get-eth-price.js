const addresses = require('../addresses')
const ABI = require('../artifacts/contracts/PriceFeed.sol/PriceFeed.json')

const ETHUSD = addresses.fuji['ETH/USD']

const run = async () => {
  const contractAddress = '0xed154b5df07deb2895f0719afd39631f04b16ebb'
  // Deployed contract address : 0xEd154b5dF07DEb2895F0719aFD39631F04b16Ebb
  // const PriceFeed = await hre.ethers.getContractFactory('PriceFeed')
  // const priceFeed = await PriceFeed.deploy(ETHUSD)
  // await priceFeed.deployed()
  // console.log('PriceFeed deployed to:', priceFeed.address)

  const priceFeed = await hre.ethers.getContractAt(ABI.abi, contractAddress)

  const price = await priceFeed.getLatestPrice()
  const decimals = await priceFeed.decimals()

  const displayPrice = hre.ethers.utils.formatUnits(price, decimals)

  console.log('price : ', price.toString())
  console.log('displayPrice : ', displayPrice)
}

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
