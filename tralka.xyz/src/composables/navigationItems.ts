import generatedRoutes from '~pages';
export const headerItems = computed(() => {
	return generatedRoutes.filter((obj) => obj.meta?.header === undefined ? true : obj.meta.header)
})

export const footerItems = computed(() => {
	return generatedRoutes.filter((obj) => obj.meta?.footer === undefined ? true : obj.meta.footer)
});