const Mock = require('mockjs')
const data = Mock.mock({
    'image1': {
        title: '外观',
        "urls|15-39": ["@image(100x100,@color,瑶)"]
    },
    'image2': {
        title: '内饰',
        "urls|15-39": ["@image(100x100,@color,瑶)"]
    },
    'image3': {
        title: '细节',
        "urls|15-39": ["@image(100x100,@color,瑶)"]
    },
})
module.exports = data