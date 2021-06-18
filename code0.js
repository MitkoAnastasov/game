gdjs.GameCode = {};
gdjs.GameCode.GDbackgroundObjects1= [];
gdjs.GameCode.GDbackgroundObjects2= [];
gdjs.GameCode.GDbackgroundObjects3= [];
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDWallObjects1= [];
gdjs.GameCode.GDWallObjects2= [];
gdjs.GameCode.GDWallObjects3= [];
gdjs.GameCode.GDEnemyObjects1= [];
gdjs.GameCode.GDEnemyObjects2= [];
gdjs.GameCode.GDEnemyObjects3= [];
gdjs.GameCode.GDbulletObjects1= [];
gdjs.GameCode.GDbulletObjects2= [];
gdjs.GameCode.GDbulletObjects3= [];
gdjs.GameCode.GDRightWallObjects1= [];
gdjs.GameCode.GDRightWallObjects2= [];
gdjs.GameCode.GDRightWallObjects3= [];
gdjs.GameCode.GDbullet2Objects1= [];
gdjs.GameCode.GDbullet2Objects2= [];
gdjs.GameCode.GDbullet2Objects3= [];
gdjs.GameCode.GDControlsObjects1= [];
gdjs.GameCode.GDControlsObjects2= [];
gdjs.GameCode.GDControlsObjects3= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.GameCode.GDbulletObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbullet2Objects2Objects = Hashtable.newFrom({"bullet2": gdjs.GameCode.GDbullet2Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.GameCode.GDbulletObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbullet2Objects2Objects = Hashtable.newFrom({"bullet2": gdjs.GameCode.GDbullet2Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects2});gdjs.GameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.GameCode.GDbulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet2"), gdjs.GameCode.GDbullet2Objects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbulletObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbulletObjects2[i].timerElapsedTime("cooldown", 0.5) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDbulletObjects2[k] = gdjs.GameCode.GDbulletObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbulletObjects2.length = k;}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbullet2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbullet2Objects2[i].timerElapsedTime("cooldown", 0.2) ) {
        gdjs.GameCode.condition3IsTrue_0.val = true;
        gdjs.GameCode.GDbullet2Objects2[k] = gdjs.GameCode.GDbullet2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbullet2Objects2.length = k;}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.GameCode.GDbulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet2"), gdjs.GameCode.GDbullet2Objects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbulletObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbulletObjects2[i].timerElapsedTime("cooldown", 0.5) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDbulletObjects2[k] = gdjs.GameCode.GDbulletObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbulletObjects2.length = k;}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbullet2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbullet2Objects2[i].timerElapsedTime("cooldown", 0.2) ) {
        gdjs.GameCode.condition3IsTrue_0.val = true;
        gdjs.GameCode.GDbullet2Objects2[k] = gdjs.GameCode.GDbullet2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbullet2Objects2.length = k;}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.GameCode.GDbulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet2"), gdjs.GameCode.GDbullet2Objects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbulletObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbulletObjects2[i].timerElapsedTime("cooldown", 0.5) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbulletObjects2[k] = gdjs.GameCode.GDbulletObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbulletObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbullet2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbullet2Objects2[i].timerElapsedTime("cooldown", 0.2) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDbullet2Objects2[k] = gdjs.GameCode.GDbullet2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbullet2Objects2.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.GameCode.GDbulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet2"), gdjs.GameCode.GDbullet2Objects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbulletObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbulletObjects2[i].timerElapsedTime("cooldown", 0.5) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbulletObjects2[k] = gdjs.GameCode.GDbulletObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbulletObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbullet2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbullet2Objects2[i].timerElapsedTime("cooldown", 0.2) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDbullet2Objects2[k] = gdjs.GameCode.GDbullet2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbullet2Objects2.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.GameCode.GDbulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet2"), gdjs.GameCode.GDbullet2Objects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbulletObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbulletObjects2[i].timerElapsedTime("cooldown", 0.5) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbulletObjects2[k] = gdjs.GameCode.GDbulletObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbulletObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbullet2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbullet2Objects2[i].timerElapsedTime("cooldown", 0.2) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDbullet2Objects2[k] = gdjs.GameCode.GDbullet2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbullet2Objects2.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationSpeedScale(2);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.GameCode.GDbulletObjects2);
