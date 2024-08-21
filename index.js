// 1
const user = {
    hobby: "volleyball",
    premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
const {hobby, premium, mood} = user;
console.log(`${keys[0]}: ${hobby}; ${keys[1]}: ${premium}; ${keys[2]}: ${mood}`);

// 2
// тут поки не знаю як використати деструктуризацію
const countProps = function(obj){
    let result = 0;
    for(const key in obj){
        result++;
    }
    return result;
};

const obj1 = {
    color: 'blue',
    size: 'small',
};
const obj2 = {
    color: 'red',
    size: 'medium',
    shape: 'circle',
};
const obj3 = {
    color: 'green',
    size: 'big',
    shape: 'square',
    borderColor: 'blue',
};
console.log("У першому об'єкті " + countProps(obj1) + " властивостей, у другому - " + countProps(obj2) + ", а у третьому - " + countProps(obj3));


// 3
const findBestEmployee = function(employees){
    const {olga, alex, marta, max} = employees;
    let maxOfTasks = olga;
    let nameOfTheBestEmployer = 'Olga';
    if(alex > maxOfTasks) {
        maxOfTasks = alex;
        nameOfTheBestEmployer = 'Alex';
    }
    if(marta > maxOfTasks){
        maxOfTasks = marta;
        nameOfTheBestEmployer = 'Marta';
    }
    if(max > maxOfTasks){
        maxOfTasks = max;
        nameOfTheBestEmployer = 'Max';
    }
    return nameOfTheBestEmployer;
};
const employees = {
    olga: 4,
    alex: 10,
    marta: 12,
    max: 6,
};
console.log(findBestEmployee(employees));

// 4
const countTotalSalary = function(employeesSalary){
    const {olga, alex, marta, max} = employeesSalary;
    return olga + alex + marta + max;
};
const employeesSalary = {
    olga: 400,
    alex: 1000,
    marta: 1200,
    max: 600,
};
console.log("Сумарна зарплата всіх працівників становить " + countTotalSalary(employeesSalary));


// 5
const geometricShapes = [
    {
      color: "purple",
      size: "big",
      borderColor: "green",
      opacity: 0.6,
    },
    {
        color: "white",
        size: "medium",
        borderColor: "blue",
        opacity: 0.4,
      },
      {
        color: "yellow",
        size: "small",
        borderColor: "red",
        opacity: 0.9,
      },
  ]
  const getAllPropValues = function(arr, prop){
    let result = [];
    const [first, second, third] = arr;
    result.push(first[prop]);
    result.push(second[prop]);
    result.push(third[prop]);
    return result;
  }
  console.log(getAllPropValues(geometricShapes, 'color'));
  console.log(getAllPropValues(geometricShapes, 'size'));
  console.log(getAllPropValues(geometricShapes, 'borderColor'));
  console.log(getAllPropValues(geometricShapes, 'opacity'));


// 6
const allProducts = [
    {
        name: 'milk',
        price: 20,
        amount: 3,
    },
    {
        name: 'apple',
        price: 10,
        amount: 15,
    },
    {
        name: 'banana',
        price: 40,
        amount: 5,
    },
]
const calculateTotalPrice = function(allProducts, productName){
    const [milk, apple, banana] = allProducts;
    if(productName == milk.name) return milk.price * milk.amount; 
    if(productName == apple.name) return apple.price * apple.amount; 
    if(productName == banana.name) return banana.price * banana.amount; 
};
console.log("Загальна вартість продукту становить " + calculateTotalPrice(allProducts, 'milk'));
console.log("Загальна вартість продукту становить " + calculateTotalPrice(allProducts, 'apple'));
console.log("Загальна вартість продукту становить " + calculateTotalPrice(allProducts, 'banana'));


// 7
const account = {
    number: 12345,
    balance: 1000,
    topUps: [400, 700],
    withdraws: [100],
};
while(true){
    const action = prompt("Яку дію Ви хочете виконати(подивитись баланс/ поповнити рахунок/ зняти кошти/ переглянути транзакції)?");
    if(action === 'подивитись баланс'){
        alert(`На рахунку ${account.balance} гривень`);
    }
    if(action === 'поповнити рахунок'){
        const sum = Number(prompt("Яку суму бажаєте покласти на рахунок?"));
        account.balance += sum;
        account.topUps.push(sum);
        alert(`Рахунок успішно поповнено на ${sum} гривень. Баланс становить ${account.balance} гривень`);
    }
    if(action === 'зняти кошти'){
        const sum = Number(prompt("Яку суму бажаєте зняти?"));
        if(sum > account.balance){
            alert("на рахунку недостатньо коштів!");
            continue;
        }
        account.balance -= sum;
        account.withdraws.push(sum);
        alert(`Ви успішно зняли ${sum} гривень. На рахунку залишилось ${account.balance} гривень`);
    }
    if(action === 'переглянути транзакції'){
        const {topUps, withdraws, ...rest} = account;
        alert(`Поповнення рахунку: ${topUps}; зняття коштів: ${withdraws}`);
    }
    else alert("Введено неправильний запит. Спробуйте ще раз");
}