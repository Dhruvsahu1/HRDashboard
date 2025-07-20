// lib/utils.js

const DEPARTMENTS = [
    'Engineering',
    'HR',
    'Sales',
    'Marketing',
    'Finance',
    'Support',
    'Product',
    'Design',
  ];
  
  export function getRandomDepartment() {
    return DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)];
  }
  
  export function getRandomRating() {
    return Math.floor(Math.random() * 5) + 1;
  } 