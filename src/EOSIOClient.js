import React from "react";
import { Api, JsonRpc} from "eosjs";
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs2"; // Use eosjs2 if your version of eosjs is > 16


// Using junglehistory here to get actions.  I tried the transaction with https://jungle2.cryptolions.io:443 and got the same error.
// const endpoint = "http://jungle2.cryptolions.io:80"; // Jungle
const endpoint = "https://api-kylin.eoslaomao.com"; // Kylin

const network = {
  blockchain: "eos",
  protocol: "https",
  //host: "jungle2.cryptolions.io", //Jungle
  host: "api-kylin.eoslaomao.com", //Kylin
  port: 443,
  //chainId: "e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473" // Jungle
  chainId: "5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191" // Kylin
};


class EOSIOClient extends React.Component {
  constructor(contractAccount) {
    super(contractAccount);
    this.contractAccount = contractAccount;
    //this.account;
    //this.eos;
    ScatterJS.plugins(new ScatterEOS());

    try {
      ScatterJS.scatter.connect(this.contractAccount).then(connected => {
        if (!connected) return console.log("Issue Connecting");

        const scatter = ScatterJS.scatter;
        this.scatter = scatter;

        this.requiredFields = {
          accounts: [network]
        };

        this.rpc = new JsonRpc(endpoint);
    

        window.ScatterJS = null;
        //window.ScatterJS = null;
      });
    } catch (error) {
      console.log(error);
    }
   
  }
  

  sendProductData = cb => {
    console.log(cb)
  }

  login = cb => {
    
     
      try{
      this.scatter.getIdentity(this.requiredFields).then(() => {
        this.account = this.scatter.identity.accounts.find(
          x => x.blockchain === "eos"
        );

        this.eos = this.scatter.eos(network, Api, {
          rpc: this.rpc,
          beta3: true
        });
	   localStorage.setItem("account_name", this.account.name);
	
        return this.account;
      })
    }
    catch(er){
      console.log("ERROR",er)
      alert("Cannot connect with scatter please refresh")
    }
    //.catch (error=> {
    //   console.log(error);
    //   //alert(error)
    // })
  };

  transaction = (action, data) => {
    return this.eos.transact(
      {
        actions: [
          {
            account: this.contractAccount,
            name: action,
            authorization: [
              {
                actor: this.account.name,
                permission: this.account.authority
              }
            ],
            data: {
              ...data
            }
          }
        ]
      },
      {
        blocksBehind: 3,
        expireSeconds: 30
      }
    );
  };

  tokenTransfer = data => {
    return this.eos.transact(
      {
        actions: [
          {
            account: "eosio.token",
            name: "transfer",
            authorization: [
              {
                actor: this.account.name,
                permission: this.account.authority
              }
            ],
            data: {
              from: this.account.name,
              to: "eostester34p", //data.to,
              quantity: "1.0000 EOS", //data.quantity,
              memo: "TEst" //data.memo
            }
          }
        ]
      },
      {
        blocksBehind: 3,
        expireSeconds: 30
      }
    );
  };


  upsert(dataToSend, total) {
    var data = [];
    var loop = 1;
    data[0] = dataToSend.length;
    dataToSend.map(item => {
      data[loop] = item.key;
      loop++;
      data[loop] = item.quantity;
      loop++;
    });
    const name = localStorage.getItem("account_name");
    if (!name) {
       alert("Please Login First");
     // console.log("please login first")
    } else {
      function addZeroes(num) {
        var value = Number(num);
        var res = num.split(".");
        if (res.length === 1 || res[1].length < 5) {
          value = value.toFixed(4);
        }
        value = value + " EOS";
        return value;
      }

      var net_price = "";
      net_price = addZeroes(total.toString());

      var myStr = data.toString();

      var memo = myStr.replace(/,/g, ":");
      memo = memo + ":";

      //this.eos.takeAction2(net_price, memo)
     // try {
        const resultWithConfig =  this.eos.transact(
          {
            actions: [
              {
                account: "eosio.token",
                name: "transfer",
                authorization: [
                  {
                    actor: localStorage.getItem("account_name"),
                    permission: "active"
                  }
                ],
                data: {
                  from: localStorage.getItem("account_name"),
                  to: "shopshop1111",
                  quantity: net_price,
                  memo: memo
                }
              }
            ]
          },
          {
            blocksBehind: 3,
            expireSeconds: 30
          }
        ).then(trx=>{
          console.log("nowdone")
          console.log("Your Transection id = ",trx.transaction_id)
          if (window.confirm('You have sucessfully purchased items click OK to view your transection')) 
          {
            window.open('https://kylin.bloks.io/transaction/'+trx.transaction_id,'_blank');
          };
          window.location.href = '/';
        } )
        .catch(err => {
          console.log(err);
          alert("Error:" +err)
         });
        
      // } catch (err) {
      //   alert("transection failed", err)
      //   throw err;
      // }
    }
  }
}

export default EOSIOClient
