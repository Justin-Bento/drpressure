# Dr. Pressure

This is a company website for Dr. Pressure. It is a pressure washing company based out of Nanaimo, British Columbia, Canada. Operating all over Vancouver Island in Nanaimo, Campbell River, Courtney, Comox, Duncan, Salt Spring Island, Victoria and Ladysmith. Our services include: driveways, home exteriors, moss removal, patios, decks and other outdoor areas.

## Key Features:

- **Built with Tailwind CSS & Alpine.js**
- **5+ Pages**
- **15+ Sections**
- Clean & Modern Design
- Fully Responsive
- Dark & Light Mode
- Fast & Performant
- Super Lightweight
- View Transitions (experimental)
- **Prettier** Code Formatter
- **Google Fonts**
- **Remix Icons**
- Free Updates

## Project Structure

Inside the project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
│   └── content/
│       └── / collections
│       └── / singletons
│   └── emv.d.ts
├── .prettierrc
├── astro.config.mjs
├── content.config.ts
├── Dockerfile
├── keystatic.config.ts
├── package.json
├── README.md
├── pnpm-lock.yaml
└── tsconfig.json
```

- `public/*` - Any static assets (images, fonts, icons, ...)
- `src/*` - Project source code (components, pages, ...)
- `src/components/*` - Reusable Astro components used to build pages.
- `src/content/*` - Astro folder to store content tollections to help organize and query your documents enable Intellisense and type checking in your editor, and provide automatic TypeScript type-safety for all of your content.
- `src/layouts/*` - Astro components that define the UI structure shared by one or more pages..
- `src/pages/*` - Astro components used to create new pages on your site. Each page is exposed as a route based on its file name.
- `.prettierrc` - Prettier configuration file.
- `astro.config.mjs` - Astro configuration file.
- `content.config.ts` - Astro content configuration file.
- `Dockerfile` - Contains instructions for building your source code.
- `keystatic.config.ts` - Keystatic configuration file.
- `package.json` - File used by JavaScript package managers to manage your dependencies. It also defines the scripts that are commonly used to run Astro.
- `tailwind.config.cjs` - Tailwind configuration file. The theme section is where you define your color palette and fonts.
- `tsconfig.json` - TypeScript configuration file.

## Deployment

Ready to build and deploy your site? Follow the [official documentation](https://docs.astro.build/en/guides/deploy/).

## Docekr Local Deployment

```bash
docker build -t drpressure:latest .
docker run -p 4321:4321 drpressure:latest
```

## Support

If you have any questions or suggestions do not hesitate to contact me.

## License

This project is licensed under the terms of the MIT license.

## Acknowledgementss

Thank you Astro.js for creating the stone template. It is a great open-source Astro theme specially designed for Business, Marketing, SaaS and Startup websites.
