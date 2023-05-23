class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }   

    fix(){
        this.state = this.state * 1.5;
    }
    
    set state(numb){
        if(numb < 0) {
            this._state = 0;
        }else if(numb > 100) {
            this._state = 100;
        }else{
            this._state = numb;
        }

        
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, type, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.author = author;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, type, state) {
        super( author, name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook extends Book { 
    constructor(author, name, releaseDate, pagesCount, type, state) {
        super( author, name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, type, state) {
        super( author, name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "detective";
        
    }
}

class Library extends PrintEditionItem {
    constructor(name){
        super(name);
        this.name = name;
        this.books = [];
        delete this.releaseDate
        delete this.pagesCount
        delete this._state
        delete this.type
    
    }

    addBook(book){
        if(book.state > 30) {
            this.books.push(book);
        }
    };

    findBookBy(type, value) {
        return this.books.find(item => item[type] === value) || null;
    }

    giveBookByName(bookName) {
        let findBook = this.books.find(item => item.name === bookName) || null ;
        this.books = this.books.filter(element => element.name != bookName);
        return findBook
    }
}
// const library = new Library("Библиотека имени Ленина");

// library.addBook(
//  new DetectiveBook(
//    "Артур Конан Дойл",
//    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
//    2019,
//    1008
//  )
// );
// library.addBook(
//  new FantasticBook(
//    "Аркадий и Борис Стругацкие",
//    "Пикник на обочине",
//    1972,
//    168
//  )
// );

// library.addBook(new Magazine("Мурзилка", 1924, 60));
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
// console.log(library)

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// console.log(library.giveBookByName("Машина времени"))
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// console.log(findBook)
 

