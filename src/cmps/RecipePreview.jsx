export function RecipePreview({ recipe }) {
  const { title, image } = recipe
  
  return (
    <div className="recipe-preview">
      <img src={image} alt="" />
      <div className="info">
        <h2>{title}</h2>
      </div>
    </div>
  )
}

