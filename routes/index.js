var express = require('express');
var router = express.Router();

let fetch = require('node-fetch');


// https://<HOST>/<ERC-20-Address>/<Token-Holder-Address>

// my token: Y438SYXG61VDMBE48DIQGVB2YJT5DUH1H7 //



/* GET home page. */
router.get('/', async function(req, res, next) {

  // let response = await fetch('https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7?a=0xb415daaf22a53bfa51599a931e1d8cc593e3700f')
  // let response = await fetch('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x57d90b64a1a57749b0f932f1a3395792e12e7055&apikey=Y438SYXG61VDMBE48DIQGVB2YJT5DUH1H7')
  let response = await fetch('https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&address=0xb415daaf22a53bfa51599a931e1d8cc593e3700f&tag=latest&apikey=Y438SYXG61VDMBE48DIQGVB2YJT5DUH1H7')
  let body = await response.json()
  console.log(response)
  console.log(body)
  
  res.render('index', { body: body.result });
});


module.exports = router;


  