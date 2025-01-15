import threading
import time

from .stragegy_base import StrategyBase



class GridStrategy(StrategyBase):
    def __int__(self, code, total_fund, stop_profit_per=None, stop_loss_per=0.2, step_up=3, step_down=2, max_buy_time=3,max_sell_time=3):
        self._step_up = step_up
        self._step_down = step_down
        self._max_buy_time = max_buy_time
        self._max_sell_time = max_sell_time

        super().__int__(code, total_fund, stop_profit_per=stop_profit_per, stop_loss_per=stop_loss_per)

    def __str__(self):
        return "grid_trade"

    def __repr__(self):
        return "grid_trade"

    def monitor(self):
        for i in range(5):
            print(f"Number {i}")
            time.sleep(1)
        pass


    def start(self):
        # 启动一个线程，实时监控 code 走向
        # 1. 查询当前持仓，从自己数据库查，不下发查询任务。
        # 2. 涨速为 -0.5~0.5 且为 -2%， 买入
        # 3. 涨速为 -0.5~0.5 且为 3%， 卖出
        thread = threading.Thread(target=self.monitor())
        thread.start()
        thread.join()
        print('done')