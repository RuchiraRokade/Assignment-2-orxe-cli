import { OrxeCounter } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-counter-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let Counter;

  beforeEach(async () => {
    OrxeCounter;
    document.body.appendChild(document.createElement('Counter'));
    Counter = document.querySelector('Counter') as OrxeCounter;
  });

  afterEach(() => {
    Counter.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(Counter);
    expect(result).toHaveNoViolations();
  });
});
