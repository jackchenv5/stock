class StrategyBase(object):
    #
    def __int__(self, code, total_fund, stop_profit_per=None, stop_loss_per=0.2, step_up=3, step_down=2, max_buy_time=3,
                max_sell_time=3):
        self._total_fund = total_fund
        self._stop_profit_per = stop_profit_per
        self._stop_loss_per = stop_loss_per
        self._step_up = step_up
        self._step_down = step_down
        self._max_buy_time = max_buy_time
        self._max_sell_time = max_sell_time
        # cur hold info
        self._hold_info = {
            'code': '',
            'cur_fund': 0.0,
            'cur_hold_price': 0.0,
            'cur_hold_profit': 0.0,
            'cur_hold_per': 0
        }
        # 当日交易
        self.traded_info = {}
        #{'2024-'}
        # cur day max data
        #当日最高价
        self._cur_max_pct = 0.0
        #当日最低价
        self._cur_min_pct = 0.0

        self._data = []  # 1分钟 间隔 60 * 3.5 = 210
        # item {price,change_pct,time,gains}

    def __str__(self):
        return "base_trade"

    def __repr__(self):
        return "base_trade"

    def monitor(self):
        pass

    def start(self):
        # 启动一个线程，实时监控 code 走向
        # 1. 查询当前持仓，从自己数据库查，不下发查询任务。
        # 2. 涨速为 -0.5~0.5 且为 -2%， 买入
        # 3. 涨速为 -0.5~0.5 且为 3%， 卖出
        #
        pass

