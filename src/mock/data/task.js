import Mock from "mockjs"

const Tasks = []
for(let i = 0; i < 10; i++){
	Tasks.push(Mock.mock({
		"id":Mock.Random.integer(100,500),
		"task_name":Mock.Random.string('lower', 5),
		"date":Mock.Random.date(),
		"num":Mock.Random.integer(100,500),
		"status":Mock.Random.integer(1, 5)
	}));
}

const Todolists = []
for(let i = 0; i < 10; i++){
	Todolists.push(Mock.mock({
		"jdAccount":Mock.Random.integer(1000,10000),
		"accountGroup":Mock.Random.string('lower', 5),
		"browserPath":Mock.Random.string('lower', 5),
		"todoDate":Mock.Random.date(),
		"finishDate":Mock.Random.date(),
		"orderId":Mock.Random.integer(100,300),
		"orderNumbr":Mock.Random.integer(1,100),
		"orderPrice":Mock.mock('@float(60, 100)')
	}));
}

export { Tasks , Todolists}