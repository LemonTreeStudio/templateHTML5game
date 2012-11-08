
var GameLayer = cc.Layer.extend({
	screenSize:null,

	init:function () {
		this._super();

		this.screenSize = cc.Director.getInstance().getWinSize();

		

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