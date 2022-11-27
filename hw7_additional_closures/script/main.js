const userCard=(key)=>{
    const card={
        balance:100,
        transactionLimit:100,
        historyLogs:[],
        key
    }
     return {
         putCredits(amount){
             const date=new Date();
             card.balance+=amount;

             card.historyLogs.push({
                 oparationType:'Received credits',
                 credits:amount,
                 operationTime:`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
             });
         },
         takeCredits(amount){
            if(card.balance>=amount && card.transactionLimit>=amount){
                const date=new Date();
                card.balance-=amount;
                card.historyLogs.push({
                    oparationType:'Withdrawal of credits',
                    credits:amount,
                    operationTime:`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                });
            }else {
              (card.balance>=amount)?console.log(`Your transaction limit less than ${amount}`):console.log(`Your balance less than ${amount}`)
            }
         },
         setTransactionLimit(amount){
             const date=new Date();
             card.transactionLimit=amount;
             card.historyLogs.push({
                 oparationType:'Transaction limit change',
                 credits:amount,
                 operationTime:`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
             });
         },
         transferCredits(amount,cardToTransfer){
             card.takeCredits(amount);
             cardToTransfer.putCredits(amount*0.995);
         },
         getCardOptions(){
             return {...card}
         }
     }
}
const card3=userCard(3);
console.log(card3.getCardOptions());
card3.putCredits(200);
card3.putCredits(300);
card3.putCredits(400);
card3.takeCredits(100)
card3.takeCredits(250);
card3.setTransactionLimit(500);
card3.takeCredits(250);

console.log(card3.getCardOptions());

