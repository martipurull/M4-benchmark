import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'



const ArtistDisplay = () => {
    const [artistToDisplay, setArtistToDisplay] = useState({})

    const params = useParams()
    console.log(params)

    const [isError, setIsError] = useState(false)

    const getArtist = async (artistId) => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + artistId, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGY4NmFhY2FhMjAwMTU1MmExODAiLCJpYXQiOjE2MzY2MzY5MzcsImV4cCI6MTYzNzg0NjUzN30.uqOJ27uEjuSzPvSujE9DuNRI0lJELmoanrTPYDsO6qU"
                }
            })
            if (response.ok) {
                const artistData = await response.json()
                setArtistToDisplay(artistData)
                console.log(artistToDisplay)
            } else {
                console.log('response error!')
                setIsError(true)
            }
        } catch (error) {
            console.log('fetch error!')
            setIsError(true)
        }

    }

    useEffect(() => {
        getArtist(params.artistId)
    })

    return (
        <>
            <div className="row">
                <div className="col-12 col-md-10 col-lg-10 mt-5">
                    <h2 className="titleMain">{artistToDisplay.name}</h2>
                    <div id="followers">{artistToDisplay.nb_fan} followers</div>
                    <div className="d-flex justify-content-center" id="button-container">
                        <button className="btn btn-success mr-2 mainButton" id="playButton">
                            PLAY
                        </button>
                        <button className="btn btn-outline-light mainButton" id="followButton">
                            FOLLOW
                        </button>
                    </div>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-10 offset-1 col-md-10 col-lg-10 p-0">
                    <div class="mt-4 d-flex justify-content-start">
                        <h2 class="text-white font-weight-bold">Tracks</h2>
                    </div>
                    <div class="pt-5 mb-5">
                        <div class="row" id="apiLoaded">
                            <div class="col-sm-auto col-md-auto text-center mb-5">
                                <Link to="/">
                                    <img
                                        class="img-fluid"
                                        src="https://cdns-images.dzcdn.net/images/cover/e2491c22fb19c154e46b449ff7aa7a62/250x250-000000-80-0-0.jpg"
                                        alt="1"
                                    />
                                </Link>
                                <p>
                                    <Link to='/'><div> Track: "Shape Of My Hear..." </div></Link>
                                    <br />
                                    <Link to="/"><div> Album: "Ten Summoner's T..." </div></Link>
                                </p>
                            </div>
                            <div class="col-sm-auto col-md-auto text-center mb-5">
                                <Link to="/">
                                    <img
                                        class="img-fluid"
                                        src="https://cdns-images.dzcdn.net/images/cover/e2491c22fb19c154e46b449ff7aa7a62/250x250-000000-80-0-0.jpg"
                                        alt="1"
                                    />
                                </Link>
                                <p>
                                    <Link to='/'><div> Track: "Russians"  </div></Link>
                                    <br />
                                    <Link to="/"><div> Album: "Fields Of Gold -..." </div></Link>
                                </p>
                            </div>
                            <div class="col-sm-auto col-md-auto text-center mb-5">
                                <Link to="/">
                                    <img
                                        class="img-fluid"
                                        src="https://cdns-images.dzcdn.net/images/cover/e2491c22fb19c154e46b449ff7aa7a62/250x250-000000-80-0-0.jpg"
                                        alt="1"
                                    />
                                </Link>
                                <p>
                                    <Link to='/'><div> Track: "Every Breath You..." </div></Link>
                                    <br />
                                    <Link to="/"><div> Album: "My Songs (Deluxe..." </div></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtistDisplay