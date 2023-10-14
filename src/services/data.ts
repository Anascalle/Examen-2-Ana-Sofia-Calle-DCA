export async function getCats(fact:any){
    try {
        const cats= await fetch (`https://cataas.com/cat/says/${fact}`).then( res => res);
        console.log(cats)
        return cats
    } catch (error) {
        
    }
}
export async function getFacts(){
    try {
        const fact= await fetch (`https://catfact.ninja/fact`).then( res => res.json());
        console.log(fact)
        return fact
    } catch (error) {
        
    }
}
