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

export {Tasks}