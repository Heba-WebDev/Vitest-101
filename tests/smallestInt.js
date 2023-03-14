

export default function smallestInt(arr) {

    if(Array.isArray(arr) === false) throw new Error("Not a valid argument")
    return Math.min(...arr);
    
}