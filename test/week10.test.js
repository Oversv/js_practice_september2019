const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require ("../challenges/week10");

describe('sumDigits', ()=>{
    test('it throws an error if number has not been passed', ()=>{
        expect(()=>{
            sumDigits();
        }).toThrow('n is required');

        expect(()=>{
            sumDigits('7');
        }).toThrow('the first argument is not a number');

        expect(()=>{
            sumDigits('abc');
        }).toThrow('the first argument is not a number');

        expect(()=>{
            sumDigits([1, 2, 3]);
        }).toThrow('the first argument is not a number');
    });

    test('returns the sum of all its digits 123 = 6', ()=>{
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(1)).toBe(1);
        expect(sumDigits(235)).toBe(10);
    });

    test('the function have to sum de digits of the negative numbers', ()=>{
        expect(sumDigits(-123)).toBe(6);
        expect(sumDigits(-1)).toBe(1);
        expect(sumDigits(-235)).toBe(10);
    });
});

describe('createRange', ()=>{
    test('it throws an error if number has not been passed', ()=>{
        expect(()=>{
            createRange();
        }).toThrow('start is required');

        expect(()=>{
            createRange(5);
        }).toThrow('end is required');

        expect(()=>{
            createRange(5, 'a');
        }).toThrow('the arguments are not a number');

        expect(()=>{
            createRange('a', 5);
        }).toThrow('the arguments are not a number');

        expect(()=>{
            createRange(1, 5, '6');
        }).toThrow('the step argument is not a number');

        expect(()=>{
            createRange(8, 4, 2 );
        }).toThrow('end has to be higher than start');
    });

    test('This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]', () =>{
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);    
        expect(createRange(6, 8)).toEqual([6, 7, 8]);   
        expect(createRange(-2, 8, 4)).toEqual([-2, 2, 6]);   
    });
});

describe('getScreentimeAlertList', ()=>{
    test('it throws an error if not passed the correct arguments', ()=>{
        expect(()=>{
            getScreentimeAlertList();
        }).toThrow('users is required');

        expect(()=>{
            getScreentimeAlertList(['Paca']);
        }).toThrow('date is required');

        expect(()=>{
            getScreentimeAlertList('Paca', '2019-05-04');
        }).toThrow('incorrect arguments, pass an array and a string');

        expect(()=>{
            getScreentimeAlertList(['Paca'], 20190504);
        }).toThrow('incorrect arguments, pass an array and a string');
        
        expect(()=>{
            getScreentimeAlertList('Paca', '12-06-2020');
        }).toThrow('incorrect arguments, pass an array and a string');

        expect(()=>{
            getScreentimeAlertList(['Paca'], '12-06-2020');
        }).toThrow('incorrect date format, the correct format is like YYYY-MM-DD');
    });

    test('The function should return an array of usernames of users who have used it more than 100 minutes of screentime for a given date', () =>{

        const user =[
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                ]
                },
                {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 90, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                ]
            },
        ];

        expect(getScreentimeAlertList(user, '2019-05-04')).toEqual(["beth_1234"]); 
        expect(getScreentimeAlertList(user, '2019-06-13')).toEqual(["sam_j_1989"]);
    });
});


describe('hexToRGB', ()=>{
    test('it throws an error if not passed the correct arguments', ()=>{
        expect(()=>{
            hexToRGB();
        }).toThrow('hexStr is required');

        expect(()=>{
            hexToRGB(192);
        }).toThrow('hexStr is not a string');

        expect(()=>{
            hexToRGB('#FF0015452');
        }).toThrow('incorrect hexadecimal format the correct format is like #FF0010');

        expect(()=>{
            hexToRGB('#FF00XX');
        }).toThrow('incorrect hexadecimal format the correct format is like #FF0010');

        expect(()=>{
            hexToRGB('FF0000');
        }).toThrow('incorrect hexadecimal format the correct format is like #FF0010');      
    });

    test('the function receives the hexadecimal code and return the equivalent in RGB', ()=>{
        expect(hexToRGB('#FF1133')).toBe('rgb(255,17,51)');
        expect(hexToRGB('#FFFFFF')).toBe('rgb(255,255,255)');
        expect(hexToRGB('#ffffff')).toBe('rgb(255,255,255)');
    });
});

describe('findWinner', ()=>{
    test('it throws an error if not passed the correct arguments', ()=>{
        expect(()=>{
            findWinner();
        }).toThrow('board is required');

        expect(()=>{
            findWinner(546);
        }).toThrow('the argument is not an array');

        expect(()=>{
            findWinner([['X', null, null]]);
        }).toThrow('incorrect size of the array');
    });

    test('The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner', ()=>{
        const board =[
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ];

        const board2 =[
            ["X", "X", null],
            ["0", "0", "0"],
            ["X", "X", "0"]
        ];

        const board3 =[
            ["X", "0", "0"],
            ["0", "0", "X"],
            ["X", "X", "0"]
        ];

        expect(findWinner(board)).toBe('X');
        expect(findWinner(board2)).toBe('0');
        expect(findWinner(board3)).toBe(null);
    });
});