//image
var s_background1 	= "LD48/res/back_1.png";
var s_background2   = "LD48/res/back_2.png";
var s_background3   = "LD48/res/back_3.png";
var s_objects 		= "LD48/res/gameObjectsAtl-hd.png";

//music

//effect

//tmx

//plist
var s_objects_plist = "LD48/res/gameObjectsAtl-hd.plist";
var s_levels_plist = "LD48/res/CR_Levels.plist";
var s_typical_plist = "LD48/res/TypicalObjects.plist";
var s_object_bodies_plist = "LD48/res/ObjectsBodies.plist";
var s_object_bodies_plist2 = "LD48/res/test.plist";


var g_ressources = [
    //image
    {type:"image", src:s_background1},
    {type:"image", src:s_background2},
    {type:"image", src:s_background3},
    {type:"image", src:s_objects},
    
    //tmx
    
    //plist
    {type:"plist", src:s_objects_plist},
	{type:"plist", src:s_levels_plist},
    {type:"plist", src:s_typical_plist},
    {type:"plist", src:s_object_bodies_plist},
	{type:"plist", src:s_object_bodies_plist2},

    //music
    {type:"bgm", src:"LD48/res/sounds/L2_BM"},
    {type:"bgm", src:"LD48/res/sounds/L3_BM"},
    {type:"bgm", src:"LD48/res/sounds/Lbgm_4"},    
 
    
    //effect
    {type:"effect",src:"LD48/res/sounds/jump"},
    {type:"effect",src:"LD48/res/sounds/death_boss"}, 
    {type:"effect",src:"LD48/res/sounds/death_cow"},
    {type:"effect",src:"LD48/res/sounds/L2_deadboss"},
    {type:"effect",src:"LD48/res/sounds/L2_deadhero"}
];
