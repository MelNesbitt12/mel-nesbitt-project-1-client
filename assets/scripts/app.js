'use strict'


const bookEvents = require('./books/events')

$(() => {

  $('#book-index').on('click', bookEvents.onIndexBooks)

  $('#book-show').on('submit', bookEvents.onShowBook)

  $('#destroy-book').on('submit', bookEvents.onDestroyBook)

  $('#book-update').on('submit', bookEvents.onUpdateBook)

  $('#book-create').on('submit', bookEvents.onCreateBook)
})
