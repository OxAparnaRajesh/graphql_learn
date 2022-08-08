const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema/schema');

const mongoose = require('mongoose');

const app = express();

//connect to mlab database

mongoose.connect("mongodb+srv://iamaparnarajesh:jUejy00uISjeYKdL@cluster0.lhvd983.mongodb.net/?retryWrites=true&w=majority");
mongoose.connection.once('open',() => {
    console.log("mongodb connected");
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("App listening on 4000");
});