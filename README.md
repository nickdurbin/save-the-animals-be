<a name="top"></a>
# Save The Animals v1.0.0

Save The Animals Application

- [Auth](#auth)
  - [Logins a new user](#logins-a-new-user)
  - [Registers a new supporter](#registers-a-new-supporter)
  - [Registers a new organization](#registers-a-new-organization)
  
- [User](#user)
  - [Deletes current user information](#deletes-current-user-information)
  - [Gets current user information](#gets-current-user-information)
  - [Updates current user information](#updates-current-user-information)

- [Organization](#organization)
  - [Updates current org information](#deletes-current-org-information)
  - [Gets current org information](#gets-current-org-information)
  - [Updates current org information](#updates-current-org-information)

- [Campaign](#campaign)
  - [Updates current campaign information](#deletes-current-campaign-information)
  - [Gets current campaign information](#gets-current-campaign-information)
  - [Updates current campaign information](#updates-current-campaign-information)
  


# Auth

## Logins a new user
[Back to top](#top)

<p>Logins a new user</p>

  POST https://save-the-animals-be.herokuapp.com/api/auth/login





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| email | String | <p>The New Supporter/Organization email *Required</p>|
| password | String | <p>The New Supporter/Organization password *Required</p>|

### Success Response

Success-Response:

```
{
    "message": "Welcome, <user.email>!"
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzc5OTA4MzcsImV4cCI6MTU3ODA3NzIzN30.hF8BpMjHGwbAK-5AqXQZ3aBHu0G62KoaBFLWKe5KD1s"
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| message | Object | <p>Welcome message and token for the new user</p>|


### Error 4xx

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| LoginValidationFail |  | <p>Fields are required</p>|
| InvalidEmailPassword |  | <p>Invalid Email or Password</p>|


### Error Response

Login-Fields-Required

```
{
    "message": "Email and password are required"
}
```
Invalid-Email-Password

```
{
    "message": "Invalid Credentials"
}
```
## Registers a new supporter
[Back to top](#top)

<p>Registers a supporter</p>

  POST https://save-the-animals-be.herokuapp.com/api/auth/register/supporter





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| email | String | <p>The New Supporter's email *Required, *Unique</p>|
| username | String | <p>The New Supporter's username *Required, *Unique</p>|
| password | String | <p>The New Supporter's password *Required</p>|
| first_name | String | <p>The New Supporter's first_name *Required</p>|
| last_name | String | <p>The New Supporter's last_name *Required</p>|

### Success Response

Success-Response:

```
{
    "message": "User has successfully been registered!"
    "user": { 
      email: user.email, 
      username: user.username, 
      password: user.password, 
      first_name: user.first_name, 
      last_name: user.last_name 
    }
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| message | Object | <p>Welcome message and user object.</p>|


### Error 4xx

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| UserNameAlreadyTaken |  | <p>Username is already taken</p>|
| EmailAlreadyTaken |  | <p>Email is already taken</p>|
| RegisterValidationFail |  | <p>Fields are required</p>|


### Error Response

Username-Already-Taken

```
{
    "message": "Username is already taken"
}
```
Email-Already-Taken

```
{
    "message": "Email is already taken"
}
```
Register-Fields-Required

```
{
    "message": "Email, username, password, first_name, and last_name are required"
}
```

## Registers a new organization
[Back to top](#top)

<p>Registers a supporter</p>

  POST https://save-the-animals-be.herokuapp.com/api/auth/register/organization





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| email | String | <p>The New Org email *Required, *Unique</p>|
| username | String | <p>The New Org username *Required, *Unique</p>|
| password | String | <p>The New Org password *Required</p>|
| org_name | String | <p>The New Org org_name *Required</p>|
| org_description | String | <p>The Org org_description is *Optional</p>|

### Success Response

Success-Response:

```
{
    "message": "User has successfully been registered!"
    "user": { 
      email: user.email, 
      username: user.username, 
      password: user.password, 
      org_name: user.org_name, 
      org_descrption: user.org_description  
    }
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| message | Object | <p>Welcome message and user object.</p>|


### Error 4xx

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| UserNameAlreadyTaken |  | <p>Username is already taken</p>|
| EmailAlreadyTaken |  | <p>Email is already taken</p>|
| RegisterValidationFail |  | <p>Fields are required</p>|


### Error Response

Username-Already-Taken

```
{
    "message": "Username is already taken"
}
```
Email-Already-Taken

```
{
    "message": "Email is already taken"
}
```
Register-Fields-Required

```
{
    "message": "Email, username, password, and org_name are required"
}
```
# User

## Updates current user information
[Back to top](#top)

<p>Deletes the current logged in user based on the provided token</p>

  DELETE https://save-the-animals-be.herokuapp.com/api/user




### Success Response

Success-Response:

```
{
     "message": "User ID:9 removed"
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| user | Object | <p>Returns a confirmation message</p>|


### Error 4xx

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| UserNameAlreadyTaken |  | <p>Username is already taken</p>|
| EmailAlreadyTaken |  | <p>Email is already taken</p>|


### Error Response

Username-Already-Taken

```
{
    "message": "Username is already taken"
}
```
Email-Already-Taken

```
{
    "message": "Email is already taken"
}
```
## Gets current user information
[Back to top](#top)

<p>Retrieves the current login user based on the provided token</p>

  GET https://save-the-animals-be.herokuapp.com/api/user/:id




### Success Response

Success-Response:

```
{
    id: 1,
    email: "test@test.com", 
    username: 'user',
    first_name: "Bob", 
    last_name: "Barker"
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| user | Object | <p>Returns the user information minus password and isOrg</p>|




## Updates current user information
[Back to top](#top)

<p>Updates the current logged in user based on the provided token</p>

  PUT https://save-the-animals-be.herokuapp.com/api/user/:id





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| email | String | <p>The New Users email *Optional *Unique</p>|
| username | String | <p>The New Users username *Optional *Unique</p>|
| password | String | <p>The New Users password *Optional</p>|
| first_name | String | <p>The New Users first_name *Optional</p>|
| last_name | String | <p>The New Users last_name *Optional</p>|


### Success Response

Success-Response:

```
{
    email: "test@test.com", 
    username: 'user',
    first_name: "Bob", 
    last_name: "Barker"
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| user | Object | <p>Returns the user information minus password and isOrg</p>|


### Error 4xx

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| UserNameAlreadyTaken |  | <p>Username is already taken</p>|
| EmailAlreadyTaken |  | <p>Email is already taken</p>|


### Error Response

Username-Already-Taken

```
{
    "message": "Username is already taken"
}
```
Email-Already-Taken

```
{
    "message": "Email is already taken"
}
```

# Organization

## Updates current organization information
[Back to top](#top)

<p>Deletes the current logged in organization based on the provided token</p>

  DELETE https://save-the-animals-be.herokuapp.com/api/organization




### Success Response

Success-Response:

```
{
     "message": "Org ID:9 removed"
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| organization | Object | <p>Returns a confirmation message</p>|


### Error 4xx

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| UserNameAlreadyTaken |  | <p>Username is already taken</p>|
| EmailAlreadyTaken |  | <p>Email is already taken</p>|


### Error Response

Username-Already-Taken

```
{
    "message": "Username is already taken"
}
```
Email-Already-Taken

```
{
    "message": "Email is already taken"
}
```
## Gets current Organization information
[Back to top](#top)

<p>Retrieves the current loggged-in organization based on the provided token</p>

  GET https://save-the-animals-be.herokuapp.com/api/organization/:id




### Success Response

Success-Response:

```
{
    id: 1,
    email: "org1@org1.com",
    username: "org1",
    org_name: "Help Animals", 
    org_description: "The root of our mission is to provide shelter for endangered animals around the world.",
    campaign_id: 3 
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| organization | Object | <p>Returns the organization information minus password and isOrg</p>|




## Updates current organization information
[Back to top](#top)

<p>Updates the current logged-in organization based on the provided token</p>

  PUT https://save-the-animals-be.herokuapp.com/api/organization/:id





### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| email | String | <p>The New Org email *Optional *Unique</p>|
| username | String | <p>The New Org username *Optional *Unique</p>|
| password | String | <p>The New Org password *Optional</p>|
| org_name | String | <p>The New Org org_name *Optional</p>|
| org_description | String | <p>The New Organization org_description *Optional</p>|


### Success Response

Success-Response:

```
{
    id: 1,
    email: "org1@org1.com",
    username: "org1",
    org_name: "Help Animals", 
    org_description: "The root of our mission is to provide shelter for endangered animals around the world.",
    campaign_id: 3 
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| organization | Object | <p>Returns the organization information minus password and isOrg</p>|


### Error 4xx

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| UserNameAlreadyTaken |  | <p>Username is already taken</p>|
| EmailAlreadyTaken |  | <p>Email is already taken</p>|


### Error Response

Username-Already-Taken

```
{
    "message": "Username is already taken"
}
```
Email-Already-Taken

```
{
    "message": "Email is already taken"
}
```

# Campaign

## Updates current campaign information
[Back to top](#top)

<p>Deletes the current logged in organization campaign based on the provided token</p>

  DELETE https://save-the-animals-be.herokuapp.com/api/campaigns




### Success Response

Success-Response:

```
{
     "message": "Campaign ID:9 removed"
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| campaign | Object | <p>Returns a confirmation message</p>|


### Error 4xx

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| UnAuthorizedUser |  | <p>User not authorized to delete campaign.</p>|


### Error Response

UnAuthorizedUser

```
{
    "message": "User not authorized to delete campaign."
}
```

## Gets current Campaign information
[Back to top](#top)

<p>Retrieves the current loggged-in campaign based on the provided token</p>

  GET https://save-the-animals-be.herokuapp.com/api/campaign/:id


### Success Response

Success-Response:

```
{
  "id": 3,
  "title": "Their Livelihood Depends On Us",
  "animal": "Cross River Gorillas",
  "urgency": "High",
  "location": "Nigeria and Cameroon",
  "date": "March 3, 2020",
  "description": "Dwindling numbers and lack of habitat have caused these gorillas to be some of the most endangered species in the world. Help us rebuild their population.",
  "funding_goal": 2000,
  "image": "https://unsplash.com/photos/UzNHIYD6Er8",
  "completed": true,
  "donations": [
    {
      "sum(`donation`)": 2000,
      "supporter_id": [
        {
          "first_name": "Bob",
          "last_name": "Barker",
          "email": "test@test.com",
          "username": "user",
          "donation": 100,
          "message": "Thank you for your support of the project and helping, Save the Animals, make a real difference!"
        },
        {
          "first_name": "Baker",
          "last_name": "Mayfield",
          "email": "test2@test2.com",
          "username": "user2",
          "donation": 1900,
          "message": "Thank you for your support of the project and helping, Save the Animals, make a real difference!"
        }
      ]
    }
  ]
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| campaign | Object | <p>Returns the campaign information.</p>|




## Updates current organization information
[Back to top](#top)

<p>Updates the current logged-in campaign based on the provided token</p>

  PUT https://save-the-animals-be.herokuapp.com/api/campaign/:id


### Parameter Parameters

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| title | String | <p>The New Campaign title *Optional *Unique</p>|
| animal | String | <p>The New Campaign animal *Optional *Unique</p>|
| urgency | String | <p>The New Campaign urgency *Optional</p>|
| location | String | <p>The New Campaign location *Optional</p>|
| date | Date | <p>The New Campaign date*Optional</p>|
| description | String | <p>The NewCampaign description *Optional</p>|
| funding_goal | Integer | <p>The New Campaign funding_goal*Optional</p>|
| image | String | <p>The New Campaign image *Optional</p>|
| completed | Boolean | <p>The New Campaign completed *Optional</p>|


### Success Response

Success-Response:

```
{
  "id": 3,
  "title": "Their Livelihood Depends On Us",
  "animal": "Cross River Gorillas",
  "urgency": "High",
  "location": "Nigeria and Cameroon",
  "date": "March 3, 2020",
  "description": "Dwindling numbers and lack of habitat have caused these gorillas to be some of the most endangered species in the world. Help us rebuild their population.",
  "funding_goal": 2000,
  "image": "https://unsplash.com/photos/UzNHIYD6Er8",
  "completed": true
}
```

### Success 200

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| campaign | Object | <p>Returns the campaign information.</p>|


### Error 4xx

| Name     | Type       | Description                           |
|:---------|:-----------|:--------------------------------------|
| UnAuthorizedUser |  | <p>User not authorized to make changes.</p>|


### Error Response

UnAuthorizedUser

```
{
    "message": "User not authorized to make changes."
}
```