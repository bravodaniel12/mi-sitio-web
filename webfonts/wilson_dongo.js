

db.Compra.insertOne(
    {
        _idobject:100,
        valor: 2000,
    
        productos:[
            {
                codigo:123,
                nombre:"arroz",
                precio: 2300,
                descrpcion:"arroz rendidor",
                cantidad: 12
            }
        ],
        cliente:[{
        cedula:1027525510,
        nombre:"Daniel Felipoe",
        toturial: "calle colonial"
    }]
}
);
