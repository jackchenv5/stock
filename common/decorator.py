import signal


class TimeoutException(Exception):
    pass

def timeout(seconds):
    def decorator(func):
        def _handle_timeout(signum, frame):
            raise TimeoutException("Function call timed out.")

        def wrapper(*args, **kwargs):
            signal.signal(signal.SIGALRM, _handle_timeout)
            signal.alarm(seconds)  # 设置超时时间
            try:
                return func(*args, **kwargs)
            finally:
                signal.alarm(0)  # 取消闹钟

        return wrapper

    return decorator
