# Timer Vanilla SPA

## Overview

Yet another Timer JS SPA. Why? I wanted a simple timer with minimal resources. This project is a straightforward Timer application built using vanilla JavaScript, HTML, and CSS, with Vite for development and build tooling. The application allows users to set a timer by specifying hours, minutes, and seconds. When the timer reaches zero, an alarm sound is played, and a visual notification (image and vibration) is displayed.

[You can checkout the timer here](https://lumpsoid.github.io/timer-vanilla-spa/)

## Features

- Set a timer using hours, minutes, and seconds input fields.
- Start and stop the timer.
- Visual and audio notifications when the timer ends.
- Responsive and user-friendly interface.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/timer-vanilla-spa.git
   cd timer-vanilla-spa
   ```

2. Install the dependencies:

   ```bash
   yarn
   ```

### Development

To start the development server with live-reloading:

```bash
yarn dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:3000` (or the port specified in the terminal) to see the application.

### Building for Production

To build the project for production:

```bash
yarn build
```

This will create a `dist` directory with the production-ready files.

### Previewing the Production Build

To preview the production build locally:

```bash
yarn preview
```

This will start a local server to serve the files from the `dist` directory.

## Project Structure

- `index.html`: The main HTML file that includes the structure of the application.
- `src/`: Contains the source code.
  - `main.js`: The main JavaScript file that contains the timer logic.
  - `style.css`: The CSS file for styling the application.
- `public/`: Contains static assets like images and audio files.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please open an issue or submit a pull request.

## License

This project is licensed under the GNU GPLv3 License. See the [LICENSE](LICENSE.md) file for details.

## Acknowledgements

This project uses icons from the [Lucide](https://lucide.dev/) icon pack.

### Lucide License

ISC License

Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
