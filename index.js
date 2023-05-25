
//node_modules\.bin\nodemon
const express = require("express");
const { google } = require("googleapis");

const pt1 = "api-po@portal-officers"
const pt2 = ".iam.gserviceaccount.com"
const pt3 = "-----BEGIN PRIVATE KEY-----"
const pt4 = "\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCDyhRUgwB+uW0/"
const pt5 = "\niQTE/mzmG70GJlPTEnFux5FzTScqyiCqndzh9zTPiMTi8uJIILsIV1veDHHxeGaG"
const pt6 = "\nqZvMg+HciAUUKfmWCLqCIGnIsaw5jWeKp5CqHHSN2PG6pwnlyxpsbtLZ0Kk40JIu"
const pt7 = "\nE/AlO9CbMuqFxeKbpnuvL+29RiZCzrG4+BIprr/775FWYP3Tu+1Nx1BcBxw39Ezl"
const pt8 = "\nwYU+TplLFczgsgUXYiONt+krFJzjFWSDtHO56iCUcp3uYl1g9hzPgQj1eM32kHE3"
const pt9 = "\ntTR0nC8WzQIEFdVCueFURK1/iaGGx+zX0aEc8Aw+pbURz+CD0tI7e5tzpnCqbxyt"
const pt10 = "\nMoDhR1hrAgMBAAECgf8BNHv5Zf1iHnVGJi8yJ7qNq6IIbwF2owPBlLPCPLcX42Nx"
const pt11 = "\nQ0xTImnkHpti4A6gIqbZ7bJuSinPY9lHPO0W8r4T+HLn8sjuK2n4s4X+2Sn/Tg1a\njRQZCK0R30LjcspERXrAARr80lML/gKZfFw4UvDahKo5SPtQG5UEDwj0cNsrOD62\nDiqtHxN9rrPB1VTA4t9fP/XXu7GJpIh+35WXK9XXzjNDh7I+BIj/TnJPR0qp0SC5\nV2LsMC5DQSnbf9tv4i1//8wrt94a/J7O5htKivC2IsH32J53gSAH/OP3CB+vXycv\nmgbzrtu9aS7eh6IejFoF6ECz0NkS71mWuNNLjXUCgYEAuNO39ISc3plxqCeMyam7\nGD5/aYidg94f70UFbl999wXaEq9P1EKg9I12CsYYPE7vKyedgnUPGOLMgQCUSGRx\nNsVOxpykOEcC92hYjBELvOLyx3C5ewB6ZuJybERLkdx/sjDLKscmHWx/BIeXpA0E\nk1TPFs8luj4EEfIUl9AjS18CgYEAtonmQ+NofQJFFmgBKhb5roBrgBir8jkjuSKX\nu3rggSp4BxCwxRYipRu2CPYcEIa/HuIHTC9vAYNbqogVcTegkL60a0jlqeIV/fXP\nVVhU7GyHHXfmZuEkhQ0MQYJo7Rm/P383XM4n/AXD7zP7qmwPf2EvKLjWnHG6CdAR\nJtdp2nUCgYBH2lcbgiqSB0k+PBHpnEiWBkX2OxwxVbtIg6a23/zSeb3roagBNt3n\n9M69JYHqgC1Os5nyS5vQ6uriA92hvxqcVlxnriHRlxm6ISC7Yy0TA4+qpVIWVXtA\nYCxnlq1iSTyDg6CYQs+4hKNkmWoEZuMue7v+fA2It+9RIrGKy2nNNQKBgHDnap2j\nEwX/WWw6eD3oaBcfJ17b4762yPnCA8fagPJjqkn0cOH2hwdI1JdGYqV2MtCPTaQ5\n0pdFAHXCJkEY/x+IVV/mfudNB/1FBTDsqdpyZkA74S7RIx2IrIP4fZ3pxvknXr7w\nZJrllgNmS8tle1B2dAzkBxpM3Z0kLPexVa/hAoGAH0LdLSaMkaLXZik8eCabfbqt\nDecPSXGyLuUobxJAmFBrIFzWrmM75JDd4xLE4IQm/fdHtPAOmRB3leP4MFqHXNmB\npLec3gayXjPHguxUqEXomMeAHH2WDYuKWKXQ1ZEQe/U5+mX9N7lyEiiW90EKscyb\nJ3TP0qN70wSU18mfQ6U=\n-----END PRIVATE KEY-----\n"


const app = express();

app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

