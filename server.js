const express = require('express');
const app = express();

// Sample JSON data (replace this with your actual data)
const data = 
    {
        "users": [
          {
            "id": 1001,
            "name": "John Doe",
            "age": 30,
            "address": "123 Main St",
            "gender": "Male",
            "occupation": "Engineer",
            "kycdone": "yes",
            "aadharNumber": "",
            "password": "root",
            "unqno": 1111,
            "aadhar": "",
            "pan": "",
            "email": "1@gmail.com"
          },
          {
            "id": 1002,
            "name": "Jane Smith",
            "age": 28,
            "address": "456 Park Avenue",
            "gender": "Female",
            "occupation": "Doctor",
            "kycdone": "yes",
            "aadharNumber": "1234 5678 9012",
            "password": "password",
            "unqno": 2222,
            "aadhar": "AADD1122E",
            "pan": "ABCDE1234F",
            "email": "2@gmail.com"
          },
          {
            "id": 1003,
            "name": "Rahul Sharma",
            "age": 35,
            "address": "789 Street Road",
            "gender": "Male",
            "occupation": "Businessman",
            "kycdone": "yes",
            "aadharNumber": "9876 5432 1098",
            "password": "securepass",
            "unqno": 3333,
            "aadhar": "BBCC2233F",
            "pan": "PQRST5678G",
            "email": "3@gmail.com"
          },
          {
            "name": "sdbfh",
            "age": 32,
            "address": "wef",
            "gender": "sdfsd",
            "occupation": "sdff",
            "kycdone": "no",
            "aadharNumber": "sdfsd",
            "password": "sdfdsf",
            "unqno": "3232",
            "aadhar": "3252342",
            "pan": "23432423",
            "email": "ewfwe@gmail.com",
            "id": 1004
          },
          {
            "name": "sandi",
            "age": 21,
            "address": "wjenfj",
            "gender": "qjwdnjkn",
            "occupation": "jefnqjwlbf",
            "kycdone": "no",
            "aadharNumber": "2382938",
            "password": "12345",
            "unqno": "12345",
            "aadhar": "sdlfn",
            "pan": "12312",
            "email": "s@gmail.com",
            "id": 1005
          },
          {
            "name": "etst",
            "age": 23,
            "address": "bwjfoj",
            "gender": "jonfc",
            "occupation": "ajsnf",
            "kycdone": "no",
            "aadharNumber": "kejbfkj",
            "password": "1111",
            "unqno": "1111",
            "aadhar": "ewjbfkwej",
            "pan": "jlnfjl",
            "email": "10@gmail.com",
            "id": 1006
          },
          {
            "name": "etst",
            "age": 23,
            "address": "bwjfoj",
            "gender": "jonfc",
            "occupation": "ajsnf",
            "kycdone": "no",
            "aadharNumber": "kejbfkj",
            "password": "1111",
            "unqno": "1111",
            "aadhar": "ewjbfkwej",
            "pan": "jlnfjl",
            "email": "10@gmail.com",
            "id": 1007
          },
          {
            "name": "etst",
            "age": 23,
            "address": "bwjfoj",
            "gender": "jonfc",
            "occupation": "ajsnf",
            "kycdone": "no",
            "aadharNumber": "kejbfkj",
            "password": "1111",
            "unqno": "1111",
            "aadhar": "ewjbfkwej",
            "pan": "jlnfjl",
            "email": "10@gmail.com",
            "id": 1008
          },
          {
            "name": "etst",
            "age": 23,
            "address": "bwjfoj",
            "gender": "jonfc",
            "occupation": "ajsnf",
            "kycdone": "no",
            "aadharNumber": "kejbfkj",
            "password": "1111",
            "unqno": "1111",
            "aadhar": "ewjbfkwej",
            "pan": "jlnfjl",
            "email": "110@gmail.com",
            "id": 1009
          },
          {
            "name": "ewfwef",
            "age": 23,
            "address": "ewfe",
            "gender": "efef",
            "occupation": "efwe",
            "kycdone": "no",
            "aadharNumber": "wefwe",
            "password": "1111",
            "unqno": "dqwefqf",
            "aadhar": "fefwe",
            "pan": "wefwe",
            "email": "11111@gmail.com",
            "id": 1010
          },
          {
            "name": "ewfweffc",
            "age": 23,
            "address": "ewfe",
            "gender": "efef",
            "occupation": "efwe",
            "kycdone": "no",
            "aadharNumber": "wefwe",
            "password": "1111",
            "unqno": "dqwefqf",
            "aadhar": "fefwe",
            "pan": "wefwe",
            "email": "111111@gmail.com",
            "id": 1011
          },
          {
            "name": "fsdvc",
            "age": 23,
            "address": "sdcsdv",
            "gender": "vs",
            "occupation": "vsdv",
            "kycdone": "no",
            "aadharNumber": "sdvsdv",
            "password": "sdvsdv",
            "unqno": "sdvs",
            "aadhar": "sdvsdv",
            "pan": "dsvsdv",
            "email": "sdv",
            "id": 1012
          },
          {
            "name": "ria",
            "age": 12,
            "address": "hbfkjdvjk",
            "gender": "bhiwef",
            "occupation": "uwhdfbhw",
            "kycdone": "no",
            "aadharNumber": "3278236",
            "password": "1234567890",
            "unqno": "",
            "aadhar": "",
            "pan": "3726",
            "email": "q@gmail.com",
            "id": 1013
          }
        ],
        "investments": [
          {
            "id": 1,
            "cid": 1001,
            "fundname": "UTI Small Cap",
            "amt": 10000
          },
          {
            "id": 2,
            "cid": 1001,
            "fundname": "SBI Bluechip Fund",
            "amt": 15000
          },
          {
            "id": 3,
            "cid": 1002,
            "fundname": "HDFC Mid-Cap Opportunities",
            "amt": 12000
          },
          {
            "id": 4,
            "cid": 1002,
            "fundname": "Axis Long Term Equity Fund",
            "amt": 18000
          },
          {
            "id": 5,
            "cid": 1003,
            "fundname": "ICICI Prudential Equity & Debt Fund",
            "amt": 20000
          },
          {
            "id": 6,
            "cid": 1003,
            "fundname": "Mirae Asset Emerging Bluechip Fund",
            "amt": 25000
          },
          {
            "id": 7,
            "cid": 69,
            "fundname": "UTI Small Cap prudetn",
            "amt": 10000
          },
          {
            "id": 8,
            "fundname": "UTI Small Cap",
            "amt": 1200,
            "cid": 1005
          },
          {
            "id": 9,
            "fundname": "HDFC Mid-Cap Opportunities",
            "amt": 10000,
            "cid": 1005
          },
          {
            "id": 10,
            "cid": 1006,
            "fundname": "UTI Small Cap",
            "amt": 1200
          },
          {
            "cid": 1012,
            "fundname": "UTI Small Cap",
            "amt": 1200,
            "id": 11
          },
          {
            "cid": 1012,
            "fundname": "HDFC Mid-Cap Opportunities",
            "amt": 10000,
            "id": 12
          },
          {
            "cid": 1013,
            "fundname": "UTI Small Cap",
            "amt": 1200,
            "id": 13
          },
          {
            "cid": 1013,
            "fundname": "HDFC Mid-Cap Opportunities",
            "amt": 10000,
            "id": 14
          }
        ]
      };

// Endpoint to get all users
app.get('/api/users', (req, res) => {
  res.json(data.users);
});

// Endpoint to get all investments
app.get('/api/investments', (req, res) => {
  res.json(data.investments);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
