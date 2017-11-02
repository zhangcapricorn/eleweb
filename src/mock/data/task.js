import Mock from "mockjs"

const TaskLists = [];
for(let i = 0; i < 19; i++){
	TaskLists.push(Mock.mock({
		"id":Mock.Random.integer(100,500),
	  	"task_name":Mock.Random.string('lower', 5),
      	"task_order_num":Mock.Random.integer(10,100),
	    "task_buy_num":Mock.Random.integer(10,50),
      	"each_order_num":Mock.Random.integer(1,10),
      	task_jd_accounts:[],
      	task_browser_paths : [],
      	"task_delivery_rate":Mock.mock('@float(60, 100)'),
      	"delivery_from":Mock.Random.integer(1,10),
      	"delivery_to":Mock.Random.integer(1,10),
      	"task_confirm_rate":Mock.mock('@float(60, 100)'),
      	"confirm_from":Mock.Random.integer(1,10),
      	"confirm_to":Mock.Random.integer(1,10),
      	"beginDate":Mock.Random.date(),
      	"endDate":Mock.Random.date(),
      	"statusId":Mock.Random.integer(1, 5)
	}));
};

const Todolists = [];
for(let i = 0; i < 19; i++){
	Todolists.push(Mock.mock({
		"jdAccount":Mock.Random.integer(1000,10000),
		"accountGroup":Mock.Random.string('lower', 5),
		"browserPath":Mock.Random.string('lower', 5),
		"todoDate":Mock.Random.date(),
		"finishDate":Mock.Random.date(),
		"orderId":Mock.Random.integer(100,300),
		"orderNumbr":Mock.Random.integer(1,100),
		"orderPrice":Mock.mock('@float(60, 100)'),
        'processState':Mock.Random.integer(1, 3)
	}));
};

export { TaskLists , Todolists}