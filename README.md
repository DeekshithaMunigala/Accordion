# FAQ App
This is a simple FAQ (Frequently Asked Questions) Accordion web application built with React.

## Overview
The FAQ app consists of two main components:

- Body: This component renders the list of questions fetched from the Data module and passed down as props.
- Questions: This component represents each individual question. It utilizes state to toggle the visibility of the answer text.

## Installation
To run this application locally, follow these steps:

1. Clone this repository to your local machine:

```git clone https://github.com/DeekshithaMunigala/faq-app.git```

2. Navigate to the project directory:

`cd faq-app`

3. Install dependencies using npm or yarn:

`npm install`
# or
`yarn install`

4. Start the development server:

`npm start`
# or
`yarn start`

5. Open your browser and visit http://localhost:3000 to view the application.

## Usage
- The application displays a list of frequently asked questions.
- Click on each question to reveal the answer.
- Click on the question again to hide the answer.

## File Structure
- src/
    - components/
        - Body.js: Main component responsible for rendering the list of questions.
        - Questions.js: Component to render individual question items.
        - Data.js: Contains an array of sample questions and answers.
    - App.js: Entry point of the application where components are imported and used.


## Technologies Used
- React
- useState hook for managing component state
- React Icons for displaying toggle icons

## Contributing
Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
