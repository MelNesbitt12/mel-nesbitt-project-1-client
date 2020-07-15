

const config = require('../config')


const indexBooks = function () {

  return $.ajax({
    url: config.apiUrl + '/books'
  })
}

const showBook = function (id) {
  return $.ajax({
    url: config.apiUrl + '/books/' + id

  })
}

const destroyBook = function (id) {
  return $.ajax({
    url: config.apiUrl + '/books/' + id,

    method: 'DELETE'
  })
}

const updateBook = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/books/' + formData.book.id,
    data: {
      book: {
        title: formData.book.title,
        author: formData.book.author
      }
    }
  })
}

const createBook = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/books',
    data: {
      book: {
        title: formData.book.title,
        author: formData.book.author
      }
    }

  })
}

module.exports = {
  indexBooks: indexBooks,
  showBook: showBook,
  destroyBook: destroyBook,
  updateBook: updateBook,
  createBook: createBook
}
