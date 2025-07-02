#!/bin/bash

curl -X GET http://localhost:3000/books

# Get book with ID 1
curl -X GET http://localhost:3000/books/1

# Get book with ID 2
curl -X GET http://localhost:3000/books/2

# Test with non-existent book (should return 404)
curl -X GET http://localhost:3000/books/999

curl -X POST http://localhost:3000/books \
    -H "Content-Type: application/json" \
    -d '{
    "title": "The Hitchhiker'\''s Guide to the Galaxy",
    "author": "Douglas Adams",
    "publishedYear": 1979
  }'

# Update book with ID 1
curl -X PUT http://localhost:3000/books/1 \
    -H "Content-Type: application/json" \
    -d '{
    "title": "The Fellowship of the Ring",
    "author": "J.R.R. Tolkien",
    "publishedYear": 1954
  }'

# Delete book with ID 4
curl -X DELETE http://localhost:3000/books/4

# Try to delete non-existent book (should return 404)
curl -X DELETE http://localhost:3000/books/999
