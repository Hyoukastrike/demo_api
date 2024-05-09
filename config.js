const config = {
    server:'aws-dev.ci0oxfoi2ixs.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'AWSDB2024',
    database:'Group3',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
    },
    port: 1433
}

module.exports = config; 