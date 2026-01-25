
async function getRequest() {
    try {
        console.log("Start Requesting");

        // GET METHOD
        const request = await fetch ('https://jsonplaceholder.typicode.com/users.');

        if(!request.ok){
            throw new error (`HTTPS Error! status ${request.status}`);
        }

        const data = await request.json();

        console.log(data);

    } catch (error) {
        console.log(error)
    }
}

getRequest();