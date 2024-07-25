let transactions = JSON.parse(localStorage.getItem('transaction')) || [];

const showTransaction = ()=>{
document.getElementById('transactionTable').innerHTML = transactions.map((table)=>{
    return `<tr>
    <td>${table.type}</td>
    <td>${table.name}</td>
    <td>$${table.amount}</td>
    <td><a class="deleteButton" onclick="deleteTransaction(${table.id})">
        Delete</td>
</tr>`
}).join('');
}

const updateBalance = ()=>{
    let balance = 0;

     transactions.forEach((amt)=>{
        
        if(amt.type == 'income'){
           balance += Number(amt.amount);
        }else{
            balance -= Number(amt.amount);
        }
     })
     document.querySelector('.balance').textContent = balance;
}
//Delete Transaction:
const  deleteTransaction = (id)=>{

    for(let i = 0; i < transactions.length;i++){
        if(transactions[i].id == id){
           transactions.splice(i,1)
        }
    }
    localStorage.setItem('transaction',JSON.stringify(transactions))
    showTransaction();
    updateBalance();
  }

const addToTransaction = (e) => {
    e.preventDefault();
    userName = document.getElementById('name').value
    type = document.getElementById('type').value
    amount = document.getElementById('amount').value
    if(type !== 'chooseOne' && userName.length > 0 && amount > 0){
        let transaction = {
            name:userName,
            type:type,
            amount:amount,
            id:transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1
        }
        transactions.push(transaction);

        console.log(transactions,'transactions');

        localStorage.setItem('transaction',JSON.stringify(transactions));
       showTransaction();
       updateBalance();
       document.getElementById('expForm').reset();
    }
    console.log('add');
}
document.getElementById('expForm').addEventListener('submit', addToTransaction);

