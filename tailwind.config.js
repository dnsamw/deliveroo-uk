/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   teal: {
    //     light: '#00ccbc',
    //     DEFAULT: '#00ccbc',
    //     dark: '#00ccbc',
    //   },
    //   orange: {
    //     light: '#e67400',
    //     DEFAULT: '#e67400',
    //     dark: '#e67400',
    //   },
    //   gray: {
    //     darkest: '#1f2d3d',
    //     dark: '#3c4858',
    //     DEFAULT: '#c0ccda',
    //     light: '#e0e6ed',
    //     lightest: '#f9fafc',
    //   }
    // },
    extend: {
      
			animation: {
				fade: 'fadeIn .5s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
		},
  },
  plugins: [],
}