console.log(`const express = require("express");
const { google } = require("googleapis");

const pt1 = "api-po@portal-officers"
const pt2 = ".iam.gserviceaccount.com"
const pt3 = "-----BEGIN PRIVATE KEY-----"
const pt4 = "\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCDyhRUgwB+uW0/"
const pt5 = "\niQTE/mzmG70GJlPTEnFux5FzTScqyiCqndzh9zTPiMTi8uJIILsIV1veDHHxeGaG"
const pt6 = "\nqZvMg+HciAUUKfmWCLqCIGnIsaw5jWeKp5CqHHSN2PG6pwnlyxpsbtLZ0Kk40JIu"
const pt7 = "\nE/AlO9CbMuqFxeKbpnuvL+29RiZCzrG4+BIprr/775FWYP3Tu+1Nx1BcBxw39Ezl"
const pt8 = "\nwYU+TplLFczgsgUXYiONt+krFJzjFWSDtHO56iCUcp3uYl1g9hzPgQj1eM32kHE3"
const pt9 = "\ntTR0nC8WzQIEFdVCueFURK1/iaGGx+zX0aEc8Aw+pbURz+CD0tI7e5tzpnCqbxyt"
const pt10 = "\nMoDhR1hrAgMBAAECgf8BNHv5Zf1iHnVGJi8yJ7qNq6IIbwF2owPBlLPCPLcX42Nx"
const pt11 = "\nQ0xTImnkHpti4A6gIqbZ7bJuSinPY9lHPO0W8r4T+HLn8sjuK2n4s4X+2Sn/Tg1a\njRQZCK0R30LjcspERXrAARr80lML/gKZfFw4UvDahKo5SPtQG5UEDwj0cNsrOD62\nDiqtHxN9rrPB1VTA4t9fP/XXu7GJpIh+35WXK9XXzjNDh7I+BIj/TnJPR0qp0SC5\nV2LsMC5DQSnbf9tv4i1//8wrt94a/J7O5htKivC2IsH32J53gSAH/OP3CB+vXycv\nmgbzrtu9aS7eh6IejFoF6ECz0NkS71mWuNNLjXUCgYEAuNO39ISc3plxqCeMyam7\nGD5/aYidg94f70UFbl999wXaEq9P1EKg9I12CsYYPE7vKyedgnUPGOLMgQCUSGRx\nNsVOxpykOEcC92hYjBELvOLyx3C5ewB6ZuJybERLkdx/sjDLKscmHWx/BIeXpA0E\nk1TPFs8luj4EEfIUl9AjS18CgYEAtonmQ+NofQJFFmgBKhb5roBrgBir8jkjuSKX\nu3rggSp4BxCwxRYipRu2CPYcEIa/HuIHTC9vAYNbqogVcTegkL60a0jlqeIV/fXP\nVVhU7GyHHXfmZuEkhQ0MQYJo7Rm/P383XM4n/AXD7zP7qmwPf2EvKLjWnHG6CdAR\nJtdp2nUCgYBH2lcbgiqSB0k+PBHpnEiWBkX2OxwxVbtIg6a23/zSeb3roagBNt3n\n9M69JYHqgC1Os5nyS5vQ6uriA92hvxqcVlxnriHRlxm6ISC7Yy0TA4+qpVIWVXtA\nYCxnlq1iSTyDg6CYQs+4hKNkmWoEZuMue7v+fA2It+9RIrGKy2nNNQKBgHDnap2j\nEwX/WWw6eD3oaBcfJ17b4762yPnCA8fagPJjqkn0cOH2hwdI1JdGYqV2MtCPTaQ5\n0pdFAHXCJkEY/x+IVV/mfudNB/1FBTDsqdpyZkA74S7RIx2IrIP4fZ3pxvknXr7w\nZJrllgNmS8tle1B2dAzkBxpM3Z0kLPexVa/hAoGAH0LdLSaMkaLXZik8eCabfbqt\nDecPSXGyLuUobxJAmFBrIFzWrmM75JDd4xLE4IQm/fdHtPAOmRB3leP4MFqHXNmB\npLec3gayXjPHguxUqEXomMeAHH2WDYuKWKXQ1ZEQe/U5+mX9N7lyEiiW90EKscyb\nJ3TP0qN70wSU18mfQ6U=\n-----END PRIVATE KEY-----\n"


const app = express();

app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});`)


app.post("/", async (req, res) => {

    const auth = new google.auth.GoogleAuth({

        //keyFile: "task.json",
        credentials: {
            client_email: pt1 + pt2,
            private_key: pt3 + pt4 + pt5 + pt6 + pt7 + pt8 + pt9 + pt10 + pt11,
        },
        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });

    console.log(auth)

    const client = await auth.getClient();

    console.log(client)

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "19g1z5vlu_5ZkMHnTewJ4aFLeUwvYwjaWz1lDOd-KmP0"

    // pegando dados teste

    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });

    //Write rows
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Página1!A:B",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                ["test@gmail.com", "25/05/2023"],
            ]
        }
    })


    res.send(metaData.data);

});

app.listen(3000, function () {
    console.log("info", 'Server is running at port : ' + 3000);
});





