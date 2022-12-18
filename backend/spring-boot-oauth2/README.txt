start with : mvn spring-boot:run

get oauth token :

POST http://justgivemeatoken:uJqRnKsEgIdRo8102@localhost:8080/oauth/token?grant_type=password&username=user1&password=123

call secured url 
GET http://localhost:8080/hello
authorization : Bearer {oauth2 token}
