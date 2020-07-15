
const indexBooksSuccess = function (response) {
  console.log(response)

  let booksHtml = ''

  response.books.forEach(function (book) {
    const oneBook = (`
      <section class="book">
        <h3>${book.title}</h3>
        <h4>Written By: ${book.author}</h4>
        <p>ID: ${book._id}</p>
      </section>
    `)
    booksHtml += oneBook
  })


  $('#content').html(booksHtml)
}

const indexBooksFailure = function (error) {
  console.log(error)
  $('#message').text('Failed to index books :(')
}

const showBookSuccess = function (response) {
  console.log(response)
  const oneBook = (`
      <section class="book">
        <h3>${response.book.title}</h3>
        <h4>Written By: ${response.book.author}</h4>
        <p>ID: ${response.book._id}</p>
      </section>
    `)

  $('#content').html(oneBook)
  $('#message').text('Show Book Success!')
}

const showBookFailure = function (error) {
  console.log(error)
  $('#message').text('Show book unsuccessful :(')
}

const destroyBookSuccess = function (response) {
  $('#message').text('Book deleted successfully!')

}

const destroyBookFailure = function (error) {
  $('#message').text('Book was not deleted')
}

const updateBookSuccess = function () {
  $('#message').text('Book Updated! Yay!')

  $('form').trigger('reset')
}

const updateBookFailure = function () {
  $('#message').text('Book could not be updated :(')
}

const createBookSuccess = function (response) {
  const createdBook = (`
    <h3>${response.book.title}</h3>
    <h4>Written By: ${response.book.author}</h4>
    <p>ID: ${response.book._id}</p>
    `)
  $('#content').html(createdBook)
}

const createBookFailure = function (error) {
  console.log(error)
  $('#message').text('Could not create book')
}

module.exports = {
  indexBooksSuccess: indexBooksSuccess,
  indexBooksFailure: indexBooksFailure,
  showBookSuccess: showBookSuccess,
  showBookFailure: showBookFailure,
  destroyBookSuccess: destroyBookSuccess,
  destroyBookFailure: destroyBookFailure,
  updateBookSuccess,
  updateBookFailure,
  createBookSuccess,
  createBookFailure

}
