/*
Export a const instance of WeakMap and name it weakMap.

Export a new function named queryAPI.
It should accept an endpoint argument like so:

  {
    protocol: 'http',
    name: 'getUsers',
  }

Track within the weakMap the number of times queryAPI is called for
 each endpoint.
When the number of queries is >= 5 throw an error with the message:
'Endpoint load is high.'
*/

// const endpoint = { protocol: 'http', name: 'getUsers' };
export const weakMap = new WeakMap();
let count = 0;

export function queryAPI(endpoint) {
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, count += 1);
  }
}
