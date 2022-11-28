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
             this.takeCredits(Math.fround(amount*1.005));
             cardToTransfer.putCredits(amount);
         },
         getCardOptions(){
             return {...card}
         }
     }
}

function UserAccount(userName) {
        this.name=userName,
        this.cards=[],
        this.addCard=function (){
            if (this.cards.length<3){
                this.cards.push(userCard(this.cards.length+1));
            } else{
                console.log('You can not have more than 3 cards!');
            }
        },
        this.getCardByKey=function (key){
            if((Number.isInteger(key))&&(key>0)&&(key<=3)){
                return this.cards[key-1];
            }else {
                console.log('key must be 1,2 or 3');
            }
        }
}

let user=new UserAccount('Dima');
user.addCard();
user.addCard();

let card1=user.getCardByKey(1);
let card2=user.getCardByKey(2);

card1?.putCredits(500);
card1?.setTransactionLimit(800);
card1?.transferCredits(300,card2);
card2?.takeCredits(50);
console.log(card1?.getCardOptions());
console.log(card2?.getCardOptions());



