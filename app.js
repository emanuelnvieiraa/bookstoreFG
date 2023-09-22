//npm instal nodemon
//npm install express
// para rodar npm run dev no terminal

import express from "express";
const app = express();
app.use(express.json());
const books =[
    {
        id: 1,
        title: "Harry Potter",
    },
];

//função para buscar o livro pelo ID

function searchBook(id) {
    return books.findIndex((book) => book.id === id);
}

app.get("/", (req, res) => {
    res.status(200).send("Hellow World!!!");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.post("/books", (req, res) => {
   book.push(req.body);
   //res status(201).json(books);
   res.status(201).json("Livro cadastrado com sucesso!")
});

app.get("/books/:id", (req, res) => {
    const index = searchBook(Number(req.params.id));

    if(index === -1) {
        res.status(404).json("Livro nao encontrado")
    } else{
        res.status(200).json(books[index]);
    }
});
app.patch("/books/id" , (req, res) => {
    const index = searchBook(Number(req.params.id));
    if(index === 1){
        res.status(404).json("Livro não encontrado");
    } else{
        books[index].title = req.body.title
        res.status(200).json(books);
    }
});

app.delete("/books/id", (req, res) => {
    const index = searchBook(Number(req.params.id));
    if(index === -1){
        res.status(404).json("Livro nao encontrado");
    } else{
        books.splice(index, 1);
        //res.status(2000).json(books);
        res.status(200).json("Livro removido com sucesso!")
    }
})

app.delete("/books/:id", (req, res) => {
    const index = searchBook(Number(req.params.id));
    if(index === -1){
        res.status(404).json("livro nao encontrado");
    } else {
        books.splice(index, 1);
        //res.status(200).json("livro removido com sucesso")
        res.status(200).json("livro removido com sucesso")
    }
});

export default app;





