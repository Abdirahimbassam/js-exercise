
function exercisefetch () {
    return new Promise((resolve, reject) => {
        setTimeout (()=> {
            const pass = true;

            if (pass) {
                resolve (("You're Passsed the exam"))
            } else {
                reject (("You're Failed the exam"))
            }
        }, 3000) 
    })
}

// exercisefetch()
//     .then ((pass)=> console.log(pass))
//     .catch ((faild)=> console.log(faild))

async function resultfetch () {
       try {
          const exam = await exercisefetch() ;
          console.log(exam)
       } catch (faild) {
            console.log(faild)
       }
    
 
}

resultfetch()