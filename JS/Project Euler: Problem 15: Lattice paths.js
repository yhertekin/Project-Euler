/*
Project Euler: Problem 15: Lattice paths
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner

How many such routes are there through a given gridSize?
*/
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  function latticePaths(gridSize) {
    return factorial(2*gridSize)/(factorial(gridSize)**2)
  }
  
  latticePaths(4);
  