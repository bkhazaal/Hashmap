function hash(key) {
    if (!key) {
        console.error("value must be greater than zero")
        return;
    }
    let hashCode = 0;

    const primeNumber = 31;
    
    
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    
}

const data = {};
const testkey = process.argv[2];
const Hasher = hash(testkey);


data[Hasher] = testkey && typeof testkey === "string" && 
testkey.charAt(0).toUpperCase(); 

testkey && console.log(data[hash(testkey)]);