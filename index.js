const vanity_eth = require("vanity-eth/libs/VanityEth")
const vanity_btc = require("vanity-btc/libs/VanityBtc")
const express = require("express")
const app = express()

const PORT = process.env.PORT || 8000

const generateVanityBTC = async (string) => {
    const wallet = await vanity_btc.getVanityWallet(string)
    return wallet
}

const generateVanityETH = async (string) => {
    const wallet = await vanity_eth.getVanityWallet(string)
    return wallet
}

generateVanityBTC("99")
generateVanityETH("99")


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))