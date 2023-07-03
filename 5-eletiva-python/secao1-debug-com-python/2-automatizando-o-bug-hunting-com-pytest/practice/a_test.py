from mean import mean


def test_a_simple_test():
    assert True


def test_sum(my_list):
    assert sum(my_list) == 6


def test_mean():
    assert mean([1, 2, 3, 4, 5]) == 3
