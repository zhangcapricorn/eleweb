import Mock from 'mockjs'

const Groups = [];
for(let i = 0; i < 19; i++){
    Groups.push(Mock.mock({
        "id":Mock.Random.integer(100,500),
        "group_name":Mock.Random.string('lower', 5),
        "create_date":Mock.Random.date(),
        "accouts_number":Mock.Random.integer(100,500),
        "creator":Mock.Random.string('lower', 5),
        'account_levels' : [],
        'account_views' : [],
        'account_order_status' : [],
        'account_comments' : [],
        'account_citys' : [],
        'plus_rate' : Mock.mock('@float(60, 100)')
    }))
};

const Group = Mock.mock({
    "id":Mock.Random.integer(100,500),
    "group_name":Mock.Random.string('lower', 5),
    "create_date":Mock.Random.date(),
    "accouts_number":Mock.Random.integer(100,500),
    "creator":Mock.Random.string('lower', 5),
    'account_levels' : ['钻石', '黄金'],
    'account_views' : ['<0', '>=1<2', '>=2<5'],
    'account_order_status' : ['>=1<2', '>=2<3', '>=3'],
    'account_comments' : ['>=2<5', '>=5<10', '>=10'],
    'account_citys' : ['深圳', '四川', '昆明'],
    'plus_rate' : Mock.mock('@float(60, 100)')
});

const AccountLevel = ['钻石', '黄金', '白银', '青铜'];
const AccountViews = ['<0', '>=1<2', '>=2<5', '>=5<10', '>=10'];
const AccountOrderStatus = ['<0', '>=1<2', '>=2<3', '>=3'];
const AccountComment = ['<0', '>=1<2', '>=2<5', '>=5<10', '>=10'];
const AccountCitys = ['北京', '上海', '深圳', '四川', '昆明'];

const AccountStatistics = Mock.mock({
    'totalAccountNumbers' : Mock.Random.integer(100,500),
    'availableAccount' : Mock.Random.integer(100,500),
    'unavailableAccount' : Mock.Random.integer(100,500),
    'usedAccount' : Mock.Random.integer(100,500),
    'unusedAccount' : Mock.Random.integer(100,500),
    'accountView' : [
        {"key":'<0', "value":Mock.Random.integer(100,500)},
        {"key":'>=1<2', "value":Mock.Random.integer(100,500)},
        {"key":'>=2<5', "value":Mock.Random.integer(100,500)},
        {"key":'>=5<10', "value":Mock.Random.integer(100,500)},
        {"key":'>=10', "value":Mock.Random.integer(100,500)}
    ],
    'accountOrderStatus' : [
        {"key":'<0', "value":Mock.Random.integer(100,500)},
        {"key":'>=1<2', "value":Mock.Random.integer(100,500)},
        {"key":'>=2<3', "value":Mock.Random.integer(100,500)},
        {"key":'>=3', "value":Mock.Random.integer(100,500)}
    ],
    'accountComment' : [
        {"key":'<0', "value":Mock.Random.integer(100,500)},
        {"key":'>=1<2', "value":Mock.Random.integer(100,500)},
        {"key":'>=2<5', "value":Mock.Random.integer(100,500)},
        {"key":'>=5<10', "value":Mock.Random.integer(100,500)},
        {"key":'>=10', "value":Mock.Random.integer(100,500)}
    ],
    'accountCitys' :  [
        {"key":'北京', "value":Mock.Random.integer(100,500)},
        {"key":'上海', "value":Mock.Random.integer(100,500)},
        {"key":'深圳', "value":Mock.Random.integer(100,500)},
        {"key":'四川', "value":Mock.Random.integer(100,500)},
        {"key":'昆明', "value":Mock.Random.integer(100,500)}
    ],
})

export {Groups, Group, AccountLevel, AccountViews, AccountOrderStatus, AccountComment, AccountCitys, AccountStatistics}