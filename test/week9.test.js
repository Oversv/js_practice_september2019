const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require ("../challenges/week9");

describe('sumMultiples', () =>{
    test('it throws an error if not passed an array', () =>{
        expect(()=>{
            sumMultiples();
        }).toThrow('arr is required');

        expect(()=>{
            sumMultiples('foo');
        }).toThrow('an Array is required');

        expect(()=>{
            sumMultiples(4);
        }).toThrow('an Array is required');
    });

    test('it return the sum of any numbers that are a multiple of 3 or 5', () =>{
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test('it works okay with decimal numbers', () =>{
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });

    test('return 0 if there are not multiples of 3 or 5', () =>{
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});

describe('isValidDNA', () =>{
    test('it throws an error if not passed a string', () =>{
        expect(()=>{
            isValidDNA();
        }).toThrow('str is required');

        expect(()=>{
            isValidDNA(['C', 'G', 'T']);
        }).toThrow('a String is required');

        expect(()=>{
            isValidDNA(456);
        }).toThrow('a String is required');
    });

    test('return true if the string only contain "C, G, T, A" ', () =>{
        expect(isValidDNA('CGT')).toBe(true);
        expect(isValidDNA('CAGT')).toBe(true);
        expect(isValidDNA('ZAFVA')).toBe(false);
    });

    test('the lower letters have to be checked', () =>{
        expect(isValidDNA('cgt')).toBe(true);       
    });
});

describe('getComplementaryDNA', () =>{
    test('it throws an error if not passed a string', () =>{
        expect(()=>{
            getComplementaryDNA();
        }).toThrow('str is required');
    });

    test('return a String with the complementary base pairs.  In DNA, T always pairs with A, and C always pairs with G.', () =>{
        expect(getComplementaryDNA('ACTG')).toEqual('TGAC');      
    });
    
    test('the lower letters have to be processed', () =>{
        expect(getComplementaryDNA('actg')).toEqual('TGAC');
    });
});

describe('isItPrime', ()=>{
    test('it throws an error if not passed a number', () =>{
        expect(()=>{
            isItPrime();
        }).toThrow('n is required');

        expect(()=>{
            isItPrime('7');
        }).toThrow('a Number is required');

        expect(()=>{
            isItPrime('a');
        }).toThrow('a Number is required');

        expect(()=>{
            isItPrime([4]);
        }).toThrow('a Number is required');
    });

    test('return true/false depending on whether it is a prime number or not ', () =>{
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(7.0)).toBe(true);
        expect(isItPrime(8.0)).toBe(false);
        expect(isItPrime(8.1)).toBe(false);
        expect(isItPrime(12)).toBe(false);
        expect(isItPrime(761)).toBe(true);
        expect(isItPrime(0)).toBe(false);
        expect(isItPrime(-7)).toBe(false);
        expect(isItPrime(-8)).toBe(false);
    });
});

describe('createMatrix', ()=>{
    test('it throws an error if the first argument is not a number or the second argument is empty', () =>{
        expect(()=>{
            createMatrix();
        }).toThrow('n is required');

        expect(()=>{
            createMatrix(2);
        }).toThrow('fill is required');

        expect(()=>{
            createMatrix('foo', 'foo');
        }).toThrow('the first argument is not a number');

        expect(()=>{
            createMatrix('4', 'foo');
        }).toThrow('the first argument is not a number');
    });

    test('it returns a matrix of 1 * 1 when passed 1', ()=>{   
        expect(createMatrix(1, 'foo')).toEqual([['foo']]);
        expect(createMatrix(3, 4)).toEqual([[4, 4, 4], [4, 4, 4], [4, 4, 4]]);
    })
});

describe('areWeCovered', ()=>{
    test('it throws an error if the first argument is not an Array and the second is not a String', () =>{
        expect(()=>{
            areWeCovered();
        }).toThrow('staff is required');

        expect(()=>{
            areWeCovered('paca', 'Monday');
        }).toThrow('the first argument is not an Array');

        expect(()=>{
            areWeCovered(['paca'], 5);
        }).toThrow('the second argument is not a String');
    });
    test('if returns false if there are not staff at all', ()=>{
        expect(areWeCovered([], 'Monday')).toBe(false);
        expect(areWeCovered([], 'Tuesday')).toBe(false);
        expect(areWeCovered([], 'Wednesday')).toBe(false);
        expect(areWeCovered([], 'Thursday')).toBe(false);
        expect(areWeCovered([], 'Friday')).toBe(false);
        expect(areWeCovered([], 'Saturday')).toBe(false);
        expect(areWeCovered([], 'Sunday')).toBe(false);
    });

    test('if returns false if there are staff but < 3 not scheduled to work', ()=>{
        const staff = [
            {name: 'gary', rota: ['Monday', 'Thuesday']},
            {name: 'paul', rota: ['Monday', 'Thuesday']},
            {name: 'sally', rota: ['Monday', 'Thuesday']},
            {name: 'jess', rota: ['Monday', 'Thuesday']},
        ];
        expect(areWeCovered(staff, 'Monday')).toBe(true);
        expect(areWeCovered(staff, 'Thuesday')).toBe(true);
        expect(areWeCovered(staff, 'Wednesday')).toBe(false);
        expect(areWeCovered(staff, 'Thursday')).toBe(false);
        expect(areWeCovered(staff, 'Friday')).toBe(false);
        expect(areWeCovered(staff, 'Saturday')).toBe(false);
        expect(areWeCovered(staff, 'Sunday')).toBe(false);
    })
});