gdjs.GameCode.GDbullet2Objects2.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbulletObjects2[i].resetTimer("cooldown");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbulletObjects2Objects, 10000, 10000, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbullet2Objects2Objects, 10000, -(10000), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.GameCode.GDbulletObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableString(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbulletObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbulletObjects2[i].timerElapsedTime("cooldown", 0.2) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDbulletObjects2[k] = gdjs.GameCode.GDbulletObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbulletObjects2.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
/* Reuse gdjs.GameCode.GDbulletObjects2 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbulletObjects2Objects, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointX("")) + 100, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("")) + 45, "");
}{for(var i = 0, len = gdjs.GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbulletObjects2[i].activateBehavior("LinearMovement2", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbulletObjects2[i].resetTimer("cooldown");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbulletObjects2[i].setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet2"), gdjs.GameCode.GDbullet2Objects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableString(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbullet2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbullet2Objects2[i].timerElapsedTime("cooldown", 0.2) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDbullet2Objects2[k] = gdjs.GameCode.GDbullet2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbullet2Objects2.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
/* Reuse gdjs.GameCode.GDbullet2Objects2 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbullet2Objects2Objects, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("")) + 45, "");
}{for(var i = 0, len = gdjs.GameCode.GDbullet2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDbullet2Objects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDbullet2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDbullet2Objects2[i].activateBehavior("LinearMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDbullet2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDbullet2Objects2[i].resetTimer("cooldown");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.GameCode.GDbullet2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDbullet2Objects2[i].setScale(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet2"), gdjs.GameCode.GDbullet2Objects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbullet2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDbullet2Objects2[i].timerElapsedTime("cooldown", 1) ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDbullet2Objects2[k] = gdjs.GameCode.GDbullet2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDbullet2Objects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects2[i].getVariableString(gdjs.GameCode.GDEnemyObjects2[i].getVariables().getFromIndex(1)) == "yes" ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects2[k] = gdjs.GameCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects2.length = k;}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableString(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)) == "off" ) {
        gdjs.GameCode.condition3IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}}
}
}
if (gdjs.GameCode.condition3IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].activateBehavior("LinearMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].activateBehavior("LinearMovement2", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].returnVariable(gdjs.GameCode.GDEnemyObjects2[i].getVariables().getFromIndex(1)).setString("no");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableString(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)) == "off" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setScale(3);
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDPlayerObjects1.length !== 0 ? gdjs.GameCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRightWallObjects2Objects = Hashtable.newFrom({"RightWall": gdjs.GameCode.GDRightWallObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.GameCode.GDbulletObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.GameCode.GDEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbullet2Objects1Objects = Hashtable.newFrom({"bullet2": gdjs.GameCode.GDbullet2Objects1});gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].activateBehavior("LinearMovement2", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].activateBehavior("LinearMovement2", true);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].activateBehavior("LinearMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightWall"), gdjs.GameCode.GDRightWallObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRightWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].activateBehavior("LinearMovement2", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].activateBehavior("LinearMovement", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.GameCode.GDbulletObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbulletObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects2[i].getVariableString(gdjs.GameCode.GDEnemyObjects2[i].getVariables().getFromIndex(1)) == "yes" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects2[k] = gdjs.GameCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects2 */
/* Reuse gdjs.GameCode.GDbulletObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].activateBehavior("LinearMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].activateBehavior("LinearMovement2", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects2[i].returnVariable(gdjs.GameCode.GDEnemyObjects2[i].getVariables().getFromIndex(1)).setString("no");
}
}{for(var i = 0, len = gdjs.GameCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbulletObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.GameCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("bullet2"), gdjs.GameCode.GDbullet2Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDEnemyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbullet2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDEnemyObjects1[i].getVariableString(gdjs.GameCode.GDEnemyObjects1[i].getVariables().getFromIndex(1)) == "yes" ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDEnemyObjects1[k] = gdjs.GameCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDEnemyObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDEnemyObjects1 */
/* Reuse gdjs.GameCode.GDbullet2Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].activateBehavior("LinearMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].activateBehavior("LinearMovement2", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyObjects1[i].returnVariable(gdjs.GameCode.GDEnemyObjects1[i].getVariables().getFromIndex(1)).setString("no");
}
}{for(var i = 0, len = gdjs.GameCode.GDbullet2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDbullet2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDbackgroundObjects1.length = 0;
gdjs.GameCode.GDbackgroundObjects2.length = 0;
gdjs.GameCode.GDbackgroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDEnemyObjects1.length = 0;
gdjs.GameCode.GDEnemyObjects2.length = 0;
gdjs.GameCode.GDEnemyObjects3.length = 0;
gdjs.GameCode.GDbulletObjects1.length = 0;
gdjs.GameCode.GDbulletObjects2.length = 0;
gdjs.GameCode.GDbulletObjects3.length = 0;
gdjs.GameCode.GDRightWallObjects1.length = 0;
gdjs.GameCode.GDRightWallObjects2.length = 0;
gdjs.GameCode.GDRightWallObjects3.length = 0;
gdjs.GameCode.GDbullet2Objects1.length = 0;
gdjs.GameCode.GDbullet2Objects2.length = 0;
gdjs.GameCode.GDbullet2Objects3.length = 0;
gdjs.GameCode.GDControlsObjects1.length = 0;
gdjs.GameCode.GDControlsObjects2.length = 0;
gdjs.GameCode.GDControlsObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;

gdjs.GameCode.eventsList3(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
