while (true) {
    home();
    sleep(1000);
    click(1150, 2380);
    sleep(1000);
    var curPkgName = currentPackage();
    console.log(curPkgName);
    if (curPkgName != "com.vivo.hiboard") {
      console.log("start wechat packet....");
      sleep(1000);
      click(550, 2450); //点击红包
      sleep(1000);
      click(630, 1780); //点击红包
      sleep(500);
      back();
      sleep(200);
      back();
      continue;
    }
    console.log("wait....");
    sleep(3000);
  }
  