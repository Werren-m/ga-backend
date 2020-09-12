class BookList{
    constructor(books){
        this.books = books || [];
        this.readList = [];
        this.readingNow = {};
    }
    add(book){
        this.books.push(book);
    }

    read(book){
        for(let i=0; i<this.books.length; i++){
            if(book === this.books[i]){
                this.readingNow = book;
                // readingNow.readDate = Date.now();
                this.readList.push(book)
            }
        }
    }

    finishCurrentBook(){
        for(let i=0; i<this.books.length; i++){
            if(this.books[i] === this.readingNow && i < this.books.length){
                this.books[i].read = true;
                this.books[i].readDate = Date.now();
                i++
                this.readingNow = this.books[i];
            }else if(this.books[i] === this.readingNow && i === this.books.length){
                this.books[i].read = true;
                this.books[i].readDate = Date.now();
                console.log("No other books left!");
            }
        }
    }

}

module.exports = BookList;