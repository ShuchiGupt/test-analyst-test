# Technical Assessment - Test Analyst  Answers

# Test 1- Automation Test
**How to run** :
- Download the code
- Go to automation folder in terminal window
- run __npm install__
- Run the test case: __npx cypress run__

**Files Description**
- https://github.com/shuchigupt/test-analyst-test/blob/main/automation/cypress/e2e/harvey_norman.cy.js is the Test case
- https://github.com/shuchigupt/test-analyst-test/blob/main/automation/cypress/videos/harvey_norman.cy.js.mp4 is video showing the run of 2 test cases
- https://github.com/shuchigupt/test-analyst-test/blob/main/automation/cypress/videos/cypress-run-result.png shows the screenshot of Terminal window of cypress run

**Some other observations**
- Test cases via cypress did not run on Chrome, becuase of Re-captcha issue. I have used Electron version
- Lot of selectors do not have test-id for proper selection. example : ProductPageSidebarTabs_sf-sidebar-tabs-content--active__zGi0U

# Test 2 - Manual Test
This File https://github.com/shuchigupt/test-analyst-test/blob/main/Credit%20Card%20Payment%20Test%20Cases.csv contains manual Test cases. Best is to open it in Excel or Google Docs. I have prepared it in Google Docs and exported as CSV file. 
I have not focussed on all the login scenario, just a couple to test login pass and fail. Rest of Test cases cover the Checkout page using Credit Card


# Test 3 - Sql Query
This file https://github.com/shuchigupt/test-analyst-test/blob/main/query.sql contains the Sql Query. 

**Some Points**
- I have used Postgres Syntax instead of MySql (using Limit vs Top)
- I have added 2 version of query. One with Order BY on customer first name and other without any order by
