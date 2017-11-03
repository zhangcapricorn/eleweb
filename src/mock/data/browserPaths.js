import Mock from "mockjs"

const BrowserPaths = []
for(let i = 0; i < 19; i++){
	BrowserPaths.push(Mock.mock({
		"id":Mock.Random.integer(0,100),
		"path_name":Mock.Random.string('lower', 20),
        "creator" : Mock.Random.string('lower', 20),
        "create_date" : Mock.Random.date(),
        "paths" : Mock.mock({
          "array|1-10": [
            "Hello",
            "Mock.js",
          ]
        })
	}));
}

export { BrowserPaths }

