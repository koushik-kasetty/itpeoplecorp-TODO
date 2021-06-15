# itpeoplecorp-TODO

Install dependencies

npm install

Start development server with hot reloading (open http: //0.0.0.0:3000/ and find your way through the directory listing)

npm start

=========================================================================
to get the todo list 
http: //localhost:3000/item/get/:id

sample req
http: //localhost:3000/item/get/1

sample response

{
  "isSuccessful1": true,
  "result": [
    {
      "id": "1",
      "userName": "koushik",
      "taskHeading": "test1",
      "taskDescription": "Descritpion 1",
      "dateCreated": "15-june-2021",
      "status": "in progress"
    }
  ]
}

===========================================================================
to insert data into todo list 

sample req
http: //localhost:3000/item/insert/

payload 
 {
  "id": "8",
  "userName": "7-koushik",
  "taskHeading": "test",
  "taskDescription": "Descritpion 1",
  "dateCreated": "15-june-2021",
  "status": "Completed"
}

sample response

{
  "isSuccessful": {
    "id": "8",
    "userName": "7-koushik",
    "taskHeading": "test",
    "taskDescription": "Descritpion 1",
    "dateCreated": "15-june-2021",
    "status": "Completed"
  }
}

==========================================================================
to update the data

sample req
http: //localhost:3000/item/update/:id

http: //localhost:3000/item/update/7

payload 
 {
  "id": "1",
  "userName": "7-koushik",
  "taskHeading": "test",
  "taskDescription": "Descritpion 1",
  "dateCreated": "15-june-2021",
  "status": "Completed"
}

response: {
  "isSuccessful1": true,
  "result": {
       updated feilds
  }
}s