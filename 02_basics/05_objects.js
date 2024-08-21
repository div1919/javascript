//De-structuring of objects

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Chai and Code"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //de-structure of object
// console.log(courseInstructor);
console.log(instructor);

//concept of API
//JSON
// {
//     "name": "Divyanshu",
//     "courseName": "JS in Hindi",
//     "price": "free"
// }

//API can also be in the form of array
[
    {},
    {},
    {}
]