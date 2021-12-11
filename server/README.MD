## get all course enrolled by student

http://localhost:8080/api/student/view-all-course/?userId=61b441b367cb90fb720724f5

## add student to course

http://localhost:8080/api/course/add-student/?userId=61b39b33d6f83990a8ff5031

body =>

{
"studentId":"61b441b367cb90fb720724f5",
"courseId":"61b3a4b3fd8deecc0a1f50f0"
}

## remove student from course

http://localhost:8080/api/course/remove-student/?userId=61b39b33d6f83990a8ff5031

body =>

{
"studentId":"61b441b367cb90fb720724f5",
"courseId":"61b3a4b3fd8deecc0a1f50f0"
}

## remove course

http://localhost:8080/api/course/remove-course/?userId=61b39b33d6f83990a8ff5031
body =>
{
"toBeDeleatedId":"courseId"
}

## edit course

http://localhost:8080/api/course/edit-course/?userId=61b39b33d6f83990a8ff5031

## user Register

http://localhost:8080/api/user/register

body =>

{
"name":"mark",
"email":"mark@gmail.com",
"password":"mark",
"role":"S"
}

## user login

http://localhost:8080/api/user/login

body =>
{
"email":"john@gmail.com",
"password":"john"
}
