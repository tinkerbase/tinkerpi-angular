TASK:  Edit Person
-----

GRAPHQL END POINTS
---
---

-- The graphiql endpoint allows you to test the queries:

http://tinkerpiapi.azurewebsites.net/graphiql

-- The API endpoint is used by the application:

http://tinkerpiapi.azurewebsites.net/graphql


PEOPLE LIST (This is done)
---
---

URL:    /admin-panel/master/people            : displays a list of people
CODE:   C:\TinkerDrive\Development\TinkerPi Angular\src\app\AdminPanel\Master\mst-people\mst-people.component.ts

Query:

```
{
  mstPeopleList
  {
  	peopleId
    personCode
    name
  }
}
```

PEOPLE UPDATE
---
---

Click on the "eye" icon in the people list to display the edit page

This query should retrieve the records for the edit screen:

Query

{
  mstPeopleUpdate
  {
  	peopleId
    personCode
    firstName
    lastName
  }
}

This mutation will update the record:

Mutation:

```
mutation ($person: mstPersonInput!) {
	mstPersonUpdate(person: $person) { peopleId, personCode, name, firstName, lastName, error }    
}
```

Query Variables:

```
{
  "person": {
    "peopleId": "78851699-31ec-e911-b5e9-00155da55115",
    "personCode": "wjudd",
    "name": "Wynonna Judd", 
    "firstName": "Wynonna",
    "lastName": "Judd"
  } 
}
```

After clicking "Save":

-- If there is an error, reload the form and display the error

-- If the save is successful, return to the list

