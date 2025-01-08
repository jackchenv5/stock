// 点亮屏幕
function openScreen() {
    if (!device.isScreenOn()) {
      device.wakeUp();
      sleep(1000);
      swipe(500, 2000, 500, 1000, 210);
      sleep(500);
      var password = "135400"; //这里输入你手机的密码
      for (var i = 0; i < password.length; i++) {
        var p = text(password[i].toString()).findOne().bounds();
        click(p);
        sleep(100);
      }
    }
  };

function inputPassword(password) {
    for (var i = 0; i < password.length; i++) {
      var p = text(password[i].toString()).findOne().bounds();
      click(p);
      sleep(100);
    }
  };
  
function order(count) {
  sleep(500);
  home();
  launchApp("同花顺");
  sleep(1000);
  while (!click("交易"));
  sleep(1000);
  while (!click("买入"));
  sleep(1000);
  click("股票代码");
  sleep(1000);
  console.log("input code...");
  setText("000001");
  sleep(1000);
  click(1090, 2700);
  // while (!click("确定"));
  console.log("confirm code");
  sleep(1000);
  setText(2, "300");
  //确认股票输入
  sleep(500);
  sleep(1000);
  //买入
  click(460, 1285);
  sleep(500);
  click("确认买入");
};

function checkAndLogin() {
  console.log("check login...");
  launchApp("同花顺");
  sleep(1000);
  while (!click("交易"));
  let exits = text("国金证券").exists();
  if (!exits) {
    console.log("不在登录界面！");
    return false;
  }
  console.log("点击国金证券");
  sleep(1000);
  //点击登录区域
  var p = text("国金证券").findOne().bounds();
  //   click(p.centerX(), p.centerY());
  click(p);
  sleep(1000);
  //输入密码
  setText("910225");
  sleep(1000);
  text("登录").findOne().click();
  console.log("check login end");
  return true;

  console.log("check login end");
};