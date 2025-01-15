import time

from strategy.strategy_grid import GridStrategy

if __name__ == '__main__':
    grid = GridStrategy('000001',100000)
    thread  =  grid.get_thread()
    thread.join()
    grid.stop()