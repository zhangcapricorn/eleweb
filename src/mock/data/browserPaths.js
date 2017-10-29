import Mock from "mockjs"

const BrowserPaths = []
for(let i = 0; i < 10; i++){
	BrowserPaths.push(Mock.mock({
		"id":Mock.Random.integer(0,100),
		"paths":Mock.Random.string('lower', 5)
	}));
}
export { BrowserPaths }

