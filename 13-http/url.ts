const value = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash';

const urlObj = new URL(value);

console.log(urlObj);
