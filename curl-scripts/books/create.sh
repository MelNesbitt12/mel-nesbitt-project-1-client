curl "https://library-express-api.herokuapp.com/books/${ID}" \
--include \
--request POST \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author": "'"${AUTHOR}"'"
    }
  }'

  echo
