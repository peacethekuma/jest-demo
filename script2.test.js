const fetch = require('node-fetch');
const swapi = require('./script2');

//always use expect.assertions() to test asynchronous function
// retrun promises
it('calls swapi to get people with a promise',()=>{
  expect.assertions(1);
  return swapi.getPeoplePromise(fetch).then(data=>{
    expect(data.count).toEqual(87);
  })
})


// doen method
it('calls swapi to get people',(done)=>{
  expect.assertions(2)
  swapi.getPeople(fetch).then(data=>{
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5)
    done();
  })
})



it('getPeople retruns count and results',()=>{
  // Mock
  const mockFetch = jest.fn()
  .mockReturnValue(Promise.resolve({
    json:()=>Promise.resolve({
      count:87,
      results:[0,1,2,3,4,5]
    })
  }))


  expect.assertions(4);
  return swapi.getPeoplePromise(mockFetch).then(data=>{
    expect(mockFetch.mock.calls.length).toBe(1); //check call times
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people'); //check the request
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  })
})