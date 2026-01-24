
function exercisefetch () {
    return new Promise((resolve, reject) => {
        setTimeout (()=>{
            const pass = false;

            if (pass) {
                resolve (("You're Passsed the exam"))
            } else {
                reject (("You're Failed the exam"))
            }
        }, 2000)
    })
}

exercisefetch()
    .then ((result)=> console.log(result))
    .catch ((exam)=> console.log(exam))