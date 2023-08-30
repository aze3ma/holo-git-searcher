# GitHub Search App

This is a React application that allows users to search for GitHub users and repositories using the GitHub API.

## Features

-   Search for GitHub users by username
-   View user details, including profile information and repositories
-   Search for GitHub repositories by repository name
-   View repository details, including owner information and README

## Technologies Used

-   React
-   GitHub API

## Getting Started

To run this application locally, follow these steps:

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/github-search-app.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd github-search-app
    ```

3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Obtain a personal access token from GitHub:

    -   Visit the GitHub Settings page.
    -   Navigate to Developer Settings > Personal access tokens.
    -   Click on "Generate new token" and follow the prompts.
    -   Select the required scopes (e.g., `user` and `repo`) for accessing user and repository data.
    -   Copy the generated token.

5.  Create a `.env` file in the root directory of the project:

    ```
    REACT_APP_GITHUB_TOKEN=your-personal-access-token
    ```

6.  Start the development server:
    ```bash
    npm start
    ```
7.  Open your browser and visit `http://localhost:3000` to access the application.

## Usage

-   On the home page, you can search for GitHub users by entering their username in the search input field and clicking the "Search Users" button.
-   The search results will be displayed below, showing the matching users. Click on a user to view their profile and repositories.
-   On the user profile page, you can see the user's profile information and a list of their repositories. Click on a repository to view its details.
-   On the repository details page, you can see information about the repository, including the owner and the README file.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

-   [React](https://reactjs.org/)
-   [GitHub API](https://docs.github.com/en/rest)
