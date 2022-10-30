export function RecipePreview({ recipe }) {
  const { name, thumbnail_url } = recipe
  
  return (
    <div className="recipe-preview">
      <div className="aspect-ratio-169">
        <div className="aspect-ratio__inner-wrapper">
          <img src={thumbnail_url} alt="" />
        </div>
      </div>
      <div className="info">
        <h2>{name}</h2>
      </div>
    </div>
  )
}

