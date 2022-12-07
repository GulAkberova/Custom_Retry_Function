async function fetchCatchFunc(url,n){
    try{
        return await axios.get(url).then(res=>console.log(res.data));
    }catch(err){
        console.log(n);
        if(n===1){
            throw err;

        }
        return await fetchCatchFunc(url,n-1);

    }
}

let a=fetchCatchFunc(
    'https://northwind.vercel.app/api/product',4
)

console.log(a)