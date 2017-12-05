const BOOKS = [
  {
    id: 1,
    title: 'Eminescu',
    author: 'Mihai Eminescu',
    editionYear: '1958',
    content: 'Something about this book ...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjH26ho88PBPa_kuHkBax_a_sZGIB1ykJSIwOgjXdFPMB9SnFIKw'
  },
  {
    id: 2,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  },
  {
    id: 3,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  },
  {
    id: 4,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  },
  {
    id: 5,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  },
  {
    id: 6,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  },
  {
    id: 7,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  },
  {
    id: 8,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  },
  {
    id: 9,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  },
  {
    id: 10,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  },
  {
    id: 11,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  },
  {
    id: 12,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  },
  {
    id: 13,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  },
  {
    id: 14,
    title: '',
    author: '',
    editionYear: '',
    content: '',
    image: ''
  }
]
export var bookService = {

  getBooks () {
    return BOOKS
  },
  getBooksByTitle (title) {
    return BOOKS.filter(book => book.title === title)
  },
  getBooksByAuthor (author) {
    return BOOKS.filter(book => book.author === author)
  }
}
