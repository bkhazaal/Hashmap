function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
    
}

const data = {};
const testkey = process.argv[2];

const hashCode = hash(testkey);
data[hashCode] = testkey.charAt(0);

console.log(data[hash(testkey)]);