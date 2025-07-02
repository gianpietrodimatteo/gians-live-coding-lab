#!/usr/bin/env bash
set -euo pipefail

BASE_URL="http://localhost:3000/books"
TMP_BODY="$(mktemp)"

# helper: run curl, capture status + body
request () {
  local method=$1
  local url=$2
  local data=${3-}
  if [[ -n "$data" ]]; then
    status=$(curl -s -o "$TMP_BODY" -w '%{http_code}' -X "$method" \
              -H "Content-Type: application/json" \
              -d "$data" \
              "$url")
  else
    status=$(curl -s -o "$TMP_BODY" -w '%{http_code}' -X "$method" "$url")
  fi
}

# helper: assert status
expect_status () {
  local expected=$1
  if [[ "$status" != "$expected" ]]; then
    echo "❌  Expected HTTP $expected but got $status"
    cat "$TMP_BODY"; rm "$TMP_BODY"; exit 1
  fi
}

# helper: assert body contains string
expect_body_contains () {
  local pattern=$1
  if ! grep -q "$pattern" "$TMP_BODY"; then
    echo "❌  Response body did not contain '$pattern'"
    cat "$TMP_BODY"; rm "$TMP_BODY"; exit 1
  fi
}

echo "1️⃣  GET /books – expect 200 and 4 books"
request GET "$BASE_URL"
expect_status 200
count=$(jq 'length' <"$TMP_BODY")
[[ $count -eq 4 ]] || { echo "❌  Expected 4 books, got $count"; exit 1; }
echo "✅  OK"

echo "2️⃣  GET /books/1 – expect 200 & Tolkien"
request GET "$BASE_URL/1"
expect_status 200
expect_body_contains "Tolkien"
echo "✅  OK"

echo "3️⃣  GET /books/999 – expect 404"
request GET "$BASE_URL/999"
expect_status 404
echo "✅  OK"

echo "4️⃣  POST /books – create Hitchhiker, expect 201"
newBook='{"title":"The Hitchhiker'\''s Guide to the Galaxy","author":"Douglas Adams","publishedYear":1979}'
request POST "$BASE_URL" "$newBook"
expect_status 201
NEW_ID=$(jq '.id' <"$TMP_BODY")
echo "✅  Created book with id=$NEW_ID"

echo "5️⃣  GET /books – expect 5 books now"
request GET "$BASE_URL"
expect_status 200
count=$(jq 'length' <"$TMP_BODY")
[[ $count -eq 5 ]] || { echo "❌  Expected 5 books, got $count"; exit 1; }
echo "✅  OK"

echo "6️⃣  PUT /books/$NEW_ID – update title, expect 200"
update='{"title":"Hitchhiker (Updated)"}'
request PUT "$BASE_URL/$NEW_ID" "$update"
expect_status 200
expect_body_contains "Updated"
echo "✅  OK"

echo "7️⃣  DELETE /books/$NEW_ID – expect 204"
request DELETE "$BASE_URL/$NEW_ID"
expect_status 204
echo "✅  OK"

echo "8️⃣  GET /books/$NEW_ID – expect 404 (gone)"
request GET "$BASE_URL/$NEW_ID"
expect_status 404
echo "✅  All tests passed!"

rm "$TMP_BODY"