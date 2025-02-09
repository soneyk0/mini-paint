import type { Step } from '../composables/useOnboardingSteps.ts'

export const stepsEditorOnboarding: Step[] = [
  { element: '.brush', content: 'Brush.', tooltipPosition: 'right' },
  {
    element: '.line',
    content: 'Draws a straight line.',
    tooltipPosition: 'right',
  },
  { element: '.square', content: 'Draws a square.', tooltipPosition: 'right' },
  { element: '.circle', content: 'Draws a circle.', tooltipPosition: 'right' },
  {
    element: '.polygon',
    content: 'Draws a polygon.',
    tooltipPosition: 'right',
  },
  { element: '.star', content: 'Draws a star.', tooltipPosition: 'right' },
  {
    element: '.editor__figure-thickness',
    content: 'Choose the thickness of the figure.',
    tooltipPosition: 'right',
  },
  {
    element: '.editor__color',
    content: 'Choose the color of the figure.',
    tooltipPosition: 'right',
  },
  { element: '.clean', content: 'Clean a sheet.', tooltipPosition: 'right' },
  { element: '.save', content: 'Save to gallery.', tooltipPosition: 'right' },
  {
    element: '.back',
    content: 'Return to main page.',
    tooltipPosition: 'right',
  },
]

export const stepsHomePageOnboarding: Step[] = [
  {
    element: '.create-button',
    content: 'Click to create an image.',
    tooltipPosition: 'bottom',
  },
  {
    element: '.dropdown',
    content: 'Filter images by user email.',
    tooltipPosition: 'bottom',
  },
  {
    element: '.signout-button',
    content: 'Log out button.',
    tooltipPosition: 'left',
  },
  {
    element: '.menu__pagination',
    content: 'Pagination buttons.',
    tooltipPosition: 'top',
  },
  {
    element: '.change-theme-button',
    content: 'Change application theme.',
    tooltipPosition: 'right',
  },
]
