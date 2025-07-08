# Sentence Translator

Welcome to my Sentence Translator! This is a cool little web app built with HTML, CSS, and JavaScript that lets you translate sentences from one language to another. It’s super easy to use and works great whether you’re on your phone or computer.

## Check It Out

Want to see it in action? Take a peek at the live demo [here](https://janhvi-h.github.io/sentence-translator/).

## What’s Awesome About It

- Translate sentences into tons of different languages
- Looks great on any device, big or small
- Simple interface with dropdowns to pick your languages
- Get your translations instantly

## How to Get Started

1. Grab the code by cloning the repo:
   ```bash
   git clone https://github.com/Janhvi-H/sentence-translator.git
   ```
2. Hop into the project folder:
   ```bash
   cd sentence-translator
   ```
3. Open `index.html` in your browser, and you’re good to go!

## How to Use It

1. Add these files to your project:
   - `index.html`: The main layout
   - `styles.css`: Makes everything look pretty
   - `script.js`: Handles the translation magic
2. Pick your starting language and the one you want to translate to from the dropdowns.
3. Type your sentence in the text box.
4. Hit the "Translate" button, and boom—there’s your translated sentence!
5. Want to tweak the look? Mess around with `styles.css`. Need to change how it works? Check out `script.js`.

Here’s a quick look at the HTML setup:
```html
<div class="translator-container">
  <select id="source-language">
    <option value="en">English</option>
    <option value="es">Spanish</option>
    <!-- More languages here -->
  </select>
  <textarea id="input-sentence" placeholder="Type your sentence"></textarea>
  <select id="target-language">
    <option value="es">Spanish</option>
    <option value="en">English</option>
    <!-- More languages here -->
  </select>
  <button onclick="translateSentence()">Translate</button>
  <div id="translated-sentence"></div>
</div>
```

## What You’ll Need

- This app might use a translation API or library (like Google Translate API or LibreTranslate). Make sure you’ve got an API key or the right library set up in `script.js`. Follow the instructions for whichever service you’re using.

## Want to Help Out?

I’d love for you to contribute! Here’s how:

1. Fork the repo.
2. Create a new branch (`git checkout -b feature/your-cool-idea`).
3. Save your changes (`git commit -m 'Added something awesome'`).
4. Push it up (`git push origin feature/your-cool-idea`).
5. Open a Pull Request, and I’ll check it out!

## License

This project’s under the MIT License. Check out the [LICENSE](LICENSE) file for the details.

## Got Questions?

If you run into issues or just want to chat about the project, drop a note in the [GitHub Issues](https://github.com/Janhvi-H/sentence-translator/issues) section.

Happy translating!
