
(async () => {
    const db = require("./db");

    console.log('Começou!');
    
    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({nome:"Lucas Vidotto", idade:25, uf: "1"});
    console.log(result);

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();