const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
    
} = require("../challenges/exercise007");

describe('sumDigits', () => {
  test('returns 0 if n is 0', () => {
    expect(sumDigits(0)).toBe(0);
  });

  test('returns sum of digits if n > 1', () => {
    expect(sumDigits(14)).toBe(5);
    expect(sumDigits(1256)).toBe(14);
    expect(sumDigits(10085)).toBe(14);
  });
});

describe('createRange', () => {
  test('returns the range of numbers with interval of 1', () => {
    expect(createRange(1, 5)).toEqual([1,2,3,4,5]);
    expect(createRange(3,8)).toEqual([3,4,5,6,7,8]);
    expect(createRange(-4, 4)).toEqual([-4,-3,-2,-1,0,1,2,3,4]);
  });
  
  test('returns the range of numbers with interval greater than 1', () => {
    expect(createRange(1,5,2)).toEqual([1,3,5]);
    expect(createRange(3,11,3)).toEqual([3,6,9]);
    expect(createRange(-10,5,2)).toEqual([-10,-8,-6,-4,-2,0,2,4]);
  });
});

describe('getScreenTimeAlertList', () => {
  const users = [
    {
     username: 'beth_1234',
     name: 'Beth Smith',
     screenTime: [
       {
         date: '2019-05-01',
         usage: { twitter: 20, instagram: 45, facebook: 60 },  
       },
       {
        date: '2019-05-02',
        usage: { twitter: 7, instagram: 2, facebook: 10},  
       },
       {
        date: '2019-05-03',
        usage: { twitter: 37, instagram: 48, facebook: 10},  
       },
       {
        date: '2019-05-04',
        usage: { twitter: 18, instagram: 25, facebook: 40},  
       },  
      ],
     },
     {
       username: 'sam_j_1989',
       name: 'Sam Jones',
       screenTime: [
         {
          date: '2019-05-01',
          usage: { mapMyRun: 43, whatsApp: 65, facebook: 50, safari: 20 },  
         },
         {
          date: '2019-05-02',
          usage: { mapMyRun: 10, whatsApp: 45, facebook: 10, safari: 25},  
          },
         {
          date: '2019-05-03',
          usage: { mapMyRun: 7, whatsApp: 20, facebook: 45, safari: 23},  
         },
         {
          date: '2019-05-04',
          usage: { mapMyRun: 18, whatsApp: 35, facebook: 80, safari: 41},  
         },  
       ],
      },
    ];

    test('returns a list of users who spent more than 100 minutes using apps for a given date', () => {
    expect(getScreentimeAlertList(users, '2019-05-01')).toEqual(['beth_1234', 'sam_j_1989']);
    expect(getScreentimeAlertList(users, '2019-05-04')).toEqual(['sam_j_1989']);
  });
  
    test('return no users if there is no usage on a given date', () => {
     const users = [
    {
     username: 'beth_1234',
     name: 'Beth Smith',
     screenTime: [
       {
         date: '2019-05-01',
         usage: { twitter: 20, instagram: 45, facebook: 60 },  
       },
       {
        date: '2019-05-02',
        usage: { twitter: 7, instagram: 2, facebook: 10},  
       },
       {
        date: '2019-05-03',
        usage: { twitter: 37, instagram: 48, facebook: 10},  
       },
       {
        date: '2019-05-04',
        usage: { twitter: 18, instagram: 25, facebook: 40},  
       },  
      ],
     },
     {
       username: 'sam_j_1989',
       name: 'Sam Jones',
       screenTime: [
         {
          date: '2019-05-01',
          usage: { mapMyRun: 43, whatsApp: 65, facebook: 50, safari: 20 },  
         },
         {
          date: '2019-05-02',
          usage: { mapMyRun: 10, whatsApp: 45, facebook: 10, safari: 25},  
          },
         {
          date: '2019-05-03',
          usage: { mapMyRun: 7, whatsApp: 20, facebook: 45, safari: 23},  
         },
         {
          date: '2019-05-04',
          usage: { mapMyRun: 18, whatsApp: 35, facebook: 80, safari: 41},  
         },  
       ],
      },
    ];
    expect(getScreentimeAlertList(users, '2021-10-01')).toEqual([]);
    });

    test('return no users if usage is less than 100 minutes on a given date', () => {
        const users = [
       {
        username: 'beth_1234',
        name: 'Beth Smith',
        screenTime: [
          {
            date: '2019-05-01',
            usage: { twitter: 20, instagram: 45, facebook: 60 },  
          },
          {
           date: '2019-05-02',
           usage: { twitter: 7, instagram: 2, facebook: 10},  
          },
          {
           date: '2019-05-03',
           usage: { twitter: 37, instagram: 48, facebook: 10},  
          },
          {
           date: '2019-05-04',
           usage: { twitter: 18, instagram: 25, facebook: 40},  
          },  
         ],
        },
        {
          username: 'sam_j_1989',
          name: 'Sam Jones',
          screenTime: [
            {
             date: '2019-05-01',
             usage: { mapMyRun: 43, whatsApp: 65, facebook: 50, safari: 20 },  
            },
            {
             date: '2019-05-02',
             usage: { mapMyRun: 10, whatsApp: 45, facebook: 10, safari: 25},  
             },
            {
             date: '2019-05-03',
             usage: { mapMyRun: 7, whatsApp: 20, facebook: 45, safari: 23},  
            },
            {
             date: '2019-05-04',
             usage: { mapMyRun: 18, whatsApp: 35, facebook: 80, safari: 41},  
            },  
          ],
         },
       ];
       expect(getScreentimeAlertList(users, '2019-05-02')).toEqual([]);
    });
}); 

describe("hexToRGB", () => {
  
  test("converts hexvalue to RGB value", () => {
    expect(hexToRGB("#FF1426")).toBe("rgb(255,20,38)");
    expect(hexToRGB("#CC12CD")).toBe("rgb(204,18,205)");
    expect(hexToRGB("#A11514")).toBe("rgb(161,21,20)");
  });
});

describe("findWinner", () => {
   const winner = [
     [
       ["X", "0", "0"],
       ["X", null, "0"],
       ["X", null, "X"],
     ],
   ];
   
   test("Player X is the winner", () => {
     expect(findWinner(winner)).toBe("X");  
   });

   const winner1 = [
    [
      ["X", "X", "X"],
      ["0", null, "0"],
      ["0", null, "X"],
    ],
  ];
  
  test("Player X is the winner", () => {
    expect(findWinner(winner1)).toBe("X");  
  });

  const winner2 = [
    [
      ["X", "0", "0"],
      ["0", "X", "0"],
      ["0", null, "X"],
    ],
  ];
  
  test("Player X is the winner", () => {
    expect(findWinner(winner2)).toBe("X");  
  });

  const winner3 = [
    [
      [null, "0", "0"],
      ["X", null, "0"],
      ["X", "X", "0"],
    ],
  ];
  
  test("Player 0 is the winner", () => {
    expect(findWinner(winner3)).toBe("0");  
  });

  const winner4 = [
    [
      ["X", "0", "0"],
      ["X", null, "0"],
      [null, null, "X"],
    ],
  ];
  
  test("No player is the winner", () => {
    expect(findWinner(winner4)).toBe(null);  
  });
});
