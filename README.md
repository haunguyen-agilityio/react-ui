# Welcome to NYDIG react-ui!

### Code Structure

```
├── react-ui
│   ├── .storybook
│   ├── .husky
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── themes
│   │   ├── pages
│   │   │    ├── index.tsx
│   │   │    ├── _app.tsx
│   │   │    ├── _document.tsx
|   ├── tsconfig.json
|   ├── next.config.js
|   ├── .eslintrc.json
|   ├── .lintstagedrc
|   ├── .jest.config.ts
|   ├── ..prettierrc
|   ├── README.md
|   └────── package.json
```

### GETTING STARTED

#### Clone project

- `git clone git@gitlab.asoft-python.com:ponyta/react-ui.git`

#### Checkout branch:

- `git checkout dev`

#### Installation

**Step 1:** `cd react-ui`

**Step 2:** Install the dependencies with `yarn install`

#### How to run storybook

- `yarn storybook`

#### How to run unit test

- `yarn test`

## Available Scripts

#### `yarn storybook`

Existed UI components can be found in the storybook. New UI component development should provided a storybook. Please refer the `*.storybook.tsx` files.

#### `yarn test`

Jest is used do the code test. Please refer `*.test.ts` files.

#### `yarn ci`

This script can be used to check the code styles and do jest test before commiting the code.

#### `yarn test:coverage`

Run test and report test coverage

#### `yarn test:updateSnapshots`

Update test snapshots

## Resources

### Coding Convention

- [**Coding Convention and checklist**](https://docs.google.com/document/d/1Q894ZmCa2PQgVTW6nKRd017FDppa4af0aLoUsqja4Ig/edit): Technical stack will be use in this project

### Front-end Frameworks

- [**FE Technical Stack**](https://docs.google.com/document/d/1uZfUrg32YjULvho5VCsoaG80bMqmQXXCJoWupf_Rbe8/edit): Technical stack will be use in this project
