# specdoc-organize

# SpecDoc

This application is designed as a knowledge management tool, akin to Notion, that enables users to organize, store, and collaborate on information effortlessly. SpecDoc focuses on providing a streamlined user experience with an intuitive interface that promotes productivity.

## Screens

### Dashboard
Serves as the central hub where users can access different types of documents, databases, and collaborative spaces.

- **Behavior:** Features customizable widgets for quick access to recently edited files, pinned items, and overview of the workspace.
- **Layout:** Employs a grid-layout with cards representing different documents or spaces, spaced deliberately to use whitespace, enhancing readability and user comfort.

### Document Editor
Allows users to create, edit, and manage rich text documents.

- **Behavior:** Supports rich text editing with features such as text formatting, embedding of multimedia, and creation of interconnected databases.
- **Layout:** Utilizes a clean and expansive workspace that allows for focused writing and editing with easy toolbar access for formatting needs.

## Components

### Header
Displays the application's logo and includes primary navigation like search, notifications, and user settings.

- **Behavior:** The search function allows users to quickly find documents or data within their workspace. Notifications alert users to updates or messages, and user settings control personalization and account settings.
- **Design:** Features a light base color for the background with black text for clarity. Key interactive elements (e.g., notification bell) are highlighted in a vibrant accent color.

### Sidebar
Provides quick navigation to various sections of the app like Notes, Databases, Tasks, and Shared Spaces.

- **Behavior:** Persistent visibility with collapsible functionality to allow more screen real estate when needed. Highlights the current section for clarity.
- **Design:** Streamlined with a simplistic approach, utilizes the light base with text in grey to keep the focus less cluttered; active section highlighted with vibrant colors.

### Note Card
Displays a brief preview of notes or documents, including title, excerpt, and last modified timestamp.

- **Behavior:** Clicking on a note card opens the document in the editor view.
- **Design:** Designed with ample whitespace and a clear demarcation between cards, using shadows or light borders. Titles are prominent in black, while excerpts are in a lighter shade.

### Task Manager
Enables users to manage their tasks and projects with features like due dates, reminders, and tags.

- **Behavior:** Tasks can be added, edited, or marked as completed with simple interactions. Supports drag-and-drop rearranging.
- **Layout:** Tasks are listed in an easy-to-scan format, with completed tasks visually distinct from pending ones, using strikethroughs or opacity changes.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/specdoc-organize.git
cd specdoc-organize
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
