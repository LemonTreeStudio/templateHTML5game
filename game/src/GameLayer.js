
var GameLayer = cc.Layer.extend({
	screenSize:null,
    map:null,

	init:function () {
		this._super();

		this.screenSize = cc.Director.getInstance().getWinSize();

		// this.map = cc.TMXTiledMap.create("game/res/Map.tmx");
        // this.map.setScaleX(0.45);
        // this.map.setScaleY(0.45);
        // this.addChild(this.map, 1);

		return true;
	},


});

GameLayer.create = function () {
    var sg = new GameLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        layer.setAnchorPoint(cc.PointZero());
        layer.init();
        this.addChild(layer);
    }
});