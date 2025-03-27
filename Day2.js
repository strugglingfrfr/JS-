function  getTopScorer(topScorer){
    return new Promise ((resolve, reject)=> {
        setTimeout (()=>{
            if (topScorer){
            resolve (`The premier league top scorer this season is ${topScorer}`)
        } else  {
            reject ("Error: Only premier league Data is available ")
        }

        }, 2000,);// will set a delay of two second before outputting the result
    });
}
 getTopScorer ()
 .then(topScorer => console.log(topScorer))
 .catch(league => console.log(league));

 function fetchUserData(){
    return new Promise (async(resolve, reject)=>{
        try{ 
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1 ");
            if (!Response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            resolve(data.name);
        } catch (error){
            reject("error fetching user data:"+error.message);
        }
    });
    }

fetchUserData()
    .then(name=> console.log("User's Name:",name))
    .catch(error=> console.log(error));











 
 