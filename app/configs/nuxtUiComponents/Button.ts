export const ButtonUIConfig = {
  slots: {
    base: 'justify-center rounded-lg text-lg cursor-pointer'
  },
  variants: {
    size: {
      md: {
        base: 'py-3.5 text-sm md:text-base'
      },
    },
  },
  compoundVariants: [
    {
      color: 'brand-primary',
      variant: 'solid',
      class: 'bg-brand-primary-300 dark:bg-brand-primary-dark-300 hover:bg-brand-primary-400 dark:hover:bg-brand-primary-dark-400 text-white'
    },
    {
      color: 'secondary',
      variant: 'solid',
      class: 'bg-[#45C6FF] hover:bg-[#2ca4d8]'
    },
  ]
}