module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: { tem: 'repeat(auto-fit, minmax(250px, 1fr))' },
      backgroundImage: {
        back: "url('https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop')",
        front: "url('https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
}
