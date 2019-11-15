(function (window,Vue,undefined) {
	var vm=new Vue({
		el:'#todoapp',
		data:{
			content:'',
			contentList:[]
		},
		methods: {
			// 添加键盘抬起事件,向数组前面添加数据
			add(){
				console.log('添加了')
			}
		},
	})
})(window,Vue);
