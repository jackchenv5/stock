import numpy as np

def gains(change_list):
    # 假设有一个价格序列的数组
    changes = np.array(change_list)
    # 计算相邻元素之间的差值
    change_diffs = np.diff(changes)

    return change_diffs

def gains_rate(change_list):
    # 假设有一个价格序列的数组
    changes = np.array(change_list)
    # 计算相邻元素之间的差值
    change_diffs = np.diff(changes)
    # 计算涨幅，这里我们只关注正增长，因此涨幅可能为负表示下跌
    # 为了防止除以零错误，我们假设所有价格都是正数，并且没有零元素。
    gains = change_diffs / changes[:-1]
    return gains[-1]



if __name__ == "__main__":
    print(gains([1,2,3,5,6,6,7,8,8,9,10,8,7,6,5,4,2,1,1.5,4]))