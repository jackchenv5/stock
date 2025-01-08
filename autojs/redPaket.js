toast("抢红包开始....")
sleep(2000)
while (true) {
    sleep(200);
    var curPkgName = currentPackage();
    if (curPkgName == "com.android.systemui" || curPkgName == "com.vivo.fingerprintui") {
      console.log('in config ui ...');
      break
    }
    home(); 
    click(1150, 2380);
    sleep(500);
    curPkgName = currentPackage();
    console.log(curPkgName);
    if (curPkgName != "com.vivo.hiboard" && curPkgName != "com.bbk.launcher2") {
      console.log("start wechat packet....");
      sleep(500);
      click(550, 2450); //点击红包
      sleep(500);
      click(630, 1780); //点击红包
      home();
      continue;
      sleep(1000);
    }
    console.log("wait....");
    sleep(200);
  }
toast("抢红包结束....")