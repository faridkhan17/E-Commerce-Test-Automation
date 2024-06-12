# soliver

## Test Plan
### 1. Introduction
This test plan aims to ensure the article details overlay in the s.Oliver E-Shop meets the required functionality and design specifications. The objective is to verify that the overlay displays necessary information, functions correctly, and is responsive across all screen sizes. This document outlines the test cases, quality measures, documentation process, and the automation strategy for regression testing.
### 2. Objectives
• Validate the functionality of the article details overlay.
• Ensure the overlay's design is consistent with the provided layout for large screens and is
appropriately adapted for smaller screens.
• Confirm that the overlay is responsive and performs well on all devices.
• Automate test cases to ensure continuous compliance with acceptance criteria.
### 3. Scope
The testing will cover:
• Overlay functionality (triggered by clicking the thumbnail).
• Display of required article information (pictures, name, colors, sizes, prices).
• Content within tab sections (product details, product fit, material and care instructions,
sustainability).
• Behavior of the sticky footer.
• Interactivity of color and size selections.
• Responsive design across different devices and screen sizes.
### 4. Test Cases
#### Test Case 1: Thumbnail Click
• Objective: Verify that clicking the article thumbnail opens the overlay.
• Steps:
1. Navigate to the product listing page.
2. Click on the product thumbnail.
• Expected Result: The overlay should open, displaying the product details.
#### Test Case 2: Overlay Content Display
• Objective: Ensure the overlay displays all required information.
• Steps:
1. Open the overlay by clicking the product thumbnail.
2. Verify that the overlay shows the product pictures, name, available colors, sizes, and
prices.
• Expected Result: All specified elements should be visible in the overlay.
#### Test Case 3: Tab Section Functionality
 • Objective: Confirm that the tab section works correctly.
• Steps:
1. Open the overlay.
2. Click on each tab (Product details, Product fit, Material and care instructions,
Sustainability).
3. Verify that the content updates according to the selected tab.
• Expected Result: Content should change appropriately with each tab selection.
#### Test Case 4: Sticky Footer Behavior
• Objective: Ensure the sticky footer functions correctly.
• Steps:
1. Open the overlay.
2. Scroll through the overlay content.
• Expected Result: The footer should remain at the bottom of the overlay, displaying the
article name and call-to-action button.
#### Test Case 5: Color and Size Interactivity
• Objective: Verify color and size selection interactivity.
• Steps:
1. Open the overlay.
2. Select different colors and verify the slideshow images update.
3. Select different sizes and verify availability updates.
• Expected Result: The images and sizes should update correctly based on the selected color.
#### Test Case 6: Responsive Layout Verification
• Objective: Test the overlay's responsiveness across various devices.
• Steps:
1. Open the website on different devices (mobile, tablet, desktop).
2. Open the overlay and verify its layout and functionality.
• Expected Result: The overlay should be responsive and functional across all devices.
#### Test Case 7: Navigation and Interactivity
• Objective: Ensure the overlay's navigation and interactivity are user-friendly. 
• Steps:
1. Open the overlay.
2. Interact with all clickable elements (tabs, buttons, color selectors).
• Expected Result: All interactive elements should be responsive and intuitive to use.
### 5. Test Environment • 
Browsers:
- Google Chrome (latest version)
- Mozilla Firefox (latest version)
- Safari (latest version)
- Microsoft Edge (latest version)
• Devices:
- Mobile: iPhone (latest versions), Android phones (various models and screen sizes)
- Tablet: iPad (latest versions), Android tablets
- Desktop: Windows PC (various resolutions), MacBook (various resolutions)
• Operating Systems:
- Windows 10/11
- macOS (latest version)
- iOS (latest version)
- Android (latest version)
• Tools:
- Playwright for automation
### 6. Quality Measures 
Code Review:
- Conduct thorough code reviews for all changes related to the overlay feature.
- Ensure that the code adheres to the project's coding standards and guidelines.
- Verify that the code is modular, maintainable, and well-documented.
- Identify potential bugs, performance issues, and security vulnerabilities.
• Automated Testing:
Develop comprehensive automated test scripts using Playwright to cover all functional and responsive test cases.
Implement tests for all critical paths, including thumbnail click functionality, overlay content display, tab interactions, and color/size interactivity.
Set up automated regression tests to run on every build to detect any changes that might break existing functionality.
Use Playwright’s capabilities to simulate different devices and browsers, ensuring broad test coverage.
Integrate automated tests into the CI/CD pipeline to ensure they run on every code
commit and deployment.
• Performance Testing:
Perform performance profiling of the overlay to ensure it loads quickly and efficiently. Test the performance impact of the overlay on the overall page load time.
Ensure the overlay's performance is consistent across different devices.
### 7. Test Execution
1.Initial Manual Testing:
◦ Perform manual testing based on the outlined test cases.
◦ Document any defects or deviations from expected behavior.
2.Automated Testing:
◦ Develop and execute automated tests for all functional and responsive test cases.
◦ Integrate automated tests into the CI/CD pipeline for continuous validation.
### 8. Documentation
• Test Case Documentation: Provide detailed test cases with expected and actual results.
• Defect Reports: Document all defects found, including steps to reproduce, severity, and
status.
• Test Summary Report: Summarize testing activities, results, quality measures, and any
issues encountered.
### 9. Feedback Loop
• Regularly communicate with the product owner and development team.
• Review feedback from stakeholders and incorporate it into the testing process.
• Ensure all issues are addressed before the final release.
### 10. Automation
Please find the automation part at /challenge/tests in the zip file. This file contains sample automated tests that can be extended. Only a few tests have been automated for interview purposes.
1. Install Playwright: Before running the tests, ensure that you have Playwright installed. You can install it globally using npm: 
 
npm install -g @playwright/test
2. Install Dependencies: Make sure that all project dependencies are installed. Navigate to the /challenge/tests folder and run: 
 
npm install
3. Start Application: Ensure that the application is running on http://localhost:8080/.
4. Run Tests: Once the application is running and dependencies are installed, execute the following command: 
 
npx playwright test --headed 
   
This command will run the tests in headed mode, allowing you to see the browser window while the tests are running. If you want to run the tests in headless mode, you can remove the --headed flag.
5. View Test Results: After the tests have finished running, you should see the test results in the terminal/console. Additionally, Playwright will generate a report with detailed test results in the test-results directory.
Integrate automated tests into the CI/CD pipeline for continuous validation.
 
### Observations:
• If automated tests fail, it may be due to random data generation in the application. This can be improved by either adding test data to the application or modifying the test cases accordingly.
• Sometimes, clicking on the thumbnail for a white shirt opens a different shirt. This behavior can be improved.
• The selection of shirt colors is also inconsistent. Clicking on one color may open a different color in the picture.
• The footer in the overlay is not sticky in all tabs, such as 'MATERIAL & CARE INSTRUCTIONS'.
