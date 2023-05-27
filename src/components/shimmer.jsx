/**
 * Fournisseur de contexte pour le menu.
 * @param {String} classe - Le style du Shimmer.
 * @returns {JSX.Element} Le composant Fournisseur de contexte.
 */

export default function Shimmer({ classe }) {
  const style = `
  background: red
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards; 
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;
  `;

  return <div className={classe} style={{ style }}></div>;
}
