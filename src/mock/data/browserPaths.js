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
};

const BrowserPath = Mock.mock({
  "id":Mock.Random.integer(0,100),
  "path_name":Mock.Random.string('lower', 20),
  "creator" : Mock.Random.string('lower', 20),
  "create_date" : Mock.Random.date(),
  "paths" : {
    0 : {"key":Mock.Random.string('lower', 20), "value":Mock.Random.integer(1,100)},
    1 : {"key":Mock.Random.string('lower', 20), "value":Mock.Random.integer(1,100)},
    2 : {"key":Mock.Random.string('lower', 20), "value":Mock.Random.integer(1,100)},
    3 : {"key":Mock.Random.string('lower', 20), "value":Mock.Random.integer(1,100)},
    4 : {"key":Mock.Random.string('lower', 20), "value":Mock.Random.integer(1,100)},
    5 : {"key":Mock.Random.string('lower', 20), "value":Mock.Random.integer(1,100)},
  }
});

export { BrowserPaths, BrowserPath }

