export const LeaderCard = ({ imgSrc, alt, name,href }) => (
  <a href={href} className="block">
    <article
    className="leader-card bg-gray-100 rounded-lg p-0 text-center shadow-sm hover-lift card-hover transition-all duration-300"
    tabIndex="0"
    aria-label={`Chân dung ${name}`}
    >
      <img
        src={imgSrc}
        alt={alt}
        className="border-b border-gray-300 mx-auto w-full h-48 object-cover rounded-t-lg hover-scale transition-transform duration-300"
        />
    </article>
      <p className="leader-name bg-gray-300 text-gray-700 text-sm py-1 mt-0 text-center transition-colors duration-200 hover:bg-gray-400">
        {name}
      </p>
  </a> 
);
