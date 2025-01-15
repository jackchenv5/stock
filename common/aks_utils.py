import akshare as ak

from . import STOCK_REAL_TIME_MAP
from .decorator import timeout


@timeout(15)
def get_cur_info(code):
    stock_info = ak.stock_bid_ask_em(symbol=code)
    cur_price = stock_info.loc[STOCK_REAL_TIME_MAP['cur_price'], "value"]
    change_pct = stock_info.loc[STOCK_REAL_TIME_MAP['change_pct'], "value"]
    open_price = stock_info.loc[STOCK_REAL_TIME_MAP['open_price'], "value"]
    prev_close = stock_info.loc[STOCK_REAL_TIME_MAP['prev_close'], "value"]
    turnover = stock_info.loc[STOCK_REAL_TIME_MAP['turnover'], "value"]
    vol_ratio = stock_info.loc[STOCK_REAL_TIME_MAP['vol_ratio'], "value"]
    return {
        'cur_price': cur_price,
        'change_pct': change_pct,
        'open_price': open_price,
        'prev_close': prev_close,
        'turnover': turnover,
        'vol_ratio': vol_ratio
    }