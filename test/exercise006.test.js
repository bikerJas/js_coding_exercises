const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
    
} = require("../challenges/exercise006");

describe("sumMultiplies", () => {
  test("returns the sum of the numbers that are a multple of 3 or 5", () => {
    expect(sumMultiples([23,42,18,16,25])).toBe(85);
    });

  test("if no number is a multiple of 3 or 5, returns 0", () => {
    expect(sumMultiples([13, 22, 88, 8, 1, 7])).toBe(0);
    });

  test("returns 0 if it is an empty array", () => {
    expect(sumMultiples([])).toBe(0);
    });
});

describe("isValidDNA", () => {
  test("returns true for valid DNA string", () => {
    expect(isValidDNA("CG")).toBe(true);
    expect(isValidDNA("TCAAAT")).toBe(true);
    expect(isValidDNA("GTATCC")).toBe(true);
  });
  
  test("returns false for invalid string", () => {
    expect(isValidDNA("ZBYX3")).toBe(false);
    expect(isValidDNA("CGXDB")).toBe(false);
    expect(isValidDNA("483CGTA")).toBe(false);
  });
  
  test("returns false if lowercase letters", () => {
    expect(isValidDNA("cgTA")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("returns complementary DNA string", () => {
    expect(getComplementaryDNA("CG")).toBe("GC");
    expect(getComplementaryDNA("TCAAAT")).toBe("AGTTTA");
    expect(getComplementaryDNA("GTATCC")).toBe("CATAGG");
  });
    
  test("returns empty string for no input", () => {
    expect(getComplementaryDNA("")).toBe("");    
  });
});

describe("isItPrime", () => {
    test("prime numbers", () => {
      expect(isItPrime(13)).toBe(true);
      expect(isItPrime(47)).toBe(true);
      expect(isItPrime(73)).toBe(true);
    });
    
    test("not a prime number", () => {
      expect(isItPrime(10)).toBe(false);
      expect(isItPrime(65)).toBe(false);
      expect(isItPrime(87)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("returns an empty array if n is 0", () => {
      expect(createMatrix(0, 'foo')).toEqual([]);
    });
    
    test("matrix should be returned", () => {
      expect(createMatrix(3, 'foo')).toEqual([
          ['foo', 'foo', 'foo'], 
          ['foo', 'foo', 'foo'],
          ['foo', 'foo', 'foo']
        ]);
      expect(createMatrix(5, 'foo')).toEqual([
          ['foo', 'foo', 'foo', 'foo', 'foo'],
          ['foo', 'foo', 'foo', 'foo', 'foo'],
          ['foo', 'foo', 'foo', 'foo', 'foo'],
          ['foo', 'foo', 'foo', 'foo', 'foo'],
          ['foo', 'foo', 'foo', 'foo', 'foo']
      ]);
    });
});

describe("areWeCovered", () => {
    test("returns true if there are 3 employees going to work", () => {
      expect(areWeCovered(
          [
            {name: 'Bob', rota: ['Monday']},
            {name: 'Fred', rota: ['Monday']},
            {name: 'Mary', rota: ['Monday']},
          ],
          'Monday'
      )
      ).toBe(true);
    });

    test("returns false if there are 0 employees going to work", () => {
        expect(areWeCovered(
            [
              {name: 'Bob', rota: ['Monday']},
              {name: 'Fred', rota: ['Monday']},
              {name: 'Mary', rota: ['Monday']},
            ],
            'Tuesday'
        )
        ).toBe(false);
      });
});