# Mersive Dev Project
# Summary
Using a modern Front End Javascript framework / library create a reusable component for a Table of Data that accepts the array
of JSON objects defined below as input. We use React here at Mersive, but you can pick whatever framework
you are most comfortable using (React, Angular, Vue).
# Details
- The table should include headers for the column fields
- The table should show all columns for every field in the given JSON object
- The table should show all rows for the the list of items below
- The table should support sorting rows in ascending, descending order by column name
- The table should be searchable to only show rows that match a given search term
  - For example: Searching for '15' will return only one row (F-150)
- Bold the data for the "manufacturer" column for rows that were manufacturered by "Ford"
- Upper case the data for the "model" column in every row
Feel free to use open source to layout / style components, but you should implement the sort / search functionality yourself
We will leave decisions around what other props / inputs the table accepts up to you.
Feel free to use https://github.com/facebook/create-react-app or any other starter kit to take webpack / other config
out of the equation
If you need further clarification about anything, please let us know.
# Your Sample Data
```
// Automobiles
[
  {
    id: 1,
    manufacturer: 'Ford',
    model: 'Focus'
  },
  {
    id: 2,
    manufacturer: 'Ford',
    model: 'Mustang'
  },
  {
    id: 3,
    manufacturer: 'Ford',
    model: 'F-150'
  },
  {
    id: 4,
    manufacturer: 'Chevrolet',
    model: 'Corvette'
  },
  {
    id: 5,
    manufacturer: 'Chevrolet',
    model: 'Equinox'
  },
  {
    id: 6,
    manufacturer: 'Tesla',
    model: 'Model 3'
  },
  {
    id: 7,
    manufacturer: 'Toyota',
    model: 'Camry'
  },
  {
    id: 8,
    manufacturer: 'Dodge',
    model: 'Charger'
  },
  {
    id: 9,
    manufacturer: 'Dodge',
    model: 'Challenger'
  }
]
```
# Extra Credit
This part is optional, so feel free to skip it.
Make the "manufacturer" and "model" fields on each row editable, so that the changed values persist across page loads
