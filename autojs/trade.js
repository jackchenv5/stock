// 点亮屏幕
function order(code,num) {
  // home();
  launchApp("同花顺");
  sleep(1000);
  while (!click("交易"));
  sleep(1000);
  while (!click("买入"));
  sleep(1000);
  click("股票代码");
  sleep(1000);
  console.log("input code...");
  setText(code);
  sleep(1000);
  click(1090, 2700);
  sleep(1000);
  setText(2, num);
  //确认股票输入
  sleep(1000);
  //买入
  click(460, 1285);
  sleep(500);
  click("确认买入");
};

function sail(code,count){}

function get_account_info(){}

function get_hold_info(){}


// 工具函数
function wait_and_exec(fn,delay,...args){
  if (typeof fn !== 'function') {
    return;
  }
  if (typeof delay !== 'number' || delay < 0) {
    console.error('Second argument must be a non-negative number representing the delay in milliseconds');
    return;
  }
  sleep(delay);
  fn(...args);

}

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


//main 主函数

function main(){
  //主函数开启两个线程，一个交易线程，一个为心跳线程
  //交易线程完成买卖操作，具有最高优先级
  //心跳线程 汇报持仓信息
}