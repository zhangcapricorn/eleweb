import Mock from "mockjs"

const Orders = []
for(let i = 0; i < 100; i++){
	Orders.push(Mock.mock({
		"id":Mock.Random.integer(100,500),
		"task":Mock.Random.integer(100,500),
		"date":Mock.Random.date(),
		"num":Mock.Random.integer(100,500),
		"status":Mock.Random.integer(1, 5)
	}));
}
export {Orders}