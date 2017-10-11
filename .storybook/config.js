import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/atoms.stories.js');
  require('../src/stories/molecules.stories.js');
  require('../src/stories/organisms.stories.js');
  require('../src/stories/ecosystems.stories.js');

  // You can require as many stories as you need.
}

configure(loadStories, module);
