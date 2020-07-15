
const api = require('./api')
const ui = require('./ui')



const getFormFields = require('../../../lib/get-form-fields')
const onIndexBooks = function (event) {
  console.log(event)
  api.indexBooks()
    .then(ui.indexBooksSuccess)
    .catch(ui.indexBooksFailure)
}

const onShowBook = function (event) {
  event.preventDefault()
  console.log('the form we submitted: ', event.target)

  const form = event.target

  const formData = getFormFields(form)

  console.log(formData)

  api.showBook(formData.book.id)
    .then(ui.showBookSuccess)
    .catch(ui.showBookFailure)
}

const onDestroyBook = function (event) {
  event.preventDefault()
  console.log('the form we submitted: ', event.target)
  const form = event.target
  const formData = getFormFields(form)

  console.log(formData)

  api.destroyBook(formData.book.id)
    .then(ui.destroyBookSuccess)
    .catch(ui.destroyBookFailure)
}

const onUpdateBook = function (event) {
  event.preventDefault()
  console.log(event)
  const form = event.target

  const formData = getFormFields(form)

  console.log(formData)

  api.updateBook(formData)
    .then(ui.updateBookSuccess)
    .catch(ui.updateBookFailure)
}

const onCreateBook = function (event) {
  event.preventDefault()
  console.log(event)

  const form = event.target
  const formData = getFormFields(form)

  console.log(formData)

  api.createBook(formData)
    .then(ui.createBookSuccess)
    .catch(ui.createBookFailure)
}

module.exports = {
  onIndexBooks: onIndexBooks,
  onShowBook: onShowBook,
  onDestroyBook: onDestroyBook,
  onUpdateBook: onUpdateBook,
  onCreateBook: onCreateBook
}
