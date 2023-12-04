const numbers = [2, 50, 8, 10, 4, 20, 3, 7, 0, 6, 90, 2, 8, 10, 50, 3, 7, 4, 6, 0, 90]
const resultNumbers = Array.from(new Set(numbers))

console.log(resultNumbers)
const numbers = [13,23,1,23,12,3,65,78,89,89,7,5,3,213,13,13]
// const resultNumbers = Array.from(numbers)
let newArr = []

for (const item of numbers) !newArr.includes(item) && newArr.push(item)
console.log(newArr)
// это правильный вариант того как нужно было удалять дубликаты



function books (bookMap) {
    const bookForMap = bookMap.filter(book => book.includes('у') || book.includes('У'))
    const bookForFilter = bookMap.filter(book => !book.includes('У') || !book.includes('у'))
    const booksResult = bookForMap.map(book => ' Книга с буквой у: ' + book )
    console.log(`книги с буквой у`)
    booksResult.forEach(book => console.log(book))
    console.log('Остальные книги: ')
    bookForFilter.forEach(book => console.log(book))
}

const forBook = ['У лука море дуб зеленый', 'Война и мир','Улыбайся', 'Любовь и предубеждения', 'У страха глаза велики', 'Оно' ,'hello world','Сумерки' ,'Женская логика']
books(forBook)

const users = [
    {name:'John', age: 45},
    {name:'BOB', age: 14},
    {name:'Aziz', age: 15},
    {name:'Malika', age: 76},
    {name:'Mariya', age: 23},
    {name:'Aidana', age: 21},
    {name:'Aalam', age: 23},
    {name:'Leo', age: 17},
]
function usersAges (users){
    const youngUser = users.reduce((min, user) => (user.age < min.age ? user : min))
    const oldUser = users.reduce((max, user) => (user.age > max.age ? user : max))
    const youngAge = Math.abs(oldUser.age - youngUser.age)
    console.log(`Пользователь ${oldUser.name} старше ${youngUser.name} на ${youngAge} лет`)
}
usersAges(users)
