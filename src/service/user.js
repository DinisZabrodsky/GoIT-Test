

function UserData () {
    let favorites = []
    let firstStart = true

    const setLocalStr = () => {
        localStorage.removeItem("favorites")
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }

    const getLocalStr = () => {
        if (localStorage.getItem("favorites") && firstStart === true) {

            favorites.push(...JSON.parse(localStorage.getItem("favorites")))
            firstStart = false
            return
        }
        return
    }

    return {
        getFavorites() {
            getLocalStr()
            return favorites
            
        },

        setFavorites(element) {
            favorites.push(element)
            setLocalStr()
        },

        deleteFavorites(id) {
            favorites = favorites.filter(Elid => Elid !== id)
            setLocalStr()
        },

        
    }

}

export const user = UserData()
