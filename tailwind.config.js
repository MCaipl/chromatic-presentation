/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'ci-primary': "var(--ci-primary)",
        'ci-secondary': "var(--ci-secondary)",
        'ci-tertiary': "var(--ci-tertiary)",

        'primary': "var(--primary)",
        'primary-content': "var(--primary-content)",

        'secondary': "var(--secondary)",
        'secondary-content': "var(--secondary-content)",

        'accent': "var(--accent)",
        'accent-content': "var(--accent-content)",

        'neutral': "var(--neutral)",
        'neutral-content': "var(--neutral-content)",

        'base-100': "var(--base-1)",
        'base-200': "var(--base-2)",
        'base-300': "var(--base-3)",
        'base-content': "var(--base-content)",

        'info': "var(--info)",
        'info-content': "var(--info-content)",

        'success': "var(--success)",
        'success-content': "var(--success-content)",

        'warning': "var(--warning)",
        'warning-content': "var(--warning-content)",

        'danger': "var(--danger)",
        'danger-content': "var(--danger-content)",
      },
      spacing: {
        '2xs': "var(--spacing-2xs)",
        'xs': "var(--spacing-xs)",
        'sm': "var(--spacing-sm)",
        'md': "var(--spacing-md)",
        'lg': "var(--spacing-lg)",
        'xl': "var(--spacing-xl)",
        '2xl': "var(--spacing-2xl)",
      }
    }
  },
  plugins: [],
}

