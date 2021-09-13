const vanity_eth = require("vanity-eth/libs/VanityEth")
const vanity_btc = require("vanity-btc/libs/VanityBtc")
const express = require("express")
const app = express()

const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/home');
});

app.post('/ethereum', async (req, res) =>{
    const data = await generateVanityETH(req.body.ethereum)
    res.render('pages/address', {adreça: data.address, clau_privada: data.privKey})
});

app.post('/bitcoin', async (req, res) =>{
    const data = await generateVanityBTC(req.body.bitcoin)
    res.render('pages/address', {adreça: data.address, clau_privada: data.privKey})
});

const generateVanityBTC = async (string) => {
    const wallet = await vanity_btc.getVanityWallet(string)
    return wallet
}

const generateVanityETH = async (string) => {
    const wallet = await vanity_eth.getVanityWallet(string)
    return wallet
}

//generateVanityBTC("99")
//generateVanityETH("99")


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))