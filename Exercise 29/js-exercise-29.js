
async function resultData() {
    console.log("Midterm Exam Result");

    const result = await fetch ('js-exercise-29.json');

    const exam = await result.json();

    console.log("You're result", exam);
}

resultData();