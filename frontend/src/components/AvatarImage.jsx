const AvatarImage = ({ src, alt = "Avatar", className = "" }) => {
  const fallback = `https://api.dicebear.com/9.x/adventurer/png?seed=${encodeURIComponent(alt)}`;

  return (
    <img
      src={src || fallback}
      alt={alt}
      className={className}
      onError={(e) => {
        if (e.target.src !== fallback) e.target.src = fallback;
      }}
    />
  );
};

export default AvatarImage;
