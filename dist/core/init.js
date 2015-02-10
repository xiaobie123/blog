(function( SEA, WIN ){
	// SeaJS配置信息
	var SeaJSConfig = {
		// 重设根目录
		'base': '/blog/',
		// 路径缩写
		'paths': {
			// 核心模块目录
			'@dist':        'dist',
			'@core':        'dist/core',
			'@plugins':     'dist/plugins',
			// 控制器模块目录
			'@controller':	'controller',
			// 项目模块目录
			'@project': 	'project',
			'@modules':     'project/modules',
			'@pages':     	'project/pages'
		},
		// 常用模块别名配置
		'alias': {
			'util':         '@core/util.js',
			'view':         '@core/view.js',
			'router':       '@core/router.js',
			'layout':       '@modules/layout.js',
			'jquery':       '@dist/jquery/jquery-1.8.3.min.js'
		},
		'map': [
			// [/^(.*\.(?:css|js))(.*)$/i, '$1?v=20140000']
		],
		'preload': [
			'resources/css/app.css',
			'resources/css/animate.css'
		],
		'debug': 0
	};
	/**
	 * fnInitApp 初始化配置
	 */
	var i = 0;
	var fnInitApp = function() {
		var cb = stepFunc[i++];
		if( cb ) {
			cb.apply( WIN, arguments );
		}
	}
	var stepFunc = [
		// 加载基础文件
		function() {
			// 应用SeaJS配置
			SEA.config( SeaJSConfig );
			SEA.use( ['jquery', 'util', 'layout'], fnInitApp );
		},
		// 初始化布局
		function( jquery, util, layout ) {
			layout.init();
			SEA.use( 'router', fnInitApp );
		},
		// 启动路由
		function( router ) {
			router.start();
		}
	];
	// 初始化开始
	fnInitApp();
})( seajs, window );