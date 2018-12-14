const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheesspuff.com',
  'disney.com',
  'dogPicture.com'
];

describe('googleSearch',()=>{
  it('this is a test',()=>{
    expect('Hello').toBe('Hello');
    // googleSearch('testtest',dbMock);
  })
  
  it('is a searching google',()=>{
    expect(googleSearch('testtest',dbMock)).toEqual([]);
    expect(googleSearch('dog',dbMock)).toEqual(['dog.com','dogPicture.com']);
  })
  
  it('work with undefined an null input',()=>{
    expect(googleSearch(undefined,dbMock)).toEqual([]);
    expect(googleSearch(null,dbMock)).toEqual([]);
  })
  
  it('does not return more than 3 matches',()=>{
    expect(googleSearch('.com',dbMock).length).toEqual(3)
  })
})



