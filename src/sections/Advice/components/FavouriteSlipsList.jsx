function FavouriteSlipsList({favourites}){
    return(
        <section className="favourite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
                {favourites.map((favourite, i) => {
                    return(
                        <li key={i}>{favourite}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default FavouriteSlipsList