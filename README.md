# React: Leaderboard  

Submitting via personal github due to issues with pushing changes to Hackerrank.

By Kenneth Choi (kennethichoi@gmail.com)



### All unit tests passing: ###

<img width="512" alt="Screenshot 2023-12-20 at 4 53 32 PM" src="https://github.com/mrkchoi/hackerrank_leaderboard/assets/40152546/726ffd48-892c-4681-9f29-560265a37597">


---------------------------------------------------------------------------------


Create a basic sorting-based Single Page Application, as shown below. The HTML skeleton is already in place, but the application is not complete. Application requirements are given below, and the finished application must pass all of the unit tests.

![image](https://hrcdn.net/s3_pub/istreet-assets/e8l1BsH7q0cRXerreQ7QRg/final_lb.gif)



The app has one component: the **LeaderBoard** view.

The data to be filled into the table is stored in a variable called `response` inside the response.js file.

The structure of the response is as follows:

```
{
  list: [
    {
      rank: "1"
      name: "John Doe"
      points: "100"
      age: "25"
    },
    { ... }
  ]
}
```

| Keys           | Types                                      |
| -------------- | ------------------------------------------ |
| name       		 | The name of the user [String]              |
| age            | The age of the user [String]               |
| points         | The points accumulated by the user [String]|
| rank           | The rank of the user [String]              |


The app should implement the following functionalities:

- Initially, the table should be rendered with all 4 buttons, and the table contents should be filled in the order of how the data appears in the response when the route is "/".

- Each button click should navigate the user to the correct URL as given below:

| BUTTONS        | Corresponding URL  |
| -------------- | ------------------ |
| Rank       		 | '/rank'            |
| Points         | '/points'          |
| Name           | '/name'            |
| Age            | '/age'             |

- It should sort the specified contents in the table in ascending order based on the type of button that is clicked: Rank, Points, Name, or Age.
- Directly landing on that URL should sort the table based on the URL path (e.g., "/rank" should sort by rank on load).


### Note:

-  _The list of all user info to be filled into the table is present inside the response.js file._

- _The application needs to be implemented like a Single Page Application (SPA), involving URL changes using React Router and not through "href" that reloads the page._

#### The following data-testid attributes are required in the component for the tests to pass:

- The **table** tag should have 'app-table' and the **tbody** tag should have 'app-tbody' as data-testid.

- The Rank, Name, Points, and Age buttons must have 'route-rank', 'route-name', 'route-points', and 'route-age' as their data-testids respectively.

- Each **td** tag in the Rank column should have the data-testid in the following order: 'rank-0' for the first row, 'rank-1' for the second, and so on.

- Similarly, each **td** tag in the columns Name ('name-0', 'name-1', ...), Age ('age-0', 'age-1', ...), and Points ('points-0', 'points-1', ...) should also have its associated data-testids.


Please note that the component has the above data-testid attributes for test cases. It is advised not to change them.

## Environment 

- React Version: 16.13.1
- Default Port: 8000

**Read Only Files**
- `src/App.test.js`


**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```

