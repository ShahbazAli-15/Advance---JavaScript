const numbers = [
    "03001234567",
    "03123456789",
    "02123456789",
    "030012345",
];

const pattern = /^03[0-9]{9}$/

numbers.forEach(number => {
    console.log(number, pattern.test(number));
});