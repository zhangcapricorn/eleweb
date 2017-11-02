import Mock from "mockjs"

const BrowserPaths = []
for(let i = 0; i < 19; i++){
	BrowserPaths.push(Mock.mock({
		"id":Mock.Random.integer(0,100),
		"paths":Mock.Random.string('lower', 20)
	}));
}

const JDAccounts = []
for(let i = 0; i < 19; i++){
	JDAccounts.push(Mock.mock({
		"id":Mock.Random.integer(0,100),
		"paths":Mock.Random.string('lower', 10)
	}));
}
export { BrowserPaths,JDAccounts }

