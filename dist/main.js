var $menu = $('#menu');
$menu.hide();

var $play = $('#play');
$play.hide();

var $leaderboards = $('#leaderboards');
$leaderboards.hide();

var $settings = $('#settings');
$settings.hide();

var $gamebackground = $('#gamebackground');
$gamebackground.hide();

var $backbutton = $('#backbutton');
$backbutton.hide();

var $leaderlist = $('#leaderlist');
$leaderlist.hide();

var $btnsoundeffects = $('#btnsoundeffects');
var $divsettingsection = $('#divsettingsection');
$divsettingsection.hide();

var $btnmusic = $('#btnmusic');
$btnmusic.on('click', btnmusic);






var $loading = $('#loading');
$loading.show();
setTimeout(function(){
	var myApp = new App();
	Backbone.history.start();
}, 4000)

// $play.on('click', play);
// $leaderboards.on('click', leaderboards);
// $settings.on('click', settings);
$backbutton.on('click', background);
$btnsoundeffects.on('click', btnsoundeffects);

function loading(){
	$loading.hide();
	$play.show();
	$leaderboards.show();
	$settings.show();
}

function play() {
	myApp.navigate('play',{trigger: true});
}
function background(){
	loading();
	$gamebackground.hide();
	$backbutton.hide();
	$leaderlist.hide();
	$divsettingsection.hide();

}
function leaderboards(){
	myApp.navigate('leaderboards',{trigger: true});

}
function settings(){
	myApp.navigate('settings',{trigger: true});

}

function btnmusic(){
	var vol = $(this).text();
	if (vol===('low')){
		$(this).text('medium');
	}
	if (vol===('medium')){
		$(this).text('high');
	}
	if (vol===('high')){
		$(this).text('low');
	}
}
function btnsoundeffects(){
	var effects = $(this).text();
	if (effects===('ON')){
		$(this).text('OFF');
	}
	if (effects===('OFF')){
		$(this).text('ON');
	}
}
var App = Backbone.Router.extend({
	routes: {
		'': 'home',
		'play': 'play',
		'leaderboards': 'leaderboards',
		'settings': 'settings'
	},
	home: function(){
		loading();
		$gamebackground.hide();
		$backbutton.hide();
		$leaderlist.hide();
		$divsettingsection.hide();
	},
	play: function(){
		$gamebackground.show();
		$backbutton.show();
		$play.hide();
		$leaderboards.hide();
		$settings.hide();
		$leaderboards.hide();
		$divsettingsection.hide();
	},
	leaderboards: function(){
		$leaderlist.show();
		$gamebackground.hide();
		$backbutton.show();
		$play.hide();
		$leaderboards.hide();
		$settings.hide();
		$divsettingsection.hide();
	},
	settings: function(){
		$divsettingsection.show();
		loading();

	}
});


