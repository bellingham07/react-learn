import { recipes } from './data'

export default function RecipeList() {
    return (
        <div>
            <h1>菜谱</h1>
            {/* <Detail /> */}
            {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
        </div>
    );
}

function Recipe({ recipe }) {
    return (
        <ul>
            {recipe.name}
            {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
        </ul>
    )
}

function Detail() {
    const rs = recipes.map(recipe => {
        return (
            <div key={recipe.id}>
                <h2>{recipe.name}</h2>
                <Foods info={recipe.ingredients} />
            </div>
        )
    }
    )
    return <div>{rs}</div>
}

function Foods({ info }) {
    const foodList = info.map(food =>
        <li key={food}>{food}</li>
    )
    return <ul>{foodList}</ul>
}