
// @ts-ignore
function importAll(r: __WebpackModuleApi.RequireContext) {
  const images: { [key: string]: string } = {};
  r.keys().forEach((key: any) => {
    const fileName = key.replace('./', '');
    images[fileName] = r(key).default || r(key);
  });
  return images;
}
// @ts-ignore
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

export default images;

