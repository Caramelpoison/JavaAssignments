interface Book{
id: number;
title: string;
author: string
published: Date
available: boolean
}


const books: Book[] = [
    {
      id: 1,
      title: 'Fifty Shades of Grey',
      author: 'E.L. James',
      published: new Date('2011-05-25'),
      available: true,
    },
    {
      id: 2,
      title: 'Fifty Shades Darker',
      author: 'E.L. James',
      published: new Date('2012-04-17'),
      available: true,
    },
    {
      id: 3,
      title: 'Fifty Shades Freed',
      author: 'E.L. James',
      published: new Date('2012-01-19'),
      available: true,
    },
];

let addBook = (book: Book): void =>{
    books.push(book)
    
}

let findBookById = (Bookid: number): Book |undefined => {
    let bookFinder = books.find((books) => books.id === Bookid);
    return bookFinder
}

let updateBook = (book: Book): boolean =>{
    let indexB = books.findIndex((books) => books.id === book.id)
    if (indexB !== -1 )
    {books[indexB] = book
        return true 
    }
    else{
        return false
    }
}

let removeBook = (id: number): boolean =>{
    let indexB = books.findIndex((books) => books.id === id)
    if (indexB !== -1 )
    {
        books.splice(indexB,1)
        return true 
    }
    else{
        return false
    }
}

addBook({
    id: 4,
    title: "Barney's Farm Animals",
    author: "Mark S. Bernthal",
    published: new Date("1993-08-01"),
    available: true,
  });

  const book = findBookById(3);

  updateBook({
    id: 3,
    title: "Barney's Shapes & Colors",
    author: "Mark S. Bernthal",
    published: new Date("1993-05-01"),
    available: true,
  });

  removeBook(4);

  console.log(books)