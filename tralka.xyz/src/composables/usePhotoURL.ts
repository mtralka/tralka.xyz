
export const getPhotoURL = (src: string) => {
	return new URL(`../assets/images/${src}`, import.meta.url).href;
};