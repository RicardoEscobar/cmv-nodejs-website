def roman_to_int(s: str) -> int:
    roman_values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    result = 0
    for i in range(len(s)):
        current_value = roman_values[s[i]]
        if i + 1 < len(s) and roman_values[s[i + 1]] > current_value:
            result -= current_value
        else:
            result += current_value
    return result


if __name__ == '__main__':
    roman_num = "MCMXCIV"
    print(roman_to_int(roman_num))
