const filters = [
  {
    type: 'select',
    name: 'work',
    label: 'Show Me',
    children: [
      {
        title: 'All Works',
        value: null,
      },
      {
        title: 'Frontend Developer',
        value: 'Frontend-Developer',
      },
      {
        title: 'Backend Developer',
        value: 'Backend-Developer',
      },
    ],
  },
  {
    type: 'select',
    name: 'industry',
    label: 'In',
    children: [
      {
        title: 'All Industries',
        value: null,
      },
      {
        title: 'Microsoft',
        value: 'Microsoft',
      },
      {
        title: 'Facebook',
        value: 'Facebook',
      },
    ],
  },
];

export default filters;
