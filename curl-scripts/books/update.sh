curl "https://library-express-api.herokuapp.com/books/${ID}" \
  --include \
  --request PATCH \
    --header "Content-Type: application/json" \
--data '{
  "book": {
    "title": "'"${TITLE}"'",
    "author": "'"${AUTHOR}"'"
  }
}'

echo
