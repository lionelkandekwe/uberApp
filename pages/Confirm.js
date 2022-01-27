import { useEffect } from "react"
import Map from "./components/Map"
import tw from "tailwind-styled-components"

const Confirm = () => {
  const getPickupCoordinates = () => {
    const pickup = "Nyagatare"
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoia2FuZGVrd2UiLCJhIjoiY2t5cG5mYzRuMGJoOTJvbW1vN2Q5MnNwciJ9.--a7EhJILhZ-LRgtjWTloQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Pickup Location: " + data.features[0].place_name)
        console.log(data.features[0].center)
      })
  }

  const DropoffCoordinates = () => {
    const dropoff = "Kigali"
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoia2FuZGVrd2UiLCJhIjoiY2t5cG5mYzRuMGJoOTJvbW1vN2Q5MnNwciJ9.--a7EhJILhZ-LRgtjWTloQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Dropoff location: " + data.features[0].place_name)
        console.log(data.features[0].center)
      })
  }

  useEffect(() => {
    getPickupCoordinates()
    DropoffCoordinates()
  }, [])

  return (
    <Wrapper>
      <Map />
      <RideContainer>Ride Selector confirm Button</RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
flex flex-col h-screen`

const RideContainer = tw.div`
flex-1
`